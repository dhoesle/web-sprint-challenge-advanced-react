import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  
  state = {
    plants: [],
    search: ''
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/plants')
      .then(res => {
      console.log("PlantList -> componentDidMount -> res", res.data.plantsData)
        this.setState({
          plants: res.data.plantsData
        })
      })
  }
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  handleChange(event) {
    this.setState({search: event.target.value})
  }

  render() {
    let filteredPlants = this.state.plants.filter(
      (plant) => {
        return plant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    return (
      <main className="plant-list">
        <input 
          type='text'
          className='input'
          placeholder='Filter Plants Here...'
          value={this.state.search}
          onChange={this.handleChange.bind(this)}
          />
        {filteredPlants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
