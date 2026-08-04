# Browser Extensions

A collection of Browser extensions I'm building while learning the Chrome Extensions API.

The goal of this repository is to document my learning journey by building small, practical extensions and gradually exploring more advanced Chrome extension concepts.

## Extensions

| Extension | Description | Status |
|-----------|-------------|--------|
| Hello World | A simple extension to understand the basics of Manifest V3 and content scripts. | ✅ |
| Reading Time | Displays estimated reading time for web pages using Mozilla Readability.js for accurate article extraction. | ✅ |
| Focus Mode | Helps reduce distractions by hiding common navigation elements and improving the readability of web pages | ✅ |

> More extensions will be added as I continue learning.



---

## Why this repository?

Instead of building one large project, I'm creating several small extensions to understand different parts of the Chrome Extensions API, including:

- Content Scripts
- Background Service Workers
- Messaging
- and more...

As I learn new APIs and concepts, I'll continue adding more extensions here.

---

## Repository Structure

```text
chrome-extensions/
│
├── chrome-extension-hello-world/
├── chrome-extension-reading-time/
├── ...
└── README.md
```

---

## Getting Started

1. Clone this repository.

```bash
git clone https://github.com/<your-username>/chrome-extensions.git
```

2. Open Chrome and go to:

```
chrome://extensions
```

3. Enable **Developer Mode**.

4. Click **Load unpacked**.

5. Select the extension folder you want to try.

---

## Acknowledgements

Some extensions in this repository are built by following and extending the official Chrome Developers tutorials as part of my learning process.

---

⭐ If you found this repository useful, consider giving it a star. Suggestions, feedback, and improvements are always welcome!