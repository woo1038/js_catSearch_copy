import DetailModal from "./components/DetailModal.js";
import Error from "./components/Error.js";
import Loading from "./components/Loading.js";
import ResultSection from "./components/ResultsSection.js";
import SearchingSection from "./components/SearchingSection.js";

export default class App {
  constructor($target) {
    const searchingSection = new SearchingSection({
      $target,
      onSearch: async (keyword) => {
        console.log(keyword);
      },
      onRandom: async () => {
        console.log(2);
      },
    });

    const resultSection = new ResultSection({ $target });

    const detailModal = new DetailModal({ $target });

    const loading = new Loading({ $target });

    const error = new Error({ $target });

    const darkModeBtn = document.createElement("span");
    darkModeBtn.className = "darkmode-btn";
    darkModeBtn.innerText = "🌕";

    $target.appendChild(darkModeBtn);
  }
}
