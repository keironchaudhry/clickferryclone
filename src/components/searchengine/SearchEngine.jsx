import React from "react";
import { useState, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import styles from "./SearchEngine.module.css";
import Results from "../results/Results";

export default function SearchEngine() {
  const [destination, setDestination] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    setDestination("");
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://tadpole.clickferry.app/departures?route=${destination}`
      );
      if (!response.ok) {
        throw new Error("Network response invalid.");
      }
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = () => {
    const filteredResult = data.filter((item) => {
      if (destination && item.destination !== destination) {
        return false;
      }
      return true;
    });
    setFilteredData(filteredResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [data, destination]);

  return (
    <div>
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
            <MenuItem value="ALGECEUT">Algeciras - Ceuta</MenuItem>
            <MenuItem value="CEUTALGE">Ceuta - Algeciras</MenuItem>
          </Select>
        </FormControl>

        <Button
          className={styles.button}
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Container>
      <Results destination={destination} filteredData={filteredData} />
    </div>
  );
}
