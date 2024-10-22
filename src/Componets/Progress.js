import React from "react";
import {ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Cg1 from "../images/red circle image.jpeg";
import Cg2 from "../images/Blue colour circle image.jpeg";
import Cg3 from "../images/pink cicle.jpeg";
import "../StyleSheet.css";

const Progress = () => {
  return (
    <div>
      <div>
        <div
          className="d-flex  mt-2"
          style={{ borderBottom: "1px solid grey" }}
        >
          <div>
            <h6 style={{ fontSize: "11px" }}>Personal Progress</h6>
          </div>
          <div>
            <p style={{ fontSize: "11px", marginLeft: "50px" }}>Go to boards</p>
          </div>
        </div>
        <div>
          <div className=" d-flex mt-3">
            <img src={Cg1} alt="logo1" />
            <div style={{ width: "200px" }}>
              <p style={{ fontSize: "9px", marginLeft: "5px" }}>
                .Are either of your parents living?
                <ProgressBar
                  now={70}
                  label="7"
                  variant="success"
                  style={{ height: "13px", width: "140px" }}
                />
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" d-flex mt-3">
            <img src={Cg2} alt="logo1" />
            <div style={{ width: "200px" }}>
              <p style={{ fontSize: "9px", marginLeft: "5px" }}>
                .Do you belong to any groups in whi...
                <ProgressBar
                  now={60}
                  label="6"
                  variant="primary"
                  style={{ height: "13px", width: "140px" }}
                />
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" d-flex mt-3">
            <img src={Cg3} alt="logo1" />
            <div style={{ width: "200px" }}>
              <p style={{ fontSize: "9px", marginLeft: "5px" }}>
                1-2-1 Events
                <ProgressBar
                  now={30}
                  label="27"
                  variant="danger"
                  style={{ height: "13px", width: "140px" }}
                />
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="d-flex mt-4">
            <button className="Showall-bt">Show All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
