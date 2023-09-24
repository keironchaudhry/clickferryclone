import React from "react";
import styles from "./Results.module.css";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/Place";
import { Grid } from "@mui/material";

export default function Results({
  departureData,
  priceData,
}) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected persons and accomodation.");
  };

  return (
    <div>
      {departureData?.map((departure, index) => (
        <Container
          key={index}
          className={styles.formContainer}
          sx={{ borderRadius: 3 }}
        >
          <Grid container sx={{ padding: 1.5, margin: 1.5, minWidth: 500 }}>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              <PlaceIcon sx={{ marginRight: 1 }} className={styles.iconSize} />{" "}
              {departure?.operator || " "}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              Arrival:{" "}
              {departure?.arrival
                ? new Date(departure?.arrival).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })
                : " "}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              {departure?.ship || " "}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ marginTop: 1 }}>
              Price: {priceData?.total || " "}
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
