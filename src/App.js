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
    searchDatas: [],
    searchPin: false,
    category: "tv"
  }
  handleChangeSearchType = category =>{
    this.setState({
      category
    })
  }

  handleSubmit = event =>{
    const {category, query} = this.state; 
    event.preventDefault();
    this.setState({
      isLoading: true
    
    });

    api_search(category, query)
    .then(data =>{
    this.setState({
      isLoading: false,
      seachPin: true,
      searchDatas: data
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
      searchDatas, 
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
    searchDatas = {searchDatas} 
    />


  </Container>
  );
}
}

export default App;

