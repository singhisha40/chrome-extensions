# Reading Time Chrome Extension

A simple Chrome extension that estimates the reading time of web pages and displays it as a small floating badge.

Unlike the tutorial version that only worked on Chrome Developer documentation, this version works across almost any website by automatically detecting the main article content before calculating the reading time.

---

## Features

* 🌐 Works on most websites
* 📖 Detects the main article instead of counting the entire page
* ⏱️ Calculates reading time using an average reading speed of **200 words per minute**
* 📝 Displays both:

  * Estimated reading time
  * Total word count
* ⚡ Automatically updates on Single Page Applications (SPAs) such as Medium, Reddit, and other dynamically changing websites

---

## How it works

The extension injects a content script into every webpage.

It then:

1. Creates a cloned copy of the page.
2. Uses **Mozilla Readability.js** to identify the primary article content.
3. Counts the words in the extracted text.
4. Calculates the estimated reading time.
5. Displays the result in a floating badge at the top-right corner of the page.

Using Readability makes the estimate much more accurate because navigation menus, sidebars, advertisements, comments, and footers are ignored whenever possible.

---

## Project Structure

```text
reading-time-extension/

├── manifest.json
├── README.md
└── scripts/
    ├── Readability.js
    └── content.js
```
---
## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to:

```
chrome://extensions
```

3. Enable **Developer Mode**.
4. Click **Load unpacked**.
5. Select the extension folder.

The extension is now ready to use.<br/>

**NOTE:** You might have to grant it permissions if used acorss different browser.
 
---

## Acknowledgements

* This extension was initially inspired by the **Chrome Extensions Getting Started** tutorial from the Chrome Developers documentation. The original tutorial demonstrates adding reading time to Chrome Developer documentation pages, and this project extends that idea into a generic reading-time extension that works across most websites.
* This project uses **Mozilla Readability.js**, the same library that powers Firefox Reader View, to accurately extract the primary article content before estimating reading time.

----

**⭐ If you found this useful, consider giving it a star! Feel free to open an issue or share suggestions for improvements.**
