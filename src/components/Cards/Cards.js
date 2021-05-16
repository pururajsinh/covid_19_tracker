import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed || !recovered || !deaths || !lastUpdate) {
    return "Loading...";
  }

  // const confirmed = props.data.confirmed.value;
  // const recovered = props.data.recovered.value;
  // const deaths = props.data.deaths.value;
  // const date = props.data.lastUpdate.slice(0, 10);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">
              {lastUpdate.slice(0, 10)}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">{recovered.value}</Typography>
            <Typography color="textSecondary">
              {lastUpdate.slice(0, 10)}
            </Typography>
            <Typography variant="body2">
              Number of patients recovered from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{deaths.value}</Typography>
            <Typography color="textSecondary">
              {lastUpdate.slice(0, 10)}
            </Typography>
            <Typography variant="body2">
              Number of deaths due to COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
