import React from 'react'

const Card = (props) => {
    // Obyektin parcalanmasi Destructuring
    console.log(props)
  return (
    <div class="card border-0">
    <img
      src={props.meqaleninShekliProps}
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{props.basliqProps}</h5>
      <p class="card-text">
       {props.meqaleninMetniProps}
      </p>
    </div>
  </div>
  )
}

export default Card