const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
			contact: {},
		},
		actions: {
			listAllContacts: (data) => {
				setStore({contactList: data});

				const store = getStore();
				console.log('list from context -->', store.contactList)
			},

			editContact: (editedContact) => {
				const store = getStore();
				setStore({...store, contact: editedContact});
			},
		}
	};
};

export default getState;
