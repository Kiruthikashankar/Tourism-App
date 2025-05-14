import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Malaysia Tourism</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/klcc">KLCC</a>
        <a href="/itinerary">Itinerary</a>
        <a href="/food">Food</a>
        <a href="/currency">Currency</a>
        <a href="/trending">Trending</a>
        <a href="/navigation">Navigation</a>
      </nav>
    </header>
  );
};

export default Navbar;
