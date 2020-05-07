import React from "react";
import PlayerCard from "./PlayerCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem",
    flexWrap: "wrap",
  },
});

function PlayerLists({ players }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3}>
      {players.map(({ name, country, searches, id }) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3} xl={3}>
          <PlayerCard
            key={id}
            name={name}
            country={country}
            searches={searches}
            id={id}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PlayerLists;
