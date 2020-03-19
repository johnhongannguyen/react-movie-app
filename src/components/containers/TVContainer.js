import React, { Component } from "react";
import TVItem from "../layout/TVItem";
import Loading from "../layout/Loading";
import TVOptions from "../options/TVOptions";
import api_tvShows from "../../services/api_tvShows";
import Container from "@material-ui/core/Container";

class TVContainer extends Component {
    state ={
        isLoading: true,
        category: 'on_the_air',
        tvDatas: []
    }

    handleChange = category =>{
        this.setState({category},this.getTV);
    }

    getTV = () =>{
        api_tvShows(this.state.category)
        .then(data =>{
            this.setState({
                tvDatas: data,
                isLoading: false
            })
        })
    };
    componentDidMount(){
        this.setState({isLoading:true});
        this.getTV();
    }
    
    render(){
        const {tvDatas, category, isLoading} = this.state;
        return(
            <Container>
                <TVOptions onChange={this.handleChange} category={category} />

                <div>{isLoading ? <Loading /> : <TVItem tvDatas={tvDatas} />}</div>
            </Container>

        )
    }

}

export default TVContainer;