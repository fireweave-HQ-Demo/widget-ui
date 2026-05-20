import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import "posthog-js";
const FLAG_KEY = "widget-demo-feature";
function maybeNewBehavior(userId) {
  return false;
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const enabled = maybeNewBehavior();
    $$renderer2.push(`<main style="font-family: system-ui, sans-serif; padding: 2rem;"><h1>widget-ui</h1> <p>Minimal SvelteKit demo for FireWeave deploy webhooks.</p> <dl><dt>Flag key</dt> <dd><code>${escape_html(FLAG_KEY)}</code></dd> <dt>User</dt> <dd><code>demo-user</code></dd> <dt>Enabled</dt> <dd><code>${escape_html(enabled)}</code></dd></dl></main>`);
  });
}
export {
  _page as default
};
