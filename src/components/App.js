import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    //initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }
  
  loadSamples() {
    console.log('loadsamples call');
    this.setState({
      fishes : sampleFishes
    });
  }

  addFish(fish) {
    // make a copy from original status
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
            }
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;