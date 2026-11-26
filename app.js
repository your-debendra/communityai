const grid = document.querySelector("#resource-grid");
const search = document.querySelector("#search");
const resultCount = document.querySelector("#result-count");
const totalCount = document.querySelector("#total-count");
const emptyState = document.querySelector("#empty-state");

function renderResources(query = "") {
  const term = query.trim().toLowerCase();
  const filtered = resources.filter(item =>
    [item.title, item.category, item.description, ...item.tags].join(" ").toLowerCase().includes(term)
  );

  grid.replaceChildren();
  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "resource-card";

    const category = document.createElement("p");
    category.className = "card-category";
    category.textContent = item.category;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = item.description;

    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open resource ↗";

    card.append(category, title, description, link);
    grid.append(card);
  });

  resultCount.textContent = term ? `${filtered.length} result(s) for “${query.trim()}”` : "Search the library by topic or keyword.";
  totalCount.textContent = `${resources.length} STARTER RESOURCES`;
  emptyState.hidden = filtered.length !== 0;
}

search.addEventListener("input", event => renderResources(event.target.value));
document.querySelector("#clear-search").addEventListener("click", () => {
  search.value = "";
  renderResources();
  search.focus();
});

document.querySelector("#question-form").addEventListener("submit", event => {
  event.preventDefault();
  const question = document.querySelector("#question-text").value.trim();
  const message = document.querySelector("#form-message");
  if (!question) {
    message.textContent = "Please enter your question first.";
    return;
  }
  message.textContent = "Thanks! This is a front-end demo, so your question has not been sent or saved. Connect a backend to enable submissions.";
  event.target.reset();
});

renderResources();
