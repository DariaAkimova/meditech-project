const filter = document.querySelector(".filter");
const articleCards = document.querySelectorAll(".article-card");
const allArticlesContainer = document.querySelector(".articles-list");

const makeOneColumn = (array) => {
  console.log(array.length);
  if (array.length === 1) {
    allArticlesContainer.classList.add("one-column");
  } else {
    allArticlesContainer.classList.remove("one-column");
  }
};

const createArticlesList = () => {
  articleCards.forEach((card) => {
    if (!card.classList.contains(filter.value) && filter.value !== "all") {
      card.classList.add("visually-hidden");
    } else {
      card.classList.remove("visually-hidden");
    }
  });
  const visibleCards = [...articleCards].filter((card) => {
    return !card.classList.contains("visually-hidden");
  });
  makeOneColumn(visibleCards);
};

filter.addEventListener("change", createArticlesList);

