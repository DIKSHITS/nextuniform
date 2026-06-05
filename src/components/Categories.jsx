import React from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css";

import industrial from "../asstes/industrial.png";
import hospital from "../asstes/hospital.png";
import hotel from "../asstes/hotel.png";
import corporate from "../asstes/corporate.png";

const Categories = () => {
  const categories = [
    {
     
      image: industrial,
      link: "/industrial",
    },
    {
      title: "Hospital",
      desc: "Hygiene. Comfort. Care in Every Stitch.",
      image: hospital,
      link: "/hospital",
    },
    {
     
      image: hotel,
      link: "/hotel",
    },
    {
      
      image: corporate,
      link: "/corporate",
    },
  ];

  return (
    <section className="categories">

      <div className="section-header">
        <h2>Industries We Serve</h2>

        <p>
          High-quality uniform solutions for every
          professional environment.
        </p>
      </div>

      <div className="category-grid">

        {categories.map((item, index) => (
          <Link
            to={item.link}
            className="category-card"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="overlay">
              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button>
                Explore →
              </button>
            </div>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default Categories;