import React from "react";
import CardItem from "../../layout/CardItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card'

const useStyles = makeStyles({
  searchItem_container: {
    margin: "1rem",
    padding: "1rem", 
    
  }
});

const SearchItem = props => {
  const classes = useStyles();
  return (
    <Card className={classes.searchItem_container}>
      {props.arrayResults.map(result => {
        const { title, name, id, poster_path, popularity, release_date, first_air_date, overview } = result;
        return <CardItem 
        key={id}
        id={id} 
        name={name}
        title={title} 
        poster_path={poster_path}
        popularity={popularity}
        release_date={release_date}
        first_air_date={first_air_date}
        overview={overview}
        />;
      })}
    
    </Card>
  );
};

export default SearchItem;
