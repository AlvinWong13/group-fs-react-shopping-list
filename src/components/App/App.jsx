import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';

function App() {
  const addFoodItem = () => {
    axios
      .post('/list', {
        name: foodItemName,
        quantity: foodItemQuantity,
        unit: foodItemUnit,
      })
      .then((response) => {
        getShoppingList();
      })
      .catch((error) => {
        console.log('error posting', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
