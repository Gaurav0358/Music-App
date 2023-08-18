import React from 'react'
import Cardimage from '../../assets/card.jpg'

function Card() {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 gs-5'>
      <div className='my-3'>
        <div className="card text-bg-dark position-relative ">
          <img src={Cardimage} className="card-img blur" alt="..." />
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <h5 className="m-0 ps-2 lh-lg">Hip Hop</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
