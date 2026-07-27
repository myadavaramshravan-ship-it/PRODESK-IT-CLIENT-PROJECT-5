function StatsCards({ bookings }) {
  const total = bookings.length;

  const pending = bookings.filter(
    (b) => b.status === "Pending"
  ).length;

  const progress = bookings.filter(
    (b) => b.status === "In Progress"
  ).length;

  const completed = bookings.filter(
    (b) => b.status === "Completed"
  ).length;

  return (
    <div className="stats-grid">

      <div className="card">
        <h3>Total</h3>
        <h1>{total}</h1>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <h1>{pending}</h1>
      </div>

      <div className="card">
        <h3>In Progress</h3>
        <h1>{progress}</h1>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <h1>{completed}</h1>
      </div>

    </div>
  );
}

export default StatsCards;