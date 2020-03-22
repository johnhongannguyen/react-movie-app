import React from "react";
import CardItem from "./CardItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card'

const useStyles = makeStyles({
  tv_container: {
    margin: "1rem",
    padding: "1rem", 
    
  }
});


const TVItem = props => {
  const classes = useStyles();
  return (
    <Card className={classes.tv_container}>
      {props.arrayShows.map(show => {
        const { name, id, poster_path, popularity, first_air_date, overview } = show;
        return <CardItem   
        name={name} 
        id={id} 
        poster_path={poster_path}
        popularity={popularity}
        first_air_date={first_air_date}
        overview={overview}
        />;
      })}

    </Card>
  );
};

export default TVItem;
