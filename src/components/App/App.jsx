// import React from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddFoodItemForm from '../AddFoodItemForm/AddFoodItemForm'
import ShoppingList from '../ShoppingList/ShoppingList';



function App() {

// setShoppingList

let [shoppingList, setShoppingList] = useState([]);
let [newFoodItemName, setNewFoodItemName ] = useState("")
let [newFoodItemQuantity, setNewFoodItemQuantity] = useState("")
let [newFoodItemUnit, setNewFoodItemUnit] = useState("")


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

const handleSubmit = (event) => {
  event.preventDefault();
  

  console.log('clicked submit', event)
  addFoodItem();
}

const addFoodItem = () => {
  console.log('name', newFoodItemName);
  console.log('quantity', newFoodItemQuantity);
  console.log('unit', newFoodItemUnit);

    axios
      .post('/list', {
        name: newFoodItemName,
        quantity: newFoodItemQuantity,
        unit: newFoodItemUnit
      })
      .then((response) => {
        getShoppingList();
      })
      .catch((error) => {
        console.log('error posting', error);
      });
  };

  const handleRemove = (event) => {
    const itemId = event.target.dataset.id
    console.log('In handleRemove',)
    axios.delete(`/list/${itemId}`)
    .then(response => {
      console.log('Item removed', response);
      getShoppingList();
    })
    .catch(err => {
      console.log('Unable to remove item',err);
    })
  }

  return (
    <div className="App">
      <Header />
      <AddFoodItemForm 
        handleSubmit={handleSubmit} 
        setNewFoodItemName={setNewFoodItemName} 
        newFoodItemName={newFoodItemName} 
        setNewFoodItemQuantity ={setNewFoodItemQuantity}
        newFoodItemQuantity={newFoodItemQuantity}
        newFoodItemUnit={newFoodItemUnit}
        setNewFoodItemUnit={setNewFoodItemUnit}/>
      <main>
        <ul>
        <ShoppingList 
          shoppingList={shoppingList}
          handleRemove={handleRemove}/>
        </ul> 
      </main>
    </div>
  );

}

export default App;

