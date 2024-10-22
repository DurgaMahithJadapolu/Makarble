import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import badgelogo from "../images/badge logo.png";


function Contact() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [newContactName, setNewContactName] = useState(""); // To hold the new contact's name
  const [newPhoneNumber, setNewPhoneNumber] = useState(""); // To hold the new contact's phone number
  const [error, setError] = useState(""); // To handle validation errors
  const [hoveredIndex, setHoveredIndex] = useState(null); // To track which contact is hovered

  // Load contacts from localStorage when the component mounts
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // Function to validate contact name (only alphabets)
  const validateContactName = (name) => /^[A-Za-z\s]+$/.test(name);

  // Function to validate phone number (only numbers)
  const validatePhoneNumber = (phone) => /^[0-9]+$/.test(phone);

  // Function to handle adding a new contact
  const handleAddContact = () => {
    if (newContactName.trim() === "" || newPhoneNumber.trim() === "") {
      setError("Both fields are required.");
      return;
    }

    if (!validateContactName(newContactName)) {
      setError("Contact name must contain only alphabets.");
      return;
    }

    if (!validatePhoneNumber(newPhoneNumber)) {
      setError("Phone number must contain only digits.");
      return;
    }

    // Reset any previous errors
    setError("");

    // Create new contact object
    const newContact = { name: newContactName, phone: newPhoneNumber };

    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts)); // Store in localStorage

    setNewContactName(""); // Clear the input
    setNewPhoneNumber(""); // Clear the phone input
    setShowModal(false); // Close the modal
  };

  // Handler clearing all projects
  // const handleCleardata = () => {
  //   localStorage.removeItem("projects");
  //   setContacts([]); // Clear the state
  // };

  // Filter contacts to exclude invalid entries
  const validContacts = contacts.filter(
    (contact) => contact.name && contact.phone
  );

  return (
    <div className="container-fluid">
      <div className="contact-container-fluid">
        {" "}
        {/* Main container */}
        <h6>{validContacts.length} Contacts</h6>
        {/* New Contact Button in top-right corner */}
        <Button
          className="btn-right-top"
          variant="primary"
          size="sm"
          onClick={() => setShowModal(true)}
        >
          New Contact
        </Button>
        {validContacts.length === 0 ? (
          <p>No contacts available.</p>
        ) : (
          <ul>
            {validContacts.map((contact, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on hover
                onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
                style={{ cursor: "pointer" }} // Change the cursor to pointer
              >
                <img src={badgelogo} alt="logo" />
                {contact.name}{" "}
                {hoveredIndex === index && ( // Show phone number only if the contact is hovered
                  <span style={{ fontWeight: "normal", marginLeft: "10px" }}>
                    {contact.phone}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {/* <button className='Showall-bt' onClick={handleCleardata}>Clear All Data</button> */}
        <button className="Showall-bt">Show All</button>
      </div>

      {/* Modal for adding a new contact */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group>
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact name"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={newPhoneNumber}
                onChange={(e) => setNewPhoneNumber(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddContact}>
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;
