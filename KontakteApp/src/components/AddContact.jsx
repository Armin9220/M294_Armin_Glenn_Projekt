import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [contacts, setContacts] = useState([]); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newContact = { name, email, phone, address };

   
    setContacts([...contacts, newContact]);

 
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");

   
    if (onAdd) {
      onAdd(newContact);
    }

    
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>

      {/* Display newly added contacts */}
      <div className="contact-list">
        <h3>Contact List</h3>
        <ul id="contact-list">
          {contacts.map((contact, index) => (
            <li key={index}>
              <span className="name">{contact.name}</span> -{" "}
              <span className="phone">{contact.phone}</span> -{" "}
              <span className="email">{contact.email}</span> -{" "}
              <span className="address">{contact.address}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddContact;
