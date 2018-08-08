import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recipes'

// Start !!
const API_KEY = "0926fd70ab6c90fe32d786a773e7e87f";
class App extends Component {
  state = {
    recipes : []
  }

  componentDidUpdate() {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  componentDidMount = () => {
    const json = JSON.parse(localStorage.getItem("recipes"));
    this.setState({recipes:json});
  }
  
  getRecipe = async (e) => {
    e.preventDefault();
    e.persist();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    this.setState({
      recipes : data.recipes
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;