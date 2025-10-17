import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import About from './pages/About';
import Recommend from './pages/Recommend';
import Login from './auth/Login.jsx';
import Signup from './auth/Signup.jsx';
import { Container } from 'react-bootstrap';
import Footer from './components/common/Footer.jsx';
import Contact from './pages/Contact.jsx';
import ProtectedRoute from './auth/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Profile from './pages/Profile.jsx';
import ForgotPassword from './auth/ForgotPassword.jsx';
import WhatsNew from './pages/WhatsNew.jsx';  
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Container fluid className="px-4" style={{ minHeight: '90vh' }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />

              {/* Protected Route */}
              <Route
                path="/recommend"
                element={
                  <ProtectedRoute>
                    <Recommend />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route path="/forgot-password" element={<ForgotPassword />} />
              

              <Route path="/whats-new" element={<WhatsNew />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
