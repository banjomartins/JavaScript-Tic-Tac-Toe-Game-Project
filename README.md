## Space-Themed Demo Site

A clean, responsive single-page site built with HTML, CSS, and optional Bootstrap. It showcases a hero header, About section, Profile/Bio, and a Contact form over an atmospheric space background. Intended as a demo for semantic markup, accessible components, and tidy separation of concerns (HTML vs. CSS).

### Project Title & Description

**Space-Themed Demo Site** — A static, mobile-first website featuring:
- A full-bleed hero section with background imagery
- About section with descriptive text and an example table
- Profile/Bio section with a circular avatar
- Contact section with an accessible form

Images are sourced from provided URLs, and the layout uses Bootstrap 5 (CDN) for rapid responsiveness. Custom styles live in `styles.css`.

### Installation / Setup Instructions

No build step is required. You can run this locally in any static server or by opening the HTML file directly in a browser.

1. Clone or download the project files.
2. Ensure the following files are present:
   - `index.html`
   - `styles.css`
3. Open `index.html` in your browser, or start a lightweight static server:

```bash
# Option A: Open directly
xdg-open index.html  # Linux
open index.html      # macOS
start index.html     # Windows

# Option B: Serve locally (examples)
python3 -m http.server 5173
# then visit http://localhost:5173
```

Bootstrap is included via CDN in `index.html`, so you don't need to install dependencies.

### Usage / Examples

- Modify text content in `index.html` under the `About` and `Profile` sections.
- Replace image URLs with your own assets if desired.
- Adjust theme and layout via `styles.css` (e.g., overlay intensity, fonts, spacing).

Common edits:
```html
<!-- Change hero title -->
<h1 class="display-4 fw-bold mb-3">Exploring the Edge of Space</h1>

<!-- Update About text -->
<section id="about"> ... </section>
```

### Features

- Responsive layout (Bootstrap grid + utilities)
- Accessible navigation with anchor links
- Hero and contact sections with background images and overlays
- Semantic HTML with labeled form controls
- Clean separation of HTML and CSS
- Example table for structured data

### Contributing

Contributions are welcome! For small fixes (copy, styles), feel free to open a PR. For larger changes, please:

1. Open an issue describing the proposal and motivation.
2. Keep HTML semantic and accessible (labels, alt text, heading order).
3. Maintain separation between structure (`index.html`) and presentation (`styles.css`).
4. Follow Bootstrap conventions when extending components.

If adding images from local files, include them in the repository (e.g., `assets/`) and update the image `src` paths accordingly.

# Tic-Tac-Toe (HTML, CSS, JavaScript, jQuery)

An interactive, two-player Tic-Tac-Toe game built with HTML, CSS, JavaScript, and jQuery. Players take turns on a 3×3 grid, the game tracks turns, highlights the winning line, detects draws, and provides a one-click restart.

---

## Overview
This project is an interactive web application demonstrating front-end fundamentals: semantic HTML, CSS layout, JavaScript game logic, and jQuery for DOM manipulation and events.

## Features
- Two-player local gameplay (X vs O)
- Turn tracking with clear status messaging
- Winner detection with highlighted winning cells
- Draw detection when the board is full
- One-click restart to reset the game
- Clean, simple layout for quick play

## Tech Stack
- HTML5 for structure
- CSS3 for layout and styling (inline in `Project.html`)
- JavaScript (ES5/ES6) for game logic
- jQuery 3.6 (CDN) for DOM manipulation and events

> Note: jQuery is loaded via CDN. Internet access is required unless you replace the CDN link with a local file.

## Repository
- GitHub: [JavaScript-Tic-Tac-Toe-Game-Project](https://github.com/banjomartins/JavaScript-Tic-Tac-Toe-Game-Project)
- Clone with SSH:
```bash
git clone git@github.com:banjomartins/JavaScript-Tic-Tac-Toe-Game-Project.git
```
- Clone with HTTPS:
```bash
git clone https://github.com/banjomartins/JavaScript-Tic-Tac-Toe-Game-Project.git
```

## Project Structure
```
.
├── Project.html   # HTML with inline CSS and script tags
├── Project.js     # Game logic and jQuery DOM interactions
└── README.md      # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (only needed to fetch jQuery from CDN)

### Run Locally
You can also clone the repository first (see Repository section above), then open the HTML file.

Option A: Open the HTML file directly
1. Open the project folder.
2. Double-click `Project.html` to open it in your browser.

Option B: Use a local web server (recommended)
```bash
# From the project directory
python3 -m http.server 8000
# Then visit http://localhost:8000/Project.html
```

## How to Play
- The status message shows whose turn it is.
- Click any empty cell to place your mark (X or O); turns alternate automatically.
- When a player wins, the winning three cells are highlighted and the game stops.
- If all cells fill without a winner, the game declares a draw.
- Click "Restart Game" to reset and start over.

## Implementation Details
- Board state is a nine-element array representing the 3×3 grid.
- `renderBoard()` rebuilds the grid from current state for a simple, reliable UI update.
- Click handling uses event delegation on the `.board` container.
- Winner detection checks all row/column/diagonal patterns.
- Winning cells receive the `.winner` class to visually highlight them.
- Restart clears state, resets the message, and re-renders the board.

## Requirements Mapping
- Built using HTML, CSS, JavaScript, and jQuery: ✅
- Visually appealing with a well-structured layout: ✅ (centered grid, clear typography)
- Smooth, interactive user experience: ✅ (instant updates, highlight effects, restart)
- API handling: N/A for this game (requirement applies to API-based projects): ✅

## Customization
- Styling: Adjust sizes, colors, and spacing in the `<style>` block inside `Project.html`.
- Offline usage: Replace the jQuery CDN script with a local `jquery.min.js` file and update the script tag in `Project.html` accordingly.

## Troubleshooting
- Grid does not render or clicks do nothing:
  - Ensure you are online so the jQuery CDN can load, or replace it with a local jQuery file.
  - Check the browser console for any errors.
- Layout too large/small:
  - The grid uses 100×100px cells; adjust values in the inline CSS.

## License
No license specified.

## Acknowledgments
- jQuery CDN by the jQuery Foundation