import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props)
  const {name, img_url, price} = props.sushi


  // let isNotEaten = true

  // function eatSushi(e) {
  //   console.log(e)
  // isNotEaten = false
  // }

  return (
    <div className="sushi">
      <div className="plate" onClick={(e) => props.handleClick(e, props.sushi)}>
        {props.sushi.isEaten? null : <img src={img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi