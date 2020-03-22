import React from "react";
import CardItem from "../../layout/CardItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card'

const useStyles = makeStyles({
  movie_container: {
    margin: "1rem",
    padding: "1rem", 
    
  }
});

const MovieItem = props => {
  const classes = useStyles();
  return (
    <Card className={classes.movie_container}>
    {props.arrayMovies.map(movie => {
        const { title, id, poster_path, popularity, release_date, overview } = movie;
        return <CardItem 
        id={id} 
        key={id}
        title={title} 
        poster_path={poster_path}
        popularity={popularity}
        release_date={release_date}
        overview={overview}
        />;
      })}
    </Card>
  );
};

export default MovieItem;
