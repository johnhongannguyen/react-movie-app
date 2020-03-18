import React, {Component} from 'react'
import Container from "@material-ui/core/Container";
import SearchItem from '../layout/SearchItem'
import Typography from "@material-ui/core/Typography";

const SearchContainer = props =>{
    const {searchPin, query, searchDatas} = props;
    
  let result = ()=>{ if(query && !searchPin){
        return(
           <Typography>Please initiate a search</Typography>
        )
    } else if(!query && !searchPin){
        return(
            <Typography> Please enter a search</Typography>
        )
    }else if(query && searchDatas.length == 0 && searchPin){
        return(
            <Typography>Sorry, there were no results</Typography>
        )
    }}

    return (
        <Container>
            {!searchPin ||searchDatas.length == 0 ? <Typography>{result}</Typography> : 
            <SearchItem searchDatas={searchDatas} />}

        </Container>
    )


}

export default SearchContainer;


   