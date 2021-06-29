import axios from "axios";
const AdminURL = "http://localhost:5000/admin";

export const getAdmin = async (id) => {
    id = id || '';
    return await axios.get(`${AdminURL}`);
}

export const addAdmin = async (admin) => {
    return await axios.post(`${AdminURL}/add`, admin);
}

export const deleteAdmin = async (id) => {
    return await axios.delete(`${AdminURL}/delete/${id}`);
}