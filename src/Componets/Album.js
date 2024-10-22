import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import albumlogo from "../images/M badge logo.png";

function Album() {
  const [albums, setAlbums] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newAlbum, setNewAlbum] = useState("");
  const [error, setError] = useState("");

  // Load albums from localStorage when the component mounts
  useEffect(() => {
    const storedAlbums = localStorage.getItem("albums");
    if (storedAlbums) {
      setAlbums(JSON.parse(storedAlbums));
    }
  }, []);

  // Handle adding a new album
  const handleAddAlbum = () => {
    if (newAlbum.trim() === "") {
      setError("Album name is required.");
      return;
    }

    // Reset error
    setError("");

    // Add the new album
    const updatedAlbums = [...albums, newAlbum];
    setAlbums(updatedAlbums);
    localStorage.setItem("albums", JSON.stringify(updatedAlbums));

    // Clear input and close modal
    setNewAlbum("");
    setShowModal(false);
  };
  // Handle clearing all projects
  // const handleCleardata = () => {
  //   localStorage.removeItem("Album");
  //   setAlbums([]); // Clear the state
  // };

  return (
    <div>
      <h5>Albums</h5>
      <Button
        className="btb"
        variant="primary"
        size="sm"
        onClick={() => setShowModal(true)}
      >
        New Album
      </Button>
      <div>
        {albums.length === 0 ? (
          <p>No albums available.</p>
        ) : (
          <ul>
            {albums.map((album, index) => (
              <li key={index}>
                <img
                  src={albumlogo} // Default image path
                  alt="img"
                  className="board-logo"
                  style={{ marginRight: "10px" }} // Space between logo and project name
                />
                <span
                  style={{
                    flexGrow: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {album}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div>
          {/* <button className='Showall-bt' onClick={handleCleardata}>Clear All data</button> */}
          <button className="Showall-bt">Show All</button>
        </div>
      </div>

      {/* Modal for adding a new album */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group>
              <Form.Label>Album Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter album name"
                value={newAlbum}
                onChange={(e) => setNewAlbum(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddAlbum}>
            Add Album
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Album;
