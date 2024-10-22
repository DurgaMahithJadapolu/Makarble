import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import Projectlogo from '../images/Project logo.png';

function Project() {
  const [project, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProjects, setNewProject] = useState("");
  const [error, setError] = useState("");

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Handle adding a new project
  const handleAddProject = () => {
    if (newProjects.trim() === "") {
      setError("Project name is required.");
      return;
    }

    // Reset error
    setError("");

    // Add the new project
    const updatedProjects = [...project, newProjects];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    // Clear input and close modal
    setNewProject("");
    setShowModal(false);
  };

  // Handle clearing all projects
  // const handleClearProjects = () => {
  //   localStorage.removeItem("projects");
  //   setProjects([]); // Clear the state
  // };

  return (
    <div>
      <h6>Projects</h6>
      <Button className="btb" variant="primary" size="sm" onClick={() => setShowModal(true)}>
        New Project
      </Button>
      
      <div>
        {project.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          <ul style={{ padding: 0 }}>
            {project.map((project, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '5px 0' }}>
                <img
                  src={Projectlogo} // Default image path
                  alt="img"
                  className="board-logo"
                  style={{ marginRight: '10px' }} // Space between logo and project name
                />
                <span style={{ flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {project}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Button to clear all projects */}
        <div>
          {/* <button className='Showall-bt' onClick={handleClearProjects}>Clear All Projects</button> */}
          <button className='Showall-bt'>Show All</button>
        </div>
      </div>

      {/* Modal for adding a new project */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group>
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                value={newProjects}
                onChange={(e) => setNewProject(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProject}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Project;
