import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";


export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} id="appointmentForm">
      <input 
      onChange={(e) => {setTitle(e.target.value)}}
      value={title}
      placeholder="Appointment Title"
      id="title"
      name="title"
      type="text"
      required
      >
      </input>

      <input
      onChange={(e) => {setDate(e.target.value)}}
      value={date}
      id="date"
      name="date"
      type="date"
      required
      >
      </input>

      <input
      onChange={(e) => {setTime(e.target.value)}}
      value={time}
      id="time"
      name="time"
      type="time"
      min={getTodayString}
      required
      >
      </input>
    
      <ContactPicker contacts={contacts} onChange={(e) => {setContact(e.target.value)}} />

      <button>SUBMIT</button>
    </form>
  );
};
