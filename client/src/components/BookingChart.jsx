import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function BookingChart({ bookings }) {
  const data = {
    labels: [
      "Pending",
      "In Progress",
      "Completed",
    ],

    datasets: [
      {
        data: [
          bookings.filter(
            (b) => b.status === "Pending"
          ).length,

          bookings.filter(
            (b) => b.status === "In Progress"
          ).length,

          bookings.filter(
            (b) => b.status === "Completed"
          ).length,
        ],

        backgroundColor: [
          "#f1c40f",
          "#3498db",
          "#2ecc71",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="chart-card">
      <h2>Booking Status</h2>

      <div className="pie-chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default BookingChart;