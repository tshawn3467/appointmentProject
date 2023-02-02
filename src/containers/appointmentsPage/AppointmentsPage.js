import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState("");
 const [contact, setContact] = useState("");
 const [date, setDate] = useState("");
 const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addAppointment(title, contact, date, time);
   setTitle("");
   setContact("");
   setDate("");
   setTime("");
   const appointmentForm = document.getElementById("appointmentForm");
   appointmentForm.reset();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        appointments={props.appointments}
        contacts={props.contacts}
        handleSubmit={handleSubmit} 
        title={title} 
        setTitle={setTitle} 
        contact={contact} 
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList listOfStuff={props.appointments} />
      </section>
    </div>
  );
};
