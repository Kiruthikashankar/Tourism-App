import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import bgImage from "../assets/kl-bg.jpg"; // Ensure this path is correct

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/klcc");
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <h1 className="home-title">
  <span style={{ color: '#fff' }}>Welcome to </span>
  <span style={{ color: '#FFD700' }}>Malaysia </span>
  <span style={{ color: '#fff' }}>Tourism at ease</span>
</h1>


      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
    <p> Plan your trip. Discover hidden gems. Enjoy amazing food.<span style={{ color: '#FFD700' }}></span></p>
       
      </motion.p>

      <motion.button
        className="explore-button"
        onClick={handleExploreClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Start Exploring
      </motion.button>
    </div>
  );
};

export default Home;
