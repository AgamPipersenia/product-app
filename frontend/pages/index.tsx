import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import 'swiper/swiper-bundle.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await axios.get('http://localhost:5000/api/products');
      } catch {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container"> {/* Container for overall layout */}
      <Navbar />
      <div className="content"> {/* Centered content only */}
        <h1>Welcome to GIVA Mart</h1>
        <p>Your one-stop shop for all things amazing!</p>
        {loading && <p>Loading content...</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Home;
