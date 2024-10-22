import React from 'react';
import ps1 from '../images/ps-6L.jpeg';
import ps2 from '../images/Ps-7.jpeg';
import ps3 from '../images/ps-8L.jpeg';
import ps4 from '../images/ps-9L.jpeg';
import ps5 from '../images/Ps-11.jpeg';

function Followers() {
  return (
    <div>
      <h5>Followers</h5>
      <div className="d-flex flex-wrap">
        <img src={ps1} alt="1" className="img-fluid mx-1" />
        <img src={ps2} alt="2" className="img-fluid mx-1" />
        <img src={ps3} alt="3" className="img-fluid mx-1" />
        <img src={ps4} alt="4" className="img-fluid mx-1" />
        <img src={ps5} alt="5" className="img-fluid mx-1" />
      </div>
      <div className='d-flex mt-4'>
        <button className='Showall-bt'>Show All</button>
      </div>
    </div>
  );
}

export default Followers;
