import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function UpdateVolunteer({
  volunteerID,
  getVolunteers,
  volunteersAPI,
}) {
  const [updatedFirstName, setupdatedFirstName] = useState("");
  const [updatedLastName, setupdatedLastName] = useState("");
  const [updatedPhone, setupdatedPhone] = useState("");
  const [updatedEmail, setupdatedEmail] = useState("");

  /*NOTE set a state for show to handle the opening and closing of the modal and it is a boolean.
    Please reference the following url for more info https://react-bootstrap.github.io/components/modal/ */

  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  /*NOTE fetches a specific object from the API by targeting the id and uses the PUT method to update it. It will take in the
    values from the form below. When the array is updated, it will retrieve the new array and trigger the handleClose function
    that will close the modal*/

  function updateVolunteer(volunteerID) {
    let id = volunteerID;

    fetch(`${volunteersAPI}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first: updatedFirstName,
        last: updatedLastName,
        phone: updatedPhone,
        email: updatedEmail,
      }),
    }).then(() => getVolunteers());
    handleClose();
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Change Entry
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Volunteer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update First Name"
              onChange={(e) => setupdatedFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update Last Name"
              onChange={(e) => setupdatedLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update Phone Number"
              onChange={(e) => setupdatedPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update Email"
              onChange={(e) => setupdatedEmail(e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={() => updateVolunteer(volunteerID)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
