import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/books', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        return;
      }

      const data = await response.json();
      
      if (data.status === 'success') {
        setBooks(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Book Dashboard</h2>
      <div className="row">
        {books.slice(0, 12).map(book => (
          <div key={book._id || book.title} className="col-md-3 mb-4">
            <div className="card h-100">
              <img 
                src={book.image_url || '/placeholder-book.jpg'} 
                className="card-img-top"
                alt={book.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">By {book.author}</p>
                <p className="card-text">
                  <small className="text-muted">
                    ⭐ {book.rating} ({book.votes} votes)
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;