import React from "react";
import styles from "./Results.module.css";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/Place";
import { Grid } from "@mui/material";

export default function Results() {
  // This is just a dummy data to show the results
  const rowData = [
    {
      destination: "Algeciras - Ceuta",
      travelTime: "2 hours",
      arrivalTime: "12:00 PM",
      price: "$50.00",
    },
    {
      destination: "Ceuta - Algeciras",
      travelTime: "1.5 hours",
      arrivalTime: "11:30 AM",
      price: "$45.00",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected.");
  };

  return (
    <div>
      {rowData.map((data, index) => (
        <Container
          key={index}
          className={styles.formContainer}
          sx={{ borderRadius: 3 }}
        >
          <Grid container sx={{ padding: 1.5, margin: 1.5, minWidth: 500 }}>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              <PlaceIcon sx={{ marginRight: 1 }} className={styles.iconSize} />{" "}
              {data.destination}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              Travel Time: {data.travelTime}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              Arrival Time: {data.arrivalTime}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              Price: {data.price}
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
        </Container>
      ))}
    </div>
  );
}
