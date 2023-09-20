import React from "react";
import { useState, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers";

import styles from "./SearchEngine.module.css";
import Results from "../results/Results";

export default function SearchEngine() {
  const [route, setRoute] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  // const [time, setTime] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleRouteChange = (event) => {
    setRoute(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    setRoute("");
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://tadpole.clickferry.app/departures?route=${route}&time${selectedDate}`
      );
      if (!response.ok) {
        throw new Error("Network response invalid.");
      }
      const apiData = await response.json();
      setData(apiData);
      console.log(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = () => {
    const filteredResult = data.filter((item) => {
      if (route && item.route !== route) {
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
  }, [data, route]);

  return (
    <div>
      <Container sx={{ borderRadius: 3 }} className={styles.formContainer}>
        {/* route */}
        <FormControl required sx={{ m: 1, minWidth: 400 }}>
          <InputLabel id="demo-simple-select-required-label">
            Route...
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={route}
            label="Route *"
            onChange={handleRouteChange}
          >
            <MenuItem value="ALGECEUT">Algeciras - Ceuta</MenuItem>
            <MenuItem value="CEUTALGE">Ceuta - Algeciras</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={selectedOption}
            label="Option *"
            onChange={handleOptionChange}
          >
            <MenuItem value="datepicker">Select a Date</MenuItem>
          </Select>
        </FormControl>

        {selectedOption === "datepicker" && (
          <DatePicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        )}

        <Button
          className={styles.button}
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Container>
      <Results route={route} filteredData={filteredData} />
    </div>
  );
}
