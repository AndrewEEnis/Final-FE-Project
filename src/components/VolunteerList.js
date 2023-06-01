import React from "react";
import { useState, useEffect } from "react";
import NewVolunteerForm from "./VolunteerCRUD/NewVolunteerForm";
import ListOfVolunteers from "./VolunteerCRUD/ListOfVolunteers";
import styles from "./volunteerList.module.css";

export default function ReadingList() {
  const VOLUNTEERAPI = "https://6476be759233e82dd53a51b8.mockapi.io/volunteers";

  const [volunteers, setVolunteers] = useState([]);

  function getVolunteers() {
    fetch(VOLUNTEERAPI)
      .then((data) => data.json())
      .then((data) => setVolunteers(data));
  }

  useEffect(() => {
    getVolunteers();
  }, []);

  return (
    <div className={styles.volunteerList}>
      <h1 className={styles.header}>Volunteer List</h1>
      <NewVolunteerForm
        volunteersAPI={VOLUNTEERAPI}
        getVolunteers={getVolunteers}
        styles={styles}
      />
      <ListOfVolunteers
        volunteersAPI={VOLUNTEERAPI}
        volunteers={volunteers}
        getVolunteers={getVolunteers}
        styles={styles}
      />
    </div>
  );
}
