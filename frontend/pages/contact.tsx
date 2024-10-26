// pages/contact.tsx
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="container"> {/* Container for overall layout */}
      <Navbar />
      <div className="content"> {/* Centered content only */}
        <h1>Contact us</h1>
        <p>Email: care@giva.co<br></br>Address: JP Nagar Phase 9, Bangalore, 560062</p>
      </div>
    </div>
  );
};

export default Contact;