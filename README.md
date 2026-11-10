# usa-rem.com

This repo is the source of truth for usa-rem.com. Netlify project `hard-hat-partners` deploys every push to `main`.

## Rules

- Edit here. Never re-export from Claude Design and drop it on Netlify. The Design project is retired, and an export would overwrite the self-hosted fonts and React, compressed media, and every later fix.
- One change per commit, with a clear message.
- Nothing loads from a third-party host before a visitor clicks. Fonts live in `assets/fonts`, React in `assets/vendor`.
- Portfolio cards link to live client domains, never to a netlify.app preview. Card images are self-hosted screenshots, never iframes of client sites.
- After a push, check the live page: images load, links work, contact form present.

## History

- 2026-11-10: baseline commit, taken from the live Netlify deploy of 2026-11-05 (6aecf936).
- 2026-11-10: Jomar moved to the live portfolio; card screenshot recaptured from jomarinc.com.
