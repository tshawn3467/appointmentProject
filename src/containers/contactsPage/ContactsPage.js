import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isDuplicate, setIsDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate) {
    props.addContact(name, phone, email);

    setName("");
    setPhone("");
    setEmail("");  
   } else {
    
    return (
      alert('Contact already exists!'),
      setIsDuplicate(false),
      setName(""),
      setPhone(""),
      setEmail("")
    )
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  props.contacts.forEach((element) => {
    if (name === element.name) {
      setIsDuplicate(true);
      return alert("Contact name already exists!");
    }
  });
 }, [props.contacts, name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList listOfStuff={props.contacts} />
      </section>
    </div>
  );
};
