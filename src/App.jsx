import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import About from './pages/About';
import Recommend from './pages/Recommend';
import Login from './auth/Login.jsx'
import Signup from './auth/Signup.jsx'
import { Container } from 'react-bootstrap';
import Footer from './components/common/Footer.jsx';
import Contact from './pages/Contact.jsx';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Container fluid className="px-4" style={{ minHeight: '90vh' }}>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/recommend" element={<Recommend />} />
                        <Route path="/register" element={<Signup />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                      
                    </Routes>
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default App;