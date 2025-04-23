import React from "react";
import Hero from "./Hero";
import { data } from "../data/data";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <h2 className="section-title">
          Most Visited <span>Destinations</span>
        </h2>
        <div className="flex">
          {data.map((item) => (
            <div key={item.id} className="card">
              <figure className="img">
                <img src={item.imageUrl} alt={item.name} />
              </figure>
              <figcaption>
                <h4>{item.name}</h4>
                <p className="location">
                  <IoLocationOutline /> {item.country}
                </p>
                <div className="tags">
                  {item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <p className="price">${item.price}</p>
                <p className="description">{item.description}</p>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
