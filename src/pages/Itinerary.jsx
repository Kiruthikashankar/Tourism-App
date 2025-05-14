import React, { useState } from "react";
import "./Itinerary.css";

const Itinerary = () => {
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState(100);
  const [preference, setPreference] = useState("Nature");
  const [plan, setPlan] = useState([]);

  const generateItinerary = () => {
    const activities = {
      Nature: ["Batu Caves", "KL Forest Eco Park", "Perdana Botanical Garden"],
      Food: ["Jalan Alor", "Petaling Street Market", "Nasi Kandar Pelita"],
      Shopping: ["Pavilion KL", "Suria KLCC", "Berjaya Times Square"],
      Culture: ["National Mosque", "Islamic Arts Museum", "Thean Hou Temple"]
    };

    const selected = activities[preference];
    const dailyBudget = budget / days;
    const itinerary = [];

    for (let i = 0; i < days; i++) {
      itinerary.push({
        day: i + 1,
        activity: selected[i % selected.length],
        budget: dailyBudget.toFixed(2),
      });
    }

    setPlan(itinerary);
  };

  return (
    <div className="itinerary-container">
      <h2>AI-Powered Itinerary Planner</h2>
      <div className="form-group">
        <label>Trip Duration (Days):</label>
        <input type="number" value={days} onChange={(e) => setDays(e.target.value)} />
        
        <label>Budget (MYR):</label>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />

        <label>Preference:</label>
        <select value={preference} onChange={(e) => setPreference(e.target.value)}>
          <option>Nature</option>
          <option>Food</option>
          <option>Shopping</option>
          <option>Culture</option>
        </select>

        <button onClick={generateItinerary}>Generate Plan</button>
      </div>

      {plan.length > 0 && (
        <div className="plan-output">
          <h3>Your Plan:</h3>
          {plan.map((item) => (
            <div key={item.day} className="plan-card">
              <h4>Day {item.day}</h4>
              <p>Visit: {item.activity}</p>
              <p>Approx. Budget: RM {item.budget}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Itinerary;
