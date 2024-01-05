import React from 'react';
import Tnavbar from './Tnavbar';
import Tcard from './Tcard';
import Traveldata from './Traveldata';
import './Travel.css'


function Travel() {

  let Traveljournal = Traveldata.map((Travel) => {
    return (
      <Tcard 
      key = {Travel.id}
      {...Travel}
      />
    )
  })
  return (
    <div className='Travel'>
        <Tnavbar />
        {Traveljournal}
    </div>
  )
}

export default Travel