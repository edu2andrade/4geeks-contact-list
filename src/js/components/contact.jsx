import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { deleteContact } from "../services";
import { Context } from "../store/appContext";

const Contact = ({ contact }) => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleEditContact = () => {
     actions.editContact(contact);
     navigate('/form/edit');
  }

  const handleDeleteContact = () => {
    deleteContact(contact.id);
  }

  return (
    <ul>
      <li>
        <p>Name: {contact.full_name}</p>
        <p>E-mail: {contact.email}</p>
        <p>Address: {contact.address}</p>
        <p>Phone: {contact.phone}</p>
        <button onClick={handleEditContact}>edit</button>
        <button onClick={handleDeleteContact}>delete</button>
      </li>
    </ul>
  )
}

export default Contact;