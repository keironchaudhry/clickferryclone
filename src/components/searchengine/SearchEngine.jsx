import React from "react";
import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import styles from "./SearchEngine.module.css";

export default function SearchEngine() {
  const [destination, setDestination] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const handleBabiesChange = (event) => {
    setBabies(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data to be submitted...");
    setDestination("");
    setAdults(0);
    setChildren(0);
    setBabies(0);
  };

  return (
    <Container sx={{ borderRadius: 3 }} className={styles.formContainer}>
      {/* Destination */}
      <FormControl required sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-required-label">
          Destination...
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={destination}
          label="Destination *"
          onChange={handleDestinationChange}
        >
          <MenuItem value="algeciras - ceuta">Algeciras - Ceuta</MenuItem>
          <MenuItem value="ceuta - algeciras">Ceuta - Algeciras</MenuItem>
        </Select>
      </FormControl>

      {/* Adults */}
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-readonly-label">
          Adult(s) (18+)
        </InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={adults}
          label="Adults (18+) *"
          onChange={handleAdultsChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>

      {/* Children */}
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-readonly-label">
          Children (4-17)
        </InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={children}
          label="Children (4-17) *"
          onChange={handleChildrenChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>

      {/* Babies */}
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-readonly-label">
          Babies (0-3)
        </InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={babies}
          label="Babies (0-3) *"
          onChange={handleBabiesChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <Button
        className={styles.button}
        variant="contained"
        color="success"
        onClick={handleSubmit}
      >
        Search ferries
      </Button>
    </Container>
  );
}
