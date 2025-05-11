import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Header as="h2" className="bg-primary text-white">About Cover2Cover</Card.Header>
            <Card.Body>
              <Card.Title>AI-Powered Book Discovery Platform</Card.Title>
              <Card.Text>
                Cover2Cover is an intelligent recommendation system that helps readers find their next favorite book 
                using machine learning algorithms. By analyzing book metadata, user preferences, and similarity patterns, 
                we deliver personalized suggestions tailored to individual tastes.
              </Card.Text>
              <Card.Text>
                Our system combines <strong>collaborative filtering</strong> (community preferences) and <strong>content-based filtering</strong> 
                (book attributes) to generate accurate recommendations. Whether you're a student, book club member, 
                or casual reader, we simplify your search for the perfect read.
              </Card.Text>
              <Card.Text>
                <strong>Key Features:</strong>
                <ul>
                  <li>Discover books similar to your favorites</li>
                  <li>Explore trending titles with visual analytics</li>
                  <li>Responsive design for seamless browsing</li>
                </ul>
              </Card.Text>
              <Card.Text className="text-muted">
                Built with React.js, Flask, and powered by Python's data science stack (Pandas, Scikit-learn, NLTK).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;