import React from "react";
import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import styles from "./SearchEngine.module.css";

export default function SearchEngine() {
  const [passengerData, setPassengerData] = useState("");

  const handleChange = (event) => {
    setPassengerData({
      ...passengerData,
      [event.target.name]: event.target.value,
    });
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
          value={passengerData}
          label="Destination *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Algeciras - Ceuta"}>Algeciras - Ceuta</MenuItem>
          <MenuItem value={"Ceuta - Algeciras"}>Ceuta - Algeciras</MenuItem>
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
          value={passengerData}
          label="Passengers *"
          onChange={handleChange}
        >
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
          value={passengerData}
          label="Passengers *"
          onChange={handleChange}
        >
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
          value={passengerData}
          label="Passengers *"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <Button className={styles.button} variant="contained" color="success">
        Search ferries
      </Button>
    </Container>
  );
}
