import React, { Fragment, Component } from 'react'
import Sushi from '../components/Sushi.js';
import MoreButton from '../components/MoreButton'

class SushiContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      n:0
    }
  }

 renderNextSushis = () => {
   let prevN = this.state.n
   this.state.n >= 96? this.setState({n: 0}) : this.setState({n: prevN + 4})
 }
 render(){
  return (
    <Fragment>
      {/* {console.log(props)} */}
      <div className="belt">
        {
          this.props.sushis.slice(this.state.n, this.state.n+4).map(sushi => <Sushi handleClick={this.props.handleClick} key={sushi.id} sushi={sushi}/>)
        }
        <MoreButton renderNextSushis={this.renderNextSushis} />
      </div>
    </Fragment>
  )
}
}

export default SushiContainer