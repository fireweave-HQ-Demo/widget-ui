import posthog from 'posthog-js';
import { browser } from '$app/environment';

/** Shared rollout flag — must match widget-svc FLAG_KEY. */
export const FLAG_KEY = import.meta.env.VITE_FLAG_KEY ?? 'widget-demo-feature';

let initialized = false;

export function initPostHog(): void {
  if (!browser || initialized) return;
  const key = import.meta.env.VITE_POSTHOG_API_KEY;
  if (!key) return;
  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST ?? 'https://us.i.posthog.com'
  });
  initialized = true;
}

/**
 * Single wrap-point for FireWeave safe-rollout demos (browser eval).
 */
export function maybeNewBehavior(userId: string): boolean {
  initPostHog();
  if (!import.meta.env.VITE_POSTHOG_API_KEY) return false;
  void userId;
  return posthog.isFeatureEnabled(FLAG_KEY, { send_event: false }) ?? false;
}
