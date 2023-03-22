import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { Context } from "../store/appContext";
import { createNewContact, editContact } from "../services";

import "../../styles/new-contact.css";


const initialState = {
	agenda_slug: "edu2andrade",
	full_name: '',
	email: '',
	address: '',
	phone: '',
}

const NewContact = () => {
const [contact, setContact] = useState(initialState);

const { store } = useContext(Context);
const { type } = useParams();
const navigate = useNavigate()

useEffect(() => {
	if(type === 'edit') {
		setContact(store.contact)
	}
}, [])

const handleChange = ({target}) => {
	setContact({...contact, [target.name]: target.value});
}

const handleSubmit = async (event) => {
	event.preventDefault();
	type === 'edit' ? await editContact(contact) : await createNewContact(contact);
	navigate('/');
}

// --> Old and deprecated way:
//
// const handleSubmit = (event) => {

// 	event.preventDefault();
// 	const formData = new FormData(event.target)
// 	const data = Object.fromEntries(formData)

// 	const newContact = {
// 		agenda_slug: "edu2andrade",
// 		full_name: data.name,
// 		email: data.email,
// 		address: data.address,
// 		phone: data.phone};

// 	setContact(newContact);
// 	createNewContact(newContact);
	
// }

	return (
		<div className="mx-5">
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputName" className="form-label">Name</label>
					<input defaultValue={contact.full_name} name="full_name" type="text" className="form-control" id="exampleInputName" aria-describedby="textHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
					<input defaultValue={contact.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputaddress" className="form-label">Address</label>
					<input defaultValue={contact.address} name="address" type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
					<input defaultValue={contact.phone} name="phone" type="text" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp"/>
				</div>
				<button type="submit" className="btn btn-primary">Create new contact</button>
			</form>
		</div>
	);
};

export default NewContact;
