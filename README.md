# widget-ui

Minimal SvelteKit app for FireWeave CI/CD deploy webhook demos.

- **Wrap-point:** `src/lib/flags.ts` — `maybeNewBehavior()` reads `VITE_FLAG_KEY` via PostHog.
- **Deploy lane:** `.github/workflows/deploy.yml` emits `deployment_status` on push to `main`.

## Local run

```bash
cp .env.example .env
bun install
bun run dev            # http://localhost:3102
```

## GitHub (optional)

| Type | Name | Purpose |
|------|------|---------|
| Secret | `POSTHOG_API_KEY` | Build-time `VITE_POSTHOG_API_KEY` |
| Variable | `POSTHOG_HOST` | e.g. `https://us.i.posthog.com` |

Deploy workflow does not require these secrets (noop deploy only needs `GITHUB_TOKEN`).

## Cloud deploy (GitHub Actions → VM)

Same SSH secrets as widget-svc. Default VM path: `/root/test/widget-ui`. Live: `http://217.216.59.25:3102`

## FireWeave wiring

See [`../SETUP-WIDGETS.md`](../SETUP-WIDGETS.md).
