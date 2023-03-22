const BASE_URL = 'https://assets.breatheco.de/apis/fake/contact/';
const HEADERS = {'Content-Type': 'application/json'};

export const getContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}agenda/edu2andrade`)
    const data = await response.json()
    return data;

  } catch (error) {
    console.log('Error in getContacts functions -->', error)
  }
}

export const createNewContact = async (newContact) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(newContact),
      redirect: 'follow'
    })

    return await response.json();

  } catch (error) {
    console.log('Error in createNewContact functions -->', error)
  }
}

export const editContact = async (contact) => {
  try {
    const response = await fetch(`${BASE_URL}${contact.id}`, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(contact)
    })

    return await response.json();

  } catch (error) {
    console.log('Error in createNewContact functions -->', error)
  }
}

export const deleteContact = async (contactId) => {
  try {
    const response = await fetch(`${BASE_URL}${contactId}`, {
      method: 'DELETE'
    })

    return await response.json();

  } catch (error) {
    console.log('Error in createNewContact functions -->', error)
  }
}