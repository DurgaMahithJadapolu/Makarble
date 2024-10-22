import React from 'react';
import ps1 from '../images/person-1.jpeg'
import ps2 from '../images/person-2.jpeg'
import ps3 from '../images/person-3L.jpeg'
import ps4 from '../images/ps-4.jpeg'
import ps5 from '../images/ps-5L.jpeg'



function Peoples() {
  return (
    <div>
      <h5>Peoples</h5>
      <div className="d-flex">
        <img src={ps1} alt="1" className="mx-1" />
        <img src={ps2} alt="2" className="mx-1"/>
        <img src={ps3} alt="3" className="mx-1"  />
        <img src={ps4} alt="4" className="mx-1"  />
        <img src={ps5} alt="5" className="mx-1"  />
    

      </div>
      <div className='d-flex mt-4'>
        <button className='Showall-bt'>Show All</button>
      </div>
    </div>
  );
}

export default  Peoples;
