import { useEffect, useState } from "react";
import {
  createBooking,
  updateBooking,
} from "../services/bookingService";

function BookingForm({
  loadBookings,
  editing,
  setEditing,
}) {
  const initialState = {
    customerName: "",
    phone: "",
    vehicleNumber: "",
    vehicleType: "",
    serviceType: "",
    bookingDate: "",
    status: "Pending",
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editing) {
      setForm({
        customerName: editing.customerName,
        phone: editing.phone,
        vehicleNumber: editing.vehicleNumber,
        vehicleType: editing.vehicleType,
        serviceType: editing.serviceType,
        bookingDate: editing.bookingDate?.split("T")[0],
        status: editing.status,
      });
    } else {
      setForm(initialState);
    }
  }, [editing]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.customerName ||
      !form.phone ||
      !form.vehicleNumber ||
      !form.vehicleType ||
      !form.serviceType ||
      !form.bookingDate
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      if (editing) {
        await updateBooking(editing._id, form);
      } else {
        await createBooking(form);
      }

      loadBookings();
      setEditing(null);
      setForm(initialState);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">

      <h2>
        {editing ? "Update Booking" : "New Booking"}
      </h2>

      <form onSubmit={handleSubmit} className="booking-grid">

        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            placeholder="Enter customer name"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label>Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            value={form.vehicleNumber}
            onChange={handleChange}
            placeholder="AP39AB1234"
          />
        </div>

        <div className="form-group">
          <label>Vehicle Type</label>

          <select
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
          >
            <option value="">Select Vehicle</option>
            <option>Bike</option>
            <option>Scooter</option>
            <option>Car</option>
            <option>SUV</option>
            <option>Van</option>
            <option>Truck</option>
          </select>
        </div>

        <div className="form-group">
          <label>Service Type</label>

          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option>General Service</option>
            <option>Oil Change</option>
            <option>Brake Service</option>
            <option>Engine Repair</option>
            <option>Battery Replacement</option>
            <option>Wheel Alignment</option>
            <option>Tyre Replacement</option>
            <option>AC Service</option>
            <option>Full Inspection</option>
          </select>
        </div>

        <div className="form-group">
          <label>Booking Date</label>

          <input
            type="date"
            name="bookingDate"
            value={form.bookingDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="button-row">
          <button type="submit">
            {loading
              ? "Saving..."
              : editing
              ? "Update Booking"
              : "Create Booking"}
          </button>
        </div>

      </form>

    </div>
  );
}

export default BookingForm;