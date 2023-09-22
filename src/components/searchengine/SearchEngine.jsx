import React from "react";
import { useState, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import styles from "./SearchEngine.module.css";
import Results from "../results/Results";

export default function SearchEngine() {
  // User parameters
  const [route, setRoute] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  // Data handlers
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleRouteChange = (event) => {
    setRoute(event.target.value);
    console.log("Route:" + event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log("Date:" + selectedDate);
  };

  const handleAdultsChange = (event) => {
    const selectedValue = event.target.value;
    setAdults(selectedValue);
    console.log("Adults:" + selectedValue);
  };

  const handleChildrenChange = (event) => {
    const selectedValue = event.target.value;
    setChildren(selectedValue);
    console.log("Children:" + selectedValue);
  };

  const handleBabiesChange = (event) => {
    const selectedValue = event.target.value;
    setBabies(selectedValue);
    console.log("Babies:" + selectedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
      console.log(formattedDate);
      const response = await fetch(
        `https://tadpole.clickferry.app/departures?route=${route}&time=${formattedDate}`
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
        {/* Route */}
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

        {/* Date */}
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-required-label">
            Select a date
          </InputLabel>
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

        {/* Datepicker */}
        {selectedOption === "datepicker" && (
          <DatePicker
            value={selectedDate == null ? "null" : selectedDate}
            onChange={handleDateChange}
            referenceDate={dayjs("2023-09-22T15:30")}
          />
        )}

        {/* Adults */}
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Adults</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={adults}
            label="Adults"
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
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Children</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={children}
            label="Children"
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
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Babies</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={babies}
            label="Babies"
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
          Search
        </Button>
      </Container>
      <Results
        route={route}
        selectedDate={selectedDate}
        adults={adults}
        children={children}
        babies={babies}
        filteredData={filteredData}
      />
    </div>
  );
}
