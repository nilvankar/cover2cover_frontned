import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Form, Spinner } from "react-bootstrap";

const API_BASE = "http://127.0.0.1:5000/api/books";

const WhatsNew = () => {
  const [authors, setAuthors] = useState([]);
  const [titles, setTitles] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const [loading, setLoading] = useState(false);

  // 1️⃣ Load authors on mount
  useEffect(() => {
    axios
      .get(`${API_BASE}/authors`)
      .then((res) => setAuthors(res.data.authors || []))
      .catch(() => setAuthors([]));
  }, []);

  // 2️⃣ When author changes, fetch titles
  useEffect(() => {
    if (!selectedAuthor) return;
    setTitles([]);
    setLanguages([]);
    setBooks([]);
    setSelectedTitle("");
    setSelectedLang("");

    setLoading(true);
    axios
      .get(`${API_BASE}/titles?author=${encodeURIComponent(selectedAuthor)}`)
      .then((res) => setTitles(res.data.titles || []))
      .catch(() => setTitles([]))
      .finally(() => setLoading(false));
  }, [selectedAuthor]);

  // 3️⃣ When title changes, fetch languages
  useEffect(() => {
    if (!selectedAuthor || !selectedTitle) return;
    setLanguages([]);
    setBooks([]);
    setSelectedLang("");

    setLoading(true);
    axios
      .get(
        `${API_BASE}/languages?author=${encodeURIComponent(
          selectedAuthor
        )}&title=${encodeURIComponent(selectedTitle)}`
      )
      .then((res) => setLanguages(res.data.languages || []))
      .catch(() => setLanguages([]))
      .finally(() => setLoading(false));
  }, [selectedTitle]);

  // 4️⃣ When language selected, fetch matching book(s)
  useEffect(() => {
    if (!selectedAuthor || !selectedTitle || !selectedLang) return;

    setLoading(true);
    axios
      .get(
        `${API_BASE}/filter?author=${encodeURIComponent(
          selectedAuthor
        )}&title=${encodeURIComponent(selectedTitle)}&lang=${selectedLang}`
      )
      .then((res) => setBooks(res.data.books || []))
      .catch(() => setBooks([]))
      .finally(() => setLoading(false));
  }, [selectedLang]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📚 Explore Books by Language</h2>

      {/* Author Dropdown */}
      <Form.Select
        className="mb-3 w-50 mx-auto"
        value={selectedAuthor}
        onChange={(e) => setSelectedAuthor(e.target.value)}
      >
        <option value="">Select Author</option>
        {authors.map((a, i) => (
          <option key={i} value={a}>
            {a}
          </option>
        ))}
      </Form.Select>

      {/* Titles Dropdown */}
      {selectedAuthor && (
        <Form.Select
          className="mb-3 w-50 mx-auto"
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
        >
          <option value="">Select Book Title</option>
          {titles.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </Form.Select>
      )}

      {/* Languages Dropdown */}
      {selectedTitle && (
        <Form.Select
          className="mb-3 w-50 mx-auto"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option value="">Select Language</option>
          {languages.map((l, i) => (
            <option key={i} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </Form.Select>
      )}

      {/* Loader */}
      {loading && (
        <div className="text-center mt-4">
          <Spinner animation="border" />
          <p>Loading...</p>
        </div>
      )}

      {/* Book Results */}
      {!loading && books.length > 0 && (
        <div className="row mt-4">
          {books.map((book, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={book.thumbnail || "https://via.placeholder.com/150"}
                  alt={book.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {book.authors?.join(", ") || "Unknown Author"}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "0.9rem" }}>
                    {book.description
                      ? book.description.slice(0, 100)
                      : "No description available."}
                    ...
                  </Card.Text>
                  <small className="text-muted">
                    {book.language?.toUpperCase()} | {book.publishedDate}
                  </small>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhatsNew;
