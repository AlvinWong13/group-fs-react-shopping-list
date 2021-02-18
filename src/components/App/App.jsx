// import React from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList';


function App() {

// setShoppingList
const [shoppingList, setShoppingList] = useState([]);

// on load get list
useEffect(() => {
    getShoppingList()
}, []);

// function to grab shoppingList
const getShoppingList = () => {
    axios.get('/list')
        .then(response => {
            // getting data from server
            setShoppingList(response.data);
            console.log('shopping list data', shoppingList);
            console.log('shopping list response data', response.data)
            

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
        <ul>
        <ShoppingList 
          shoppingList={shoppingList}/>
        </ul> 
      </main>
    </div>
  );

}

export default App;

