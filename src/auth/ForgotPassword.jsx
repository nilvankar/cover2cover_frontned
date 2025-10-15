import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button, Alert } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/auth/forgot_password",
        { email }
      );
      if (res.data.status === "success") setMessage(res.data.message);
      else setError(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto mt-5 shadow" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <h3 className="text-center mb-3">Forgot Password</h3>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ForgotPassword;
