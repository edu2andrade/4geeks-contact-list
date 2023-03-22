import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import Contact from "../components/contact.jsx";
import { getContacts } from "../services";

import { Context } from "../store/appContext";


const Home = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { store, actions } = useContext(Context)

	const fecthAllContacts = async () => {
		setIsLoading(true)

		const data = await getContacts();
		actions.listAllContacts(data);

		setIsLoading(false)
	}

	useEffect(() => {
		fecthAllContacts();
	}, []);

	return (
		<div className="mx-5">
			{
				isLoading
				? <p>Loading...</p>
				: store.contactList.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))
			}
		</div>
	);
}

export default Home;
