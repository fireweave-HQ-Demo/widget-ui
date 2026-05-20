<script lang="ts">
  import { onMount } from 'svelte';
  import { FLAG_KEY, subscribeFlagState } from '$lib/flags';

  const userId = 'demo-user';
  let enabled = $state(false);
  let ready = $state(false);
  let error = $state<string | undefined>(undefined);

  onMount(() => subscribeFlagState(userId, (state) => {
    enabled = state.enabled;
    ready = state.ready;
    error = state.error;
  }));
</script>

<main style="font-family: system-ui, sans-serif; padding: 2rem;">
  <h1>widget-ui</h1>
  <p>Minimal SvelteKit demo for FireWeave deploy webhooks.</p>
  {#if error}
    <p style="color: #b45309;">{error}</p>
  {/if}
  <dl>
    <dt>Flag key</dt>
    <dd><code>{FLAG_KEY}</code></dd>
    <dt>User</dt>
    <dd><code>{userId}</code></dd>
    <dt>Enabled</dt>
    <dd><code>{ready ? String(enabled) : 'loading…'}</code></dd>
  </dl>
</main>
