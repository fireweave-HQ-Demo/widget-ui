<script lang="ts">
  import { FLAG_KEY, maybeNewBehavior } from '$lib/flags';

  const userId = 'demo-user';
  const enabled = maybeNewBehavior(userId);
</script>

<main style="font-family: system-ui, sans-serif; padding: 2rem;">
  <h1>widget-ui</h1>
  <p>Minimal SvelteKit demo for FireWeave deploy webhooks.</p>
  <dl>
    <dt>Flag key</dt>
    <dd><code>{FLAG_KEY}</code></dd>
    <dt>User</dt>
    <dd><code>{userId}</code></dd>
    <dt>Enabled</dt>
    <dd><code>{enabled}</code></dd>
  </dl>
</main>
