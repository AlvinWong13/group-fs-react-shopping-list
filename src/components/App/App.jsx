import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';



function App() {

// setShoppingList
let [shoppingList, setShoppingList] = useState([]);

// on load get list
useEffect(() => {
    getShoppingList()
}, [])

const getShoppingList = () => {
    axios.get('/list')
        .then(response => {
            console.log('shopping list data', response.data);
            setShoppingList(response.data);
        })
        .catch(err => {
            alert('Unable to get shopping list');
            console.log('error getting shopping list', err)
        })
}

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
