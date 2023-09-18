import React from "react";
import styles from "./Results.module.css";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/Place";
import { Grid } from "@mui/material";

export default function Results() {
  const destination = "Algeciras - Ceuta";
  const travelTime = "2 hours";
  const arrivalTime = "12:00 PM";
  const price = "$50.00";

  return (
    <Container className={styles.formContainer} sx={{ borderRadius: 3 }}>
      <Grid container sx={{ padding: 1.5, margin: 1.5, minWidth: 500 }}>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
          <PlaceIcon sx={{ marginRight: 1 }} className={styles.iconSize} />{" "}
          {destination}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
          Travel Time: {travelTime}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
          Arrival Time: {arrivalTime}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
          Price: {price}
        </Grid>
        <Grid item xs={12} lg={2}>
          <Button variant="contained" color="primary" className="button">
            Select
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
