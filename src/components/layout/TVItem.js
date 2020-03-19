import React from 'react'; 
import CardItem from './CardItem';
import Container from "@material-ui/core/Container";

const TVItem = props =>{
    return (
        <Container className="tv-item">
            {props.arrayTVShows.map( show =>{
                const {id, name, poster_path, first_air_day, overview, popularity} = show
                return <CardItem 
                id={id}
                name={name}
                poster_path={poster_path}
                first_air_day={first_air_day}
                overview={overview}
                popularity={popularity}
                 />
            })}

        </Container>

    );
}

export default TVItem;