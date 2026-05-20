import posthog from 'posthog-js';
import { browser } from '$app/environment';

/** Shared rollout flag — must match widget-svc FLAG_KEY. */
export const FLAG_KEY = import.meta.env.VITE_FLAG_KEY ?? 'widget-demo-feature';

const hasApiKey = Boolean(import.meta.env.VITE_POSTHOG_API_KEY?.trim());

let initialized = false;

function ensurePostHog(): boolean {
  if (!browser || !hasApiKey) return false;
  if (!initialized) {
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
      api_host: import.meta.env.VITE_POSTHOG_HOST ?? 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
    });
    initialized = true;
  }
  return true;
}

/**
 * Wrap-point for FireWeave safe-rollout (sync). Prefer subscribeFlagState in UI.
 */
export function maybeNewBehavior(userId: string): boolean {
  if (!ensurePostHog()) return false;
  posthog.identify(userId);
  return posthog.isFeatureEnabled(FLAG_KEY) ?? false;
}

export type FlagState = {
  enabled: boolean;
  ready: boolean;
  error?: string;
};

/**
 * Client-only: wait for PostHog flags to load, then evaluate for userId.
 */
export function subscribeFlagState(
  userId: string,
  onUpdate: (state: FlagState) => void,
): () => void {
  if (!browser) {
    onUpdate({ enabled: false, ready: true });
    return () => {};
  }
  if (!hasApiKey) {
    onUpdate({
      enabled: false,
      ready: true,
      error: 'VITE_POSTHOG_API_KEY missing in build — set POSTHOG_API_KEY secret and redeploy',
    });
    return () => {};
  }
  if (!ensurePostHog()) {
    onUpdate({ enabled: false, ready: true });
    return () => {};
  }

  posthog.identify(userId);

  const apply = () => {
    onUpdate({
      enabled: posthog.isFeatureEnabled(FLAG_KEY) ?? false,
      ready: true,
    });
  };

  posthog.onFeatureFlags(apply);
  // Fallback when flags were already loaded before subscribe.
  queueMicrotask(apply);

  return () => {};
}

/** @deprecated use ensurePostHog via subscribeFlagState */
export function initPostHog(): void {
  ensurePostHog();
}
