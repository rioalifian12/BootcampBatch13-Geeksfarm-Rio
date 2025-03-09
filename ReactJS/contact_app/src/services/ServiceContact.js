import axios from "axios";

const API_URL = "http://localhost:3001/api/contact";

export const fetchContact = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.contact.rows;
  } catch (error) {
    console.log(`Error fetching contact: ${error}`);
    return [];
  }
};

export const fetchContactByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data.contact.rows[0];
  } catch (error) {
    console.log(`Error fetching contact by name: ${error}`);
    return null;
  }
};

export const addContact = async (contact) => {
  try {
    const response = await axios.post(API_URL, contact);
    return response.data.contact;
  } catch (error) {
    console.log(`Error adding contact: ${error}`);
    return null;
  }
};

export const editContact = async (contact) => {
  try {
    const response = await axios.put(`${API_URL}/${contact.oldName}`, contact);
    return response.data;
  } catch (error) {
    console.log(`Error editing contact by name: ${error}`);
    return null;
  }
};

export const deleteContact = async (name) => {
  try {
    const { rowCount } = await axios.delete(`${API_URL}/${name}`);
    return rowCount > 0;
  } catch (error) {
    console.log(`Error deleting contact: ${error}`);
    return null;
  }
};
