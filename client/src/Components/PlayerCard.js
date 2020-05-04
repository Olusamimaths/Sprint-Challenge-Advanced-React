import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

export default function PlayerCard({ name, country, searches, id }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title={`${name ? name : "unknown"}`}>
      </CardHeader>
      <CardContent>
        <Typography variant="h6" component="h6">
          Country: <strong>{country ? country : "unknown"}</strong> 
        </Typography>
        <Typography variant="h6" component="h6">
          Searches: <span style={{color: "#ccd"}}>{searches ? searches : "unknown"}</span>
        </Typography>
        <Typography variant="h6" component="h6">
          ID: <span style={{color: "purple"}}>{id ? id : "unknown"}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
