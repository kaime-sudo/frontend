import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workshops from './pages/Workshops';
import BecomeAnimator from './pages/BecomeAnimator';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/evenements" element={<Workshops />} />
          <Route path="/become-animator" element={<BecomeAnimator />} />
          <Route path="/ressources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
