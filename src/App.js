import styles from "./App.module.css"
import Navbar from "./components/navbar/Navbar";
import Results from "./components/results/Results";
import SearchEngine from "./components/searchengine/SearchEngine"

function App() {
  return <div className={styles}>
    <Navbar />
    <SearchEngine />
    <Results />
  </div>;
}

export default App;
