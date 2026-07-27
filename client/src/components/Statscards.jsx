function StatsCards({ bookings }) {

  const total = bookings.length;

  const pending = bookings.filter(
    (b)=>b.status==="Pending"
  ).length;

  const completed = bookings.filter(
    (b)=>b.status==="Completed"
  ).length;


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