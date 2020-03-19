import React, { Component } from "react";
import MovieItem from "../layout/MovieItem";
import Loading from "../layout/Loading";
import MovieOptions from "../options/MovieOptions";
import api_movies from "../../services/api_movies";
import Container from "@material-ui/core/Container";

class MovieContainer extends Component {
    state ={
        isLoading: true,
        category: 'popular',
        movieDatas: []
    }

    handleChange = category =>{
        this.setState({category}, this.getMovies);
}
    getMovies = () =>{
        api_movies(this.state.category)
        .then(data =>{
            this.setState({
                movieDatas: data,
                isLoading: false
            })
        })
    };

    componentDidMount(){
        this.setState({isLoading:true});
        this.getMovies();
    }
    render(){
        const {movieDatas, isLoading, category} = this.state;
        return(
            <Container>
                <MovieOptions onChange={this.handleChange} category={category} />

                <div>{isLoading ? <Loading /> : <MovieItem movieDatas={movieDatas} />}</div>
            </Container>
        )
    }
}

export default MovieContainer;