import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input 
        onChange={(e) => setName(e.target.value)}
        value={name}
        id="name" 
        name="name" 
        type="text" 
        placeholder="Enter Name"
        required>
        </input>

        <input 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id="email" 
        name="email" 
        type="email" 
        placeholder="joesmith@someemail.com"
        required>
        </input>

        <input 
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        id="phone" 
        name="phone" 
        type="tel" 
        placeholder="123-456-7890"
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$" 
        required>
        </input>

        <button>SUBMIT</button>
      </form>
    </div>
  );
};
