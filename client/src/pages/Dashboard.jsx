import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import BookingForm from "../components/BookingForm";
import BookingTable from "../components/BookingTable";
import StatsCards from "../components/StatsCards";
import BookingChart from "../components/BookingChart";

import { getBookings } from "../services/bookingService";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  const loadBookings = async () => {
    try {
      setLoading(true);

      const res = await getBookings(search);

      setBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, [search]);

  return (
    <>
      <Navbar />

      <div className="dashboard">

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div>
            <h1>Mechanic Booking Dashboard</h1>
            <p>
              Manage customer bookings and workshop services efficiently.
            </p>
          </div>

          <div className="today-card">
            {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>

        {/* Statistics */}
        <StatsCards bookings={bookings} />

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Booking Form */}
        <BookingForm
          loadBookings={loadBookings}
          editing={editing}
          setEditing={setEditing}
        />

        {/* Chart */}
        <BookingChart bookings={bookings} />

        {/* Booking Table */}
        {loading ? (
          <Loader />
        ) : (
          <BookingTable
            bookings={bookings}
            loadBookings={loadBookings}
            setEditing={setEditing}
          />
        )}
      </div>
    </>
  );
}

export default Dashboard;