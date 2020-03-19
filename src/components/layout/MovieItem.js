import React from 'react'; 
import CardItem from './CardItem';
import Container from "@material-ui/core/Container";

const MovieItem = props =>{
    return (
        <Container className="movie-item">
            {props.arrayMovies.map( movie =>{
                const {id, title, poster_path, release_date, overview, popularity} = movie
                return <CardItem 
                id={id}
                title={title}
                poster_path={poster_path}
                release_date={release_date}
                overview={overview}
                popularity={popularity}
                 />
            })}

        </Container>

    );
}

export default MovieItem