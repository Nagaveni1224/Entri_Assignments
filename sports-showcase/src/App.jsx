import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const players = [
    {
      id: 1,
      name: "Virat Kohli",
      sport: "Cricket",
      image:
        "https://th.bing.com/th/id/OIP.bhqOfd0sUlKvenjxhrkz7wHaEq?w=290&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      available: true,
    },

    {
      id: 2,
      name: "Lionel Messi",
      sport: "Football",
      image:
        "https://assets.goal.com/images/v3/bltd58c4d60ecd9275e/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png",
      available: true,
    },

    {
      id: 3,
      name: "Roger Federer",
      sport: "Tennis",
      image:
        "https://cdn.theathletic.com/app/uploads/2022/09/16080751/Roger-Federer-Olympics-scaled.jpg",
      available: false,
    },
  ];

  return (
    <div className="container">
      <h1>🏆 Sports Legends Collection</h1>

      <div className="cards">
        {players.map((player) => (
          <ProductCard
            key={player.id}
            name={player.name}
            sport={player.sport}
            image={player.image}
            available={player.available}
          />
        ))}
      </div>
    </div>
  );
}

export default App;