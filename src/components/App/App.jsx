import React from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

// setShoppingList
let [shoppingList, setShoppingList] = useState([]);

// on load get list
useEffect(() => {
    getShoppingList()
}, [])

// function to grab shoppingList
const getShoppingList = () => {
    axios.get('/list')
        .then(response => {
            console.log('shopping list data', response.data);
            // getting data from server
            setShoppingList(response.data);
        })
        .catch(err => {
            alert('Unable to get shopping list');
            // return the error if it fails
            console.log('error getting shopping list', err)
        })
} // end getShoppingList

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

