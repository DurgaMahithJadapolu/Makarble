import React, { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col, Badge, Alert } from "react-bootstrap";
import { Heart, MessageCircle, Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Img from "../images/Ps-11.jpeg";
import "../StyleSheet.css";

function ActivityCard() {
  const [newsFeedData, setNewsFeedData] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [userActive, setUserActive] = useState(true); // Assume user is active for now
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages

  useEffect(() => {
    const storedFeed = localStorage.getItem("newsFeed");
    if (storedFeed) {
      setNewsFeedData(JSON.parse(storedFeed));
    }
  }, []);

  const handleAddPost = () => {
    // Validate message length
    if (!newPost.message.trim()) {
      setErrorMessage("Message cannot be empty.");
      return;
    } else if (newPost.message.length < 3) {
      setErrorMessage("Message must be at least 3 characters long.");
      return;
    }

    const currentTime = new Date().toLocaleString();
    const newFeedItem = {
      name: "Yael Adamson-Brown",
      messages: [newPost.message],
      time: currentTime,
      firstPostTime: currentTime,
      expanded: false,
      editMode: false,
      editedAt: null,
    };

    const updatedFeed = [newFeedItem, ...newsFeedData];
    setNewsFeedData(updatedFeed);
    localStorage.setItem("newsFeed", JSON.stringify(updatedFeed));
    setNewPost({ message: "" });
    setErrorMessage(""); // Clear any previous error messages
  };

  // const handleCleardata = () => {
  //   // Prompt the user for confirmation
  //   const confirmed = window.confirm("Are you sure you want to clear all data?");
  //   if (confirmed) {
  //     localStorage.removeItem("newsFeed"); // Clear newsFeed from local storage
  //     setNewsFeedData([]); // Clear the state
  //   }
  // };

  const handleExpandStory = (index) => {
    setNewsFeedData((prevFeed) =>
      prevFeed.map((feed, i) =>
        i === index
          ? {
              ...feed,
              expanded: !feed.expanded,
              editMode: false,
              editedAt: feed.expanded ? null : new Date().toLocaleString(),
            }
          : feed
      )
    );
  };

  return (
    <div className="newsfeed p-3">
      <Card className="mb-3">
        <Card.Body>
          <Form>
            <Row className="align-items-center">
              {/* Input Field */}
              <Col xs={12} sm={10} className="mb-2 mb-sm-0">
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="What's on your mind?"
                    value={newPost.message}
                    onChange={(e) =>
                      setNewPost({ ...newPost, message: e.target.value })
                    }
                  />
                </Form.Group>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}{" "}
                {/* Display error message */}
              </Col>

              {/* Post Button */}
              <Col xs={12} sm={2} className="text-center">
                <Button
                  variant="danger"
                  onClick={handleAddPost}
                  style={{ width: "100%" }}
                >
                  Post
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {newsFeedData.length > 0 ? (
        newsFeedData.map((feed, index) => (
          <Card className="mb-3" key={index}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={Img}
                  alt={feed.name}
                  className="rounded-circle me-3"
                  style={{ width: "48px", height: "48px" }}
                />
                <div>
                  <h5 className="mb-0">{feed.name}</h5>
                  <small className="text-muted">
                    {userActive
                      ? `Active - ${feed.time}`
                      : `Posted on ${feed.firstPostTime}`}
                  </small>
                  <span className="d-flex justify-content-start align-items-start">
                    <small className="text-muted">
                      {userActive
                        ? `Posted - ${feed.time}`
                        : `Posted on ${feed.firstPostTime}`}
                    </small>
                  </span>
                  {feed.editedAt && (
                    <small className="text-muted d-block">
                      Last edited at {feed.editedAt}
                    </small>
                  )}
                  <Badge bg="success" className="mb-2">
                    PH09
                  </Badge>
                </div>
              </div>
              <span>edited Just Now</span>
              <Button variant="light">
                <FontAwesomeIcon icon={faGear} />
              </Button>
            </Card.Header>

            <Card.Body>
              <Card.Text>
                {feed.expanded ? (
                  feed.messages && feed.messages.length > 0 ? (
                    feed.messages.map((msg, i) => <p key={i}>{msg}</p>)
                  ) : (
                    <p>No messages yet.</p>
                  )
                ) : feed.messages && feed.messages.length > 0 ? (
                  `${feed.messages[0].slice(0, 100)}...`
                ) : (
                  "No messages yet."
                )}
                <br />
              </Card.Text>

              {feed.editMode ? (
                <Form>
                  <Form.Group className="mb-2">
                    <Form.Control
                      as="textarea"
                      value={feed.message}
                      onChange={(e) =>
                        setNewsFeedData((prevFeed) =>
                          prevFeed.map((item, i) =>
                            i === index
                              ? { ...item, message: e.target.value }
                              : item
                          )
                        )
                      }
                    />
                  </Form.Group>
                </Form>
              ) : (
                <div className="text-center">
                  <Button
                    className="d-flex mx-auto"
                    style={{
                      backgroundColor: "lightgreen",
                      borderColor: "lightgreen",
                      width: "140px",
                    }}
                    onClick={() => handleExpandStory(index)}
                  >
                    {feed.expanded ? "Collapse Story" : "Expand Story"}
                  </Button>
                </div>
              )}
              <div className="d-flex align-items-center justify-content-between">
                <Button variant="light" className="p-0 me-3">
                  <Heart size={20} className="text-danger" />
                </Button>

                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center me-3">
                    <MessageCircle size={20} className="text-muted me-1" />
                    <small className="text-muted">0 Comments</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <Star size={20} className="text-muted me-1" />
                    <small className="text-muted">0 Favourites</small>
                  </div>
                </div>
              </div>
            </Card.Body>

            <Card.Footer>
              <Row className="align-items-center gx-2">
                <Col xs={12} sm={1} className="text-center mb-2 mb-sm-0">
                  <img
                    src={Img}
                    alt="Current user"
                    className="rounded-circle"
                    style={{ width: "32px", height: "32px" }}
                  />
                </Col>

                <Col xs={12} sm={9} className="mb-2 mb-sm-0">
                  <Form.Control type="text" placeholder="Add Comment" />
                </Col>

                <Col xs={12} sm={2} className="text-center">
                  <Button variant="danger" style={{ width: "100%" }}>
                    Post
                  </Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        ))
      ) : (
        <p>No posts yet. Be the first to post!</p>
      )}

      <Button variant="secondary">Load More</Button>
      {/* <div>
                  <button className='Showall-bt' onClick={handleCleardata}>Clear All Data</button>
          
                </div> */}
    </div>
  );
}

export default ActivityCard;
