import React from 'react'; 
import CardItem from './CardItem';
import Container from "@material-ui/core/Container";

const MovieItem = props =>{
    return (
        <Container className="movie-item">
            {props.movieDatas.map( movieData =>{
                const {id, title, poster_path, release_date, overview, popularity} = movieData
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