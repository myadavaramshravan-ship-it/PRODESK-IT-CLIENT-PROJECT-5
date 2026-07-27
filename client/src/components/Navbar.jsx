import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Mechanic Booking System</h2>
      <button
        aria-label="Logout"
        onClick={logout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;