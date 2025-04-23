import React, { useEffect, useRef, useState } from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebookSquare,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const videoRef = useRef(null);

  // Ensure video plays as soon as it's ready
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle autoplay restrictions
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the newsletter subscription
      console.log(`Subscribing email: ${email}`);
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {/* Video Background */}
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg3.jpg" // Fallback image while video loads
        >
          {/* Add multiple sources for browser compatibility */}
          <source src="/videos/travel.mp4" type="video/mp4" />
          <source src="/videos/travel.webm" type="video/webm" />
          {/* Fallback text if video not supported */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text remains readable */}
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <div className="newsletter-container flexb">
          <div>
            <h4>KEEP IN TOUCH</h4>
            <h2>Travel with us</h2>
          </div>
          <form onSubmit={handleSubmit} className="flexb">
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn">
              SEND <FiSend />
            </button>
          </form>
        </div>

        <div className="footer-grid">
          <div className="logo-section">
            <div className="logo-container">
              <MdOutlineTravelExplore className="logo" />
              <h2>Travel</h2>
            </div>
            <p>
              Discover the world with us. We provide unforgettable travel
              experiences with personalized service, expert guidance, and
              exceptional value for adventure seekers and relaxation enthusiasts
              alike.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagramSquare />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookSquare />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h2>OUR AGENCY</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
              <li>
                <a href="#">Agency</a>
              </li>
              <li>
                <a href="#">Tourism</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h2>PARTNERS</h2>
            <ul>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">Rental Car</a>
              </li>
              <li>
                <a href="#">Hostel World</a>
              </li>
              <li>
                <a href="#">Trivago</a>
              </li>
              <li>
                <a href="#">Trip Advisor</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h2>POPULAR DESTINATIONS</h2>
            <ul>
              <li>
                <a href="#">London</a>
              </li>
              <li>
                <a href="#">California</a>
              </li>
              <li>
                <a href="#">Indonesia</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">Oceania</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>© {currentYear} Travel. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
