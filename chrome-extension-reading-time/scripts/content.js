// Average reading speed (words per minute)
const WORDS_PER_MINUTE = 200;

function calculateReadingTime(text) {
  const words = text.match(/\S+/g) || [];
  const wordCount = words.length;

  return {
    words: wordCount,
    minutes: Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
  };
}

function createBadge(readingTime) {
  // Remove existing badge if present
  const existingBadge = document.getElementById("reading-time-badge");
  if (existingBadge) {
    existingBadge.remove();
  }

  const badge = document.createElement("div");
  badge.id = "reading-time-badge";

  badge.innerHTML = `
    <div style="font-weight:600;">⏱️ ${readingTime.minutes} min read</div>
    <div style="font-size:12px;opacity:.8;">${readingTime.words.toLocaleString()} words</div>
  `;

  Object.assign(badge.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#222",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.4",
    boxShadow: "0 4px 12px rgba(0,0,0,.3)",
    zIndex: "2147483647",
    pointerEvents: "none"
  });

  document.body.appendChild(badge);
}

function renderReadingTime() {
  try {
    // Clone document so Readability doesn't modify the real page
    const documentClone = document.cloneNode(true);

    const reader = new Readability(documentClone);
    const article = reader.parse();

    let text = "";

    if (article && article.textContent.trim().length > 0) {
      text = article.textContent;
    } else {
      // Fallback for pages where Readability can't find an article
      text = document.body.innerText || document.body.textContent || "";
    }

    const readingTime = calculateReadingTime(text);

    createBadge(readingTime);

  } catch (error) {
    console.error("Reading Time Extension:", error);
  }
}

// Initial render
renderReadingTime();

// Update on SPA navigation / dynamic content
let debounceTimer;

const observer = new MutationObserver(() => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    renderReadingTime();
  }, 500);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});