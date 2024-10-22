import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import Companylogo from "../images/M badge logo.png"; // Assuming this is your logo image

function Boards() {
  const [boards, setBoards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newBoard, setNewBoard] = useState("");
  const [error, setError] = useState("");

  // Load boards from localStorage when the component mounts
  useEffect(() => {
    const storedBoards = localStorage.getItem("boards");
    if (storedBoards) {
      setBoards(JSON.parse(storedBoards));
    }
  }, []);

  // Handle adding a new board
  const handleAddBoard = () => {
    if (newBoard.trim() === "") {
      setError("Board name is required.");
      return;
    }

    // Reset error
    setError("");

    // Add the new board
    const updatedBoards = [...boards, newBoard];
    setBoards(updatedBoards);
    localStorage.setItem("boards", JSON.stringify(updatedBoards));

    // Clear input and close modal
    setNewBoard("");
    setShowModal(false);
  };

  // //   Handle clearing all projects
  //     const handleCleardata = () => {
  //       localStorage.removeItem("Boards");
  //      setBoards([]); // Clear the state
  //     };

  return (
    <div>
      <div>
        <h5>Boards</h5>
        <Button
          className="btb"
          variant="primary"
          size="sm"
          onClick={() => setShowModal(true)}
        >
          New Board
        </Button>
      </div>

      <div>
        {boards.length === 0 ? (
          <p>No boards available.</p>
        ) : (
          <ul>
            {boards.map((board, index) => (
              <li key={index} className="board-item">
                {/* Insert image alongside board name */}
                <img
                  src={Companylogo} // Default image path
                  alt="img"
                  className="board-logo"
                />
                <span
                  style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                >
                  {board}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div>
          <button className="Showall-bt">Show All</button>
        </div>
        {/* <div>
                  <button className='Showall-bt' onClick={handleCleardata}>Clear All Data</button>
          
                </div>  */}
      </div>

      {/* Modal for adding a new board */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group>
              <Form.Label>Board Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter board name"
                value={newBoard}
                onChange={(e) => setNewBoard(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddBoard}>
            Add Board
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Boards;
