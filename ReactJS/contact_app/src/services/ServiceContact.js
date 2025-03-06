import axios from "axios";

const API_URL = "http://localhost:3001/api/contact";

export const fetchContact = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.contact.rows;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

export const fetchContactByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data.contact.rows[0];
  } catch (error) {
    console.error("Error fetching contact by name:", error);
    return null;
  }
};
