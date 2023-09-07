import React, { useState } from "react";
import styles from "./FormDate.module.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

export default function FormDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Form className={styles.dateGroup}>
      <h5  >الفتره :</h5>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <i className="fa-solid fa-arrow-left-long"></i>
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      <i className="fa-regular fa-calendar-days mx-3 fs-4 text-secondary"></i>
    </Form>
  );
}
