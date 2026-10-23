# Chris's Desktop — Just Ventures application prototype

A standalone, no-build HTML/CSS/JavaScript desktop-inspired application page.

## Preview

Open `index.html` in a browser. Internet access is only used to retrieve Google Fonts; local fallbacks are included.

## Files

- `index.html` — desktop structure and SVG shortcut icons
- `styles.css` — six-color palette, pixel GUI styling, responsive layout
- `script.js` — window content and click interactions

## Edit content

Edit the `pages` object at the top of `script.js`. Each page has a `title`, a `status`, and an `html` string.

## Features

- Four desktop shortcuts, including a default Welcome window
- Single active window; shortcuts swap the window content
- Close window, Start to reopen Welcome, taskbar active tab
- Escape to close, keyboard accessible buttons, responsive small-screen layout
- No framework or build tooling required

## Palette

Purple `#46425e`, deep teal `#15788c`, cyan `#00b9be`, cream `#ffeecc`, peach `#ffb0a3`, coral `#ff6973`.
