import React, { Component } from "react";
import TVItem from "./TVItem";
import Loading from "../../layout/Loading";
import { getShows } from "../../../services/api_tvShows";
import TVOptions from "./TVOptions";
import Card from '@material-ui/core/Card';

class TVContainer extends Component {
  state = {
    isLoading: true,
    arrayShows: [],
    category: "popular"
  };

  pullShows = () => {
    getShows(this.state.category).then(data => {
      this.setState({
        isLoading: false,
        arrayShows: data
      });
      console.log(`TV Objects : ${data}`);
    });
    
  };

  handleSearchShowChange = category => {
    this.setState(
      {category},
      this.pullShows
    );
    console.log(`Type of show selected : ${category}`)
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    this.pullShows();
  }

  render() {
    const { isLoading, arrayShows, category } = this.state;
    const getStyles ={
      display:'flex', 
      flexDirection:'column', 
      alignItems:'center',
      margin:'auto',
      justifyContent:'space-between'
    }
    return (
      <>
      <div className="tv_container" >
        <Card>
          <div style={getStyles}>
        <TVOptions
            category={category}
            onSearchShowChange={this.handleSearchShowChange}
          />
          </div>
        <div>{isLoading ? <Loading /> : <TVItem arrayShows={arrayShows} />}</div>
        </Card>
      </div>
     
      </>
    );
  }
}

export default TVContainer;
