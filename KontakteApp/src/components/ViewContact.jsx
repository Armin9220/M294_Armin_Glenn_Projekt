import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewContact = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const foundContact = contacts.find((c) => c.id === parseInt(id, 10));
    setContact(foundContact);
  }, [id, contacts]);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ViewContact;
