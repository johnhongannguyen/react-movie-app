import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    title: {
      border: "3px solid black",
      margin: "1rem",
      padding: "1rem", 
      
    }
  });
  export default function Header() {
    const classes = useStyles();
    return (
      <Typography className={classes.title} variant="h3" align="center">
        React Movies App
      </Typography>
    );
  }
