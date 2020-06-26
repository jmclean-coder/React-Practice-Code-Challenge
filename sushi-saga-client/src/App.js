import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state ={
      emptyPlates: [],
      sushis : [],
      wallet: [100]
    }
  }

  handleClick = (e, sushi) => {
    const foundSushi = this.state.sushis.find(item => item.id === sushi.id)
    let key = foundSushi.id
    if(this.state.wallet[0] >= sushi.price){
      this.setState( prevState => ({
        sushis: prevState.sushis.map(sushi => sushi.id === key? { ...sushi, isEaten: true }: sushi),
        emptyPlates: prevState.emptyPlates.concat(sushi),
        wallet: [prevState.wallet[0] - sushi.price]
      }))
    } else {
      alert("You cannot afford anymore!")
    }
  }

  render() {
    console.log(this.state)
    return (
  
      <div className="app">
        <SushiContainer handleClick={this.handleClick} sushis={this.state.sushis} />
        <Table eatenSushis={this.state.emptyPlates} wallet={this.state.wallet} />
      </div>
    );
  }

  componentDidMount = () =>{
      // console.log("hi")
    fetch(API)
      .then(res => res.json())
      .then(data => {
        let editedData = data.map(obj =>  {return {...obj, isEaten: false}})
        // console.log(editedData) 
        this.setState({
          sushis: editedData
       })
      })
  }
}

export default App;