import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/bookings`;

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getBookings = (search = "") =>
  axios.get(`${API}?search=${search}`, getConfig());

export const createBooking = (data) =>
  axios.post(API, data, getConfig());

export const updateBooking = (id, data) =>
  axios.put(`${API}/${id}`, data, getConfig());

export const deleteBooking = (id) =>
  axios.delete(`${API}/${id}`, getConfig());