import React from "react";
import { ListGroup} from "react-bootstrap";
import Boards from "../Componets/Boards";
import Task from "../Componets/Task";
import Progress from "../Componets/Progress";
import "../StyleSheet.css";


function RightSidebar() {
  return (
    <div className="right-sidebar p-3">
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex mb-2" >
          <Boards />
        </ListGroup.Item>
        <ListGroup.Item  >
          <Progress />
        </ListGroup.Item>
      
        <ListGroup.Item className="d-flex mt-2" >
          <Task/>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default RightSidebar;
