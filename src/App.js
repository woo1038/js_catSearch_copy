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
  }
}
