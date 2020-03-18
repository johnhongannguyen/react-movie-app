import React from 'react'; 
import CardItem from './CardItem';
import Container from "@material-ui/core/Container";

const TVItem = props =>{
    return (
        <Container className="tv-item">
            {props.tvDatas.map( tvData =>{
                const {id, name, poster_path, first_air_day, overview, popularity} = tvData
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