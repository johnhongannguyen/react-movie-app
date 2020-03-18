import React from 'react'; 
import CardItem from './CardItem';
import Container from "@material-ui/core/Container";

const SearchItem = props =>{
    return(
        <Container>
            {props.searchDatas.map( searchData =>{
                const {name,id, title, poster_path, release_date, overview, popularity, first_air_date} = searchData
                return <CardItem 
                name={name}
                id={id}
                title={title}
                poster_path={poster_path}
                release_date={release_date}
                first_air_date={first_air_date}
                overview={overview}
                popularity={popularity}
                 />
            })}
        </Container>
    )
}

export default SearchItem;