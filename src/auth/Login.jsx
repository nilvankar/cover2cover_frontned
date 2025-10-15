import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import login from '../context/AuthContext'
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); // ✅ access context
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/auth/login",
        formData,
        { withCredentials: true }
      );

      if (res.data.status === "success") {
        // Save session
        login(res.data.user.username || formData.username);
        navigate("/recommend");
      } else {
        setError(res.data.message || "Login failed");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto mt-5 shadow" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <h3 className="text-center mb-3">Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            className="w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
          <div className="mt-3 text-center">
            <small>
              <Link to="/forgot-password">Forgot password?</Link>
            </small>
          </div>

        </Form>

        <div className="mt-3 text-center">
          <small>
            Don’t have an account? <Link to="/register">Sign up here</Link>
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Login;
