// IndexPage.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './IndexPage.css'
import { useState } from 'react';
const restaurantsData = [
  {
    name: 'Burger King',
    popularDish: 'Burger',
    photoUrl: 'https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg',
  },
  {
    name: 'Karachi',
    popularDish: 'Fruit Biscuits',
    photoUrl: 'https://w0.peakpx.com/wallpaper/467/393/HD-wallpaper-food-dessert-still-life.jpg',
  },
  {
    name: 'Shadab',
    popularDish: 'Haleem',
    photoUrl: 'https://www.shutterstock.com/shutterstock/videos/1086192224/thumb/7.jpg?ip=x480',
  },
  {
    name:'Bawarchi',
    popularDish:'Butter Chicken , Biryani',
    photoUrl: 'https://t3.ftcdn.net/jpg/02/29/41/94/360_F_229419443_fAGXYdJrvEXXqoDnF99bQ9WS1bsDrEbN.jpg',
  }
  // Add more restaurants as needed
];

const IndexPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleCardClick = (index) => {
    // Toggle the selected restaurant state
    setSelectedRestaurant(selectedRestaurant === index ? null : index);
  };

  return (
    <div>
      <div>
        <div className="restaurants-container">
          {restaurantsData.map((restaurant, index) => (
            <div key={index} className="restaurant-card" onClick={() => handleCardClick(index)}>
              <img src={restaurant.photoUrl} alt={restaurant.name} className="restaurant-image" />
              <div className="restaurant-details">
                <h3>{restaurant.name}</h3>
                <p>Popular Dish: {restaurant.popularDish}</p>
              </div>
              {selectedRestaurant === index && (
                <div className="waste-food-info">
                  {/* Display information about available waste food for the selected restaurant */}
                  {/* You can add your waste food information here */}
                  <p>Available Waste Food:</p>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    {/* Add more items as needed */}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;