import React, { useEffect } from "react";
import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import styles from "./SearchEngine.module.css";
import Results from "../results/Results";
import { CircularProgress } from "@mui/material";

export default function SearchEngine() {
  // User parameters
  const [route, setRoute] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  // Data flags
  const [loading, setLoading] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [showAdultsWarning, setShowAdultsWarning] = useState(false);
  const [showDateWarning, setShowDateWarning] = useState(false);
  const [showRouteWarning, setShowRouteWarning] = useState(false);

  // Data
  const [departureData, setDepartureData] = useState([]);
  const [accommodationData, setAccommodationData] = useState([]);
  const [priceData, setPriceData] = useState([]);

  const handleRouteChange = (event) => {
    setRoute(event.target.value);
    console.log("Route:" + event.target.value);
    setShowRouteWarning(false);
  };

  // This function is called when the user selects a date
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log("Date:" + selectedDate);
    setShowDateWarning(false);
  };

  const handleAdultsChange = (event) => {
    const selectedValue = event.target.value;
    setAdults(selectedValue);
    console.log("Adults:" + selectedValue);

    // Hide the warning message when at least 1 adult is selected
    setShowAdultsWarning(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (adults === 0) {
      setShowAdultsWarning(true);
      return;
    }

    if (selectedDate == null) {
      setShowDateWarning(true);
      return;
    }

    if (route === "") {
      setShowRouteWarning(true);
      return;
    }

    setDepartureData([]);
    setAccommodationData([]);
    setPriceData([]);

    setLoading(true);

    await fetchDepartureData();
    await fetchAccommodationData();
    setLoading(false);

    // Set the flag to true when data has been fetched
    setHasFetchedData(true);
  };

  // Fetches the price data when accomodation data has been stored
  useEffect(() => {
    fetchPriceData();
  }, [accommodationData]);

  const fetchDepartureData = async () => {
    try {
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
      const response = await fetch(
        `https://tadpole.clickferry.app/departures?route=${route}&time=${formattedDate}`
      );
      if (!response.ok) {
        throw new Error("Network response invalid.");
      }
      const apiData = await response.json();
      setDepartureData(apiData);
    } catch (error) {
      console.error("Error fetching departure data:", error);
      setHasFetchedData(true);
    }
  };

  const fetchAccommodationData = async () => {
    try {
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DDTHH:mm");
      const response = await fetch(
        `https://tadpole.clickferry.app/accommodations?route=${route}&time=${formattedDate}&adults=${adults}&children=${children}&babies=${babies}`
      );
      if (!response.ok) {
        throw new Error("Network response invalid.");
      }
      const apiData = await response.json();
      setAccommodationData(apiData);
    } catch (error) {
      console.error("Error fetching accommodation data:", error);
      setHasFetchedData(true);
    }
  };

  const fetchPriceData = async () => {
    try {
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DDTHH:mm");
      const code = accommodationData[0]?.code || "";
      console.log("Code:" + code);
      const response = await fetch(
        `https://tadpole.clickferry.app/price?route=${route}&time=${formattedDate}&adults=${adults}&children=${children}&babies=${babies}&accommodation=${code}`
      );
      if (!response.ok) {
        throw new Error("Network response invalid.");
      }
      const apiData = await response.json();
      setPriceData(apiData);
    } catch (error) {
      console.error("Error fetching accommodation data:", error);
    }
  };

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

        {showRouteWarning && (
          <p style={{ color: "red" }}>Please select a route.</p>
        )}

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
          <DateTimePicker
            value={selectedDate == null ? "null" : selectedDate}
            onChange={handleDateChange}
            referenceDate={dayjs("2023-09-22T15:30")}
          />
        )}

        {showDateWarning && (
          <p style={{ color: "red" }}>Please select a date.</p>
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

        {showAdultsWarning && (
          <p style={{ color: "red" }}>Please select at least 1 adult.</p>
        )}

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

      {/* Results component */}
      {loading ? (
        // When loading
        <div className={styles.spinnerContainer}>
          <CircularProgress />
        </div>
      ) : departureData?.length === 0 && hasFetchedData ? (
        // When no data is available
        <div className={styles.noFerriesAvailable}>
          <p>No ferries available for these dates.</p>
        </div>
      ) : (
        // When data is available
        departureData?.length > 0 &&
        accommodationData?.length > 0 &&
        priceData?.total !== null && (
          <Results
            departureData={departureData}
            accommodationData={accommodationData}
            priceData={priceData}
          />
        )
      )}
    </div>
  );
}
