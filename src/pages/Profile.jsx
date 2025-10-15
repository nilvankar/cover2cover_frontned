import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner, Alert } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/auth/profile", { withCredentials: true })
      .then((res) => {
        if (res.data.status === "success") setUser(res.data.user);
      })
      .catch((err) => setError("Failed to load profile"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner animation="border" className="mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Card className="mx-auto mt-5 shadow" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <h3 className="text-center mb-3">User Profile</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </Card.Body>
    </Card>
  );
};

export default Profile;
