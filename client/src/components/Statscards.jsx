function StatsCards({ total, pending, completed }) {
  return (
    <div className="stats-container">

      <div className="stat-card">
        <h3>Total Bookings</h3>
        <p>{total}</p>
      </div>

      <div className="stat-card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>

      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

    </div>
  );
}

export default StatsCards;