export default class SearchBar {
  constructor({ $target, onSearch, onRandom }) {
    this.onSearch = onSearch;
    this.onRandom = onRandom;
    this.section = document.createElement("section");
    this.section.className = "searching-section";

    $target.appendChild(this.section);

    this.render();
  }

  searchByKeyword(keyword) {
    if (keyword.length === 0) return;

    this.onSearch(keyword);
  }

  render() {
    this.section.innerHTML = "";

    const randomBtn = document.createElement("span");
    randomBtn.className = "random-btn";
    randomBtn.innerHTML = "😸";

    const wrapper = document.createElement("div");
    wrapper.className = "search-box-wrapper";

    const searchBox = document.createElement("input");
    searchBox.className = "search-box";
    searchBox.placeholder = "고양이를 검색하세요.";

    const recentKeywords = document.createElement("div");
    recentKeywords.className = "recent-keywords";

    randomBtn.addEventListener("click", this.onRandom);
    searchBox.addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        this.searchByKeyword(searchBox.value);
      }
    });

    wrapper.appendChild(searchBox);
    wrapper.appendChild(recentKeywords);
    this.section.appendChild(randomBtn);
    this.section.appendChild(wrapper);
  }
}
