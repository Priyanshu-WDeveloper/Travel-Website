import React, { useEffect, useRef } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";

const Hero = () => {
  const videoRef = useRef(null);

  // Ensure video plays as soon as it's ready
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, []);
  return (
    <div className="hero">
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg3.jpg"
        >
          <source src="/videos/travel.mp4" type="video/mp4" />
          <source src="/videos/travel.webm" type="video/webm" />
          Your Browser does not support video functionality
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <h4>Our Packages</h4>
        <h1>
          Search Your <span>Holiday</span>
        </h1>
        <div className="minsec flex">
          <div>
            <label htmlFor="destination">Search your Destination: </label>
            <input
              type="search"
              placeholder="Enter name here..."
              id="destination"
              name="destination"
            ></input>
            <span className="location-logo">
              {/* SVG/Icon here */}
              <IoLocationSharp />
            </span>
          </div>
          <div>
            <label htmlFor="date">Select your Date: </label>
            <input type="date" id="date" name="date"></input>
          </div>
          <div>
            <div className="flex" style={{ justifyContent: "space-between" }}>
              <label htmlFor="destination">Max Price: </label>
              <span>$5000</span>
            </div>
            <input type="range" id="destination" name="destination"></input>
          </div>
          <button className="btn">MORE FILTERS</button>
        </div>
        <div className="flexb icons">
          <div>
            <SlSocialFacebook />
            <SlSocialInstagram />
            <SlSocialLinkedin />
          </div>
          <div>
            <TfiMenuAlt />
            <MdOutlineDashboardCustomize />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
