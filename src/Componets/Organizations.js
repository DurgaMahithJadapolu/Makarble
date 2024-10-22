import React from 'react';
import Companylogo from "../images/Company logo m symbool.png"
function Organizations() {
  return (
    <div>
      <h5>Organizations</h5>
      <ul>
        <li>
         <img src={Companylogo} alt='logo'/>
         <span style={{color:"blue"}}>An Organisation Demo</span>
    
         <p className='d-flex ms-5'>Admin</p>
        </li>
        <li>
        <img src={Companylogo} alt='logo'/>
         <span style={{color:"blue"}}>Education Charity </span>
    
         <p className='d-flex ms-5'>Member</p>
        </li>
        <li>
        <img src={Companylogo} alt='logo'/>
         <span style={{color:"blue"}}>Secondary School</span>
    
         <p className='d-flex ms-5'>Admin</p>
        </li>
      </ul>
      <div>
        <button className='Showall-bt'>Show All</button>
      </div>
    </div>
  );
}

export default Organizations;
