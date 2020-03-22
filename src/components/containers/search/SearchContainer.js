import React from "react";
import SearchItem from "./SearchItem";
import Typography from "@material-ui/core/Typography";



const SearchContainer = (props) => {

  const {query, searchPoint, arrayResults} = props;

   let alert 
    if( query && arrayResults.length === 0 && searchPoint){
   alert = <Typography  align="center" variant="h5" component="h2"> Sorry there were no results</Typography> 
  }else if( !searchPoint && !query ){
   alert =  <Typography  align="center" variant="h5" component="h2">Please enter a search</Typography> 
  } else if(query && !searchPoint){
    alert = <Typography  align="center" variant="h5" component="h2">Please initiate a search</Typography> 
  }

  return (
    <>
     { !searchPoint  || arrayResults.length === 0  ?  
      <Typography  align="center" variant="h5" component="h2">{alert}</Typography> 
      : <SearchItem arrayResults={arrayResults}/>}
      
    </>
  )
}

export default SearchContainer
