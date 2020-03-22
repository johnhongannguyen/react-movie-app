import React, { Component } from "react";
import MovieItem from "./MovieItem";
import Loading from "../../layout/Loading";
import MovieOptions from "./MovieOptions";
import { getMovies } from "../../../services/api_movies";
import Card from '@material-ui/core/Card';



class MovieContainer extends Component {
  state = {
    arrayMovies: [],
    category: "popular",
    isLoading: true
   };

  pullMovies = () => {
    getMovies(this.state.category)
    .then(data => {
      this.setState({
        isLoading: false,
        arrayMovies: data
      });
     console.log(`Movie Objects : ${data}`);
    });
    
  };
  handleSearchMovieChange = category => {
    this.setState(
      {category},
      this.pullMovies
    );
    console.log(`Type of movie selected : ${category}`)
  };
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.pullMovies();
   
  }

  render() {
    const { isLoading, arrayMovies, category } = this.state;
    const getStyles ={
      display:'flex', 
      flexDirection:'column', 
      alignItems:'center',
      margin:'auto',
      justifyContent:'space-between'
    }
    return (
      <div className="movie_container">
        <Card> 
        <div style={getStyles}>
          <MovieOptions category={category} onSearchMovieChange={this.handleSearchMovieChange}/>
        </div>
        <div>{isLoading ? <Loading /> : <MovieItem arrayMovies={arrayMovies} />}</div>
        </Card> 
      </div>
    );
  }
}

export default MovieContainer;
