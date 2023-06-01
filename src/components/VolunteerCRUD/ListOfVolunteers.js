import React from "react";
import { Table, Button } from "react-bootstrap";
import UpdateVolunteer from "./UpdateVolunteer";

export default function ListOfVolunteers({
  volunteers,
  volunteersAPI,
  getVolunteers,
  styles,
}) {
  function deletevolunteer(id) {
    fetch(`${volunteersAPI}/${id}`, {
      method: "DELETE",
    }).then(() => getVolunteers());
  }

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index}>
            <td>{volunteer.first}</td>
            <td>{volunteer.last}</td>
            <td>{volunteer.phone}</td>
            <td>{volunteer.email}</td>
            <td>
              <Button
                variant="dark"
                onClick={() => deletevolunteer(volunteer.id)}
              >
                Delete
              </Button>
            </td>
            <td>
              <UpdateVolunteer
                volunteerID={volunteer.id}
                getVolunteers={getVolunteers}
                volunteersAPI={volunteersAPI}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
