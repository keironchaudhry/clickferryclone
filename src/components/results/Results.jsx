import React from "react";
import { useState, useEffect } from "react";
import styles from "./Results.module.css";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/Place";
import { Grid } from "@mui/material";
import dayjs from "dayjs";

export default function Results({
  route,
  selectedDate,
  adults,
  children,
  babies,
  filteredData,
}) {
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected persons and accomodation.");
  };

  return (
    <div>
      {filteredData?.map((item, index) => (
        <div key={index}>
          <p>Destination: {item.operator || " "}</p>
          <p>
            Departure:{" "}
            {item.arrival ? new Date(item.arrival).toLocaleTimeString() : " "}
          </p>
          <p>Ship: {item.ship || " "}</p>
          <p>Code: {item.code || " "}</p>
          <p>Name: {item.name || " "}</p>
          {/* <p>Price: {item.total}</p> */}
          <br></br>
        </div>
      ))}
      {/* <Container
        key={index}
        className={styles.formContainer}
        sx={{ borderRadius: 3 }}
      >
        <Grid container sx={{ padding: 1.5, margin: 1.5, minWidth: 500 }}>
          <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
            <PlaceIcon sx={{ marginRight: 1 }} className={styles.iconSize} />{" "}
            place
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
            time
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
            arrival
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
            Price: 
          </Grid>
          <Grid item xs={12} lg={2}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              className="button"
            >
              Select
            </Button>
          </Grid>
        </Grid>
      </Container> */}
    </div>
  );
}
