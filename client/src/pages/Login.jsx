import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser(form);

      localStorage.setItem("token", res.data.token);

      console.log(
        "[Analytics] User interacted with Feature Complete CRUD"
      );

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;