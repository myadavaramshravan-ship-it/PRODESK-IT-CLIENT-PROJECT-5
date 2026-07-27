import axios from "axios";

const API = axios.create({
  baseURL: "https://mechanic-booking.onrender.com/api"
});


API.interceptors.request.use((config)=>{

  const token = localStorage.getItem("token");

  if(token){
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});


export const getBookings = (search="")=>{
  return API.get(`/bookings?search=${search}`);
};


export const createBooking = (data)=>{
  return API.post("/bookings", data);
};


export const updateBooking = (id,data)=>{
  return API.put(`/bookings/${id}`, data);
};


export const deleteBooking = (id)=>{
  return API.delete(`/bookings/${id}`);
};