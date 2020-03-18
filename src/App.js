import React, {Component} from 'react';
import Header from './components/layout/Header'
import Container from '@material-ui/core/Container';
import api_search from './services/api_search'
import FormSearch from './components/forms/FormSearch'
import TabsNavigation from './components/tabs-navigation/TabsNavigation'

class App extends Component {
  state = {
    isLoading: true,
    query: "",
    searchData: [],
    searchPin: false,
    searchType: "tv"
  }
  handleChangeSearchType = searchType =>{
    this.setState({
      searchType
    })
  }

  handleSubmit = event =>{
    const {searchType, query} = this.state; 
    event.preventDefault();
    this.setState({
      isLoading: true,
    
    });

    api_search(searchType, query)
    .then(data =>{
    this.setState({
      isLoading: false,
      seachPin: true,
      searchData: data
   })
  })
  }
  handleSearchChange = query =>{
    if(query){
      this.setState({query})
    }
  }
  

  render(){
    const {
      category,
      searchPin, 
      searchData, 
      query
    } = this.setState;
  return (
    <Container>
  <Header />
    <FormSearch 
      category = {category}
      onSubmit = {this.handleSubmit}
      onSearchChange = {this.handleSearchChange}
      onChangeSearchType = {this.handleChangeSearchType}
    />

    <TabsNavigation
    query={query}
    searchPin = {searchPin}
    searchData = {searchData} 
    />


  </Container>
  );
}
}

export default App;

