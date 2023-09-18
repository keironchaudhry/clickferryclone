import styles from "./App.module.css"
import Results from "./components/results/Results";
import SearchEngine from "./components/searchengine/SearchEngine"

function App() {
  return <div className={styles}>
    <SearchEngine />
    <Results />
  </div>;
}

export default App;
