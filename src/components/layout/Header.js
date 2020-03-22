import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    title: {
      border: "3px solid black",
      margin: "0.75rem",
      padding: "0.75rem", 
      
    }
  });
  export default function Header() {
    const classes = useStyles();
    return (
      <Typography className={classes.title} variant="h2" align="center" >
        React Movies App
      </Typography>
    );
  }
