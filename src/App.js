import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import SearchEngine from "./components/searchengine/SearchEngine";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <div className={styles}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <SearchEngine />
      </LocalizationProvider>
    </div>
  );
}

export default App;
