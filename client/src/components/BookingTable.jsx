import { deleteBooking } from "../services/bookingService";

function BookingTable({
  bookings,
  loadBookings,
  setEditing,
}) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBooking(id);

      console.log(
        "[Analytics] User interacted with Feature Complete CRUD"
      );

      loadBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status pending";
      case "In Progress":
        return "status progress";
      case "Completed":
        return "status completed";
      default:
        return "status";
    }
  };

  if (bookings.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Bookings Found</h3>
        <p>Create your first booking to get started.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Phone</th>
            <th>Vehicle No.</th>
            <th>Vehicle Type</th>
            <th>Service</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th width="170">Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.customerName}</td>

              <td>{booking.phone}</td>

              <td>{booking.vehicleNumber}</td>

              <td>{booking.vehicleType}</td>

              <td>{booking.serviceType}</td>

              <td>
                {new Date(
                  booking.bookingDate
                ).toLocaleDateString()}
              </td>

              <td>
                <span className={getStatusClass(booking.status)}>
                  {booking.status}
                </span>
              </td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => setEditing(booking)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(booking._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;