import React from 'react';
import { ListGroup, } from 'react-bootstrap';
import Contact from '../Componets/Contact'
import Project from '../Componets/Project'
import Album from '../Componets/Album'
import Organisations from '../Componets/Organizations'
import Followers from '../Componets/Follower'
import People from '../Componets/Peoples'
import '../StyleSheet.css'; 
const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between align-items-center mb-3">
          <div><Contact/> </div>
          {/* <Button variant="primary" size="sm">New Contact</Button> */}
         

        </ListGroup.Item>

        <ListGroup.Item className="d-flex justify-content-between align-items-center mb-3">
          <div><Project/></div>
          {/* <Button variant="primary" size="sm">New Project</Button> */}
        </ListGroup.Item>

        <ListGroup.Item className="d-flex justify-content-between align-items-center mb-3">
          <div> <Album/></div>
          {/* <Button variant="primary" size="sm">New Album</Button> */}
        </ListGroup.Item>

        <ListGroup.Item className="d-flex justify-content-between align-items-center mb-3">
          <div> <Organisations/></div>
          {/* <Button variant="primary" size="sm">New Organisation</Button> */}
        </ListGroup.Item>
      </ListGroup>

      <ListGroup className="mb-3">
        <ListGroup.Item className="d-flex align-items-center mb-3">
           <Followers/>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center mb-3">
           <People/>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default LeftSidebar;
