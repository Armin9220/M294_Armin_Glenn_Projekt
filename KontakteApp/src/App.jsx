import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";


const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Broadway",
    },
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
  };

  const handleEditContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={handleDeleteContact} />
          }
        />
        <Route path="/add" element={<AddContact onAdd={handleAddContact} />} />
        <Route
          path="/edit/:id"
          element={
            <EditContact contacts={contacts} onSave={handleEditContact} />
          }
        />
        <Route
          path="/view/:id"
          element={<ViewContact contacts={contacts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
