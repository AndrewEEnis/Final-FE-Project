import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function NewVolunteerForm({
  volunteersAPI,
  getVolunteers,
  styles,
}) {
  const [volunteerFirstName, setvolunteerFirstName] = useState("");
  const [volunteerLastName, setvolunteerLastName] = useState("");
  const [volunteerPhone, setvolunteerPhone] = useState("");
  const [volunteerEmail, setvolunteerEmail] = useState("");

  function addVolunteer(e) {
    e.preventDefault();

    fetch(volunteersAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first: volunteerFirstName,
        last: volunteerLastName,
        phone: volunteerPhone,
        email: volunteerEmail,
      }),
    }).then(() => getVolunteers());
    setvolunteerLastName("");
    setvolunteerFirstName("");
    setvolunteerPhone("");
    setvolunteerEmail("");
  }

  return (
    <div className={styles.volunteerForm}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={volunteerFirstName}
            onChange={(e) => setvolunteerFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={volunteerLastName}
            onChange={(e) => setvolunteerLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone Number"
            value={volunteerPhone}
            onChange={(e) => setvolunteerPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={volunteerEmail}
            onChange={(e) => setvolunteerEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={(e) => addVolunteer(e)}>
          Submit Volunteer Information
        </Button>
      </Form>
    </div>
  );
}
