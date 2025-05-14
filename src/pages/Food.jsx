import React from "react";
import "./Food.css";

const foodData = {
  Malaysian: [
    { name: "Nasi Lemak", img: "/assets/nasi-lemak.jpg" },
    { name: "Roti Canai", img: "/assets/roti-canai.jpg" },
  ],
  Chinese: [
    { name: "Char Kway Teow", img: "/assets/char-kway-teow.jpg" },
    { name: "Hainanese Chicken Rice", img: "/assets/chicken-rice.jpg" },
  ],
  Indian: [
    { name: "Banana Leaf Rice", img: "/assets/banana-leaf.jpg" },
    { name: "Tandoori Chicken", img: "/assets/tandoori.jpg" },
  ],
};

const Food = () => {
  return (
    <div className="food-container">
      <h1>Explore Malaysian Cuisine</h1>
      {Object.entries(foodData).map(([category, items]) => (
        <div key={category} className="food-category">
          <h2>{category} Cuisine</h2>
          <div className="food-grid">
            {items.map((item, index) => (
              <div key={index} className="food-card">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
