import axios from 'axios';

const hotelsUrl = 'http://localhost:5000/admin';

export const getHotels = async (id) => {
    id = id || '';
    return await axios.get(`${hotelsUrl}/hotel/${id}`);
}

export const addHotel = async (hotel) => {
    return await axios.post(`${hotelsUrl}/add/hotel`, hotel);
}

export const deleteHotel = async (id) => {
    return await axios.delete(`${hotelsUrl}/hotel/${id}`);
}

export const editHotel = async (id, hotel) => {
    return await axios.post(`${hotelsUrl}/hotel/${id}/update`, hotel)
}