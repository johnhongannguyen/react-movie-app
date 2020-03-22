import React, { Component } from "react";
import { getSearchs } from './services/api_search'
import FormSearch from "./components/form/FormSearch";
import TabsNavigation from "./components/layout/TabsNavigation";
import Header from "./components/layout/Header"

class App extends Component {
  state = {
    isLoading: true,
    arrayResults: [],
    searchPoint: false,
    query: '',
    category: 'movie'
   
  };

  pullSearch = event => {
    const { category, query } = this.state;
    event.preventDefault();
    this.setState({
      isLoading: true
    });

    getSearchs(category, query).then(data => {
    
      this.setState({
        searchPoint: true,
        arrayResults: data,
        isLoading: false
      });
     
    });
    console.log('get search success ');
  };

  handleSearchInputChange = query => {
    if(query){
      this.setState({
        query
      })
    }
  }

  handleSearchTypeChange = category => {
    this.setState({
      category
    })
    console.log('Search Type:', category);
  
  };

  render() {
    const { searchPoint, query, arrayResults, category } = this.state;
    const getStyles ={
      border:'1px solid gray', 
      marginLeft:'30px', 
      marginRight: '30px', 
      marginTop:'3rem'
  }
    
    return (
     <div>
        <Header />
        
        <FormSearch
          onSearchInputChange={this.handleSearchInputChange}
          onSearchTypeChange={this.handleSearchTypeChange}
          onSubmit={this.pullSearch}
          category={category}
        />
        
        <div style={getStyles}>
          <TabsNavigation  arrayResults={arrayResults} query={query} searchPoint={searchPoint}  />
        </div>
      </div>
    )
  }
}

export default App;
