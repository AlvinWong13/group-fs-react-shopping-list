// import React from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

import axios from 'axios';
import AddFoodItemForm from '../AddFoodItemForm/AddFoodItemForm';
import ShoppingList from '../ShoppingList/ShoppingList';

function App() {
  // setShoppingList
  let [shoppingList, setShoppingList] = useState([]);
  let [newFoodItemName, setNewFoodItemName] = useState('');
  let [newFoodItemQuantity, setNewFoodItemQuantity] = useState('');
  let [newFoodItemUnit, setNewFoodItemUnit] = useState('');

  // on load get list
  useEffect(() => {
    getShoppingList();
  }, []);

  // function to grab shoppingList
  const getShoppingList = () => {
    axios
      .get('/list')
      .then((response) => {
        // getting data from server
        setShoppingList(response.data);
        console.log('shopping list data', shoppingList);
        console.log('shopping list response data', response.data);
       })
      .catch((err) => {
        // alert('Unable to get shopping list');
        // return the error if it fails
        console.log('error getting shopping list', err);
      });
  }; // end getShoppingList

  // Function to handle submit click
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked submit', event);
    addFoodItem();
  };

  // Function to add a food item to the list
  const addFoodItem = () => {
    console.log('name', newFoodItemName);
    console.log('quantity', newFoodItemQuantity);
    console.log('unit', newFoodItemUnit);

    axios
      .post('/list', {
        name: newFoodItemName,
        quantity: newFoodItemQuantity,
        unit: newFoodItemUnit,
      })
      .then((response) => {
        getShoppingList();
        setNewFoodItemName('');
        setNewFoodItemQuantity('');
        setNewFoodItemUnit('');
      })
      .catch((error) => {
        console.log('error posting', error);
      });
  };

  // Function to clear the shopping list
  const clearList = () => {
    console.log('clear button clicked');

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your shopping list!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your shopping list has been deleted!", {
          icon: "success",
        });

      axios
      .delete('/list')
      .then((response) => {
        getShoppingList();
      })
      .catch((error) => {
        console.log('error clearing list', error);
      });

      } else {
        swal("Your imaginary file is safe!");
      }
    });

    
  };

  // Function to reset the shopping list purchases
  
  const resetList = (event) => {
    console.log('reset all items');

    swal({
      title: "Are you sure?",
      text: "Once reset, it will remove your purchased items!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your shopping list has been reset!", {
          icon: "success",
        });
        axios
      .put('/list')
      .then((response) => {
        
        getShoppingList();
      })
      .catch((error) => {
        console.log('error clearing list IN PUT APP', error);
      });
      } else {
        swal("Your didn't reset your list!");
      }
    });
};


  const handleRemove = (event) => {
    const itemId = event.target.dataset.id;
    console.log('In handleRemove');
    
    axios
      .delete(`/list/${itemId}`)
      .then((response) => {
        console.log('Item removed', response);
        getShoppingList();
      })
      .catch((err) => {
        console.log('Unable to remove item', err);
      });
  };

  // axios.put(`/list/${itemId}, itemPurchased)
  const buyItem = (event) => {
    const itemId = event.target.dataset.id;
    const itemPurchased = event.target.dataset.purchased;
    console.log('item purchased', itemPurchased);
    console.log('testing', event.target.dataset.purchased);
    console.log('In buyItem');
    axios({
      url: `/list/${itemId}`,
      method: 'PUT',
      data: { itemPurchased },
    })
      .then((response) => {
        console.log('Item purchased', response);
        getShoppingList();
      })
      .catch((err) => {
        console.log('Unable to purchase item', err);
      });
  };

  return (
    <div className="App">
      <Header />
      <AddFoodItemForm
        handleSubmit={handleSubmit}
        setNewFoodItemName={setNewFoodItemName}
        newFoodItemName={newFoodItemName}
        setNewFoodItemQuantity={setNewFoodItemQuantity}
        newFoodItemQuantity={newFoodItemQuantity}
        newFoodItemUnit={newFoodItemUnit}
        setNewFoodItemUnit={setNewFoodItemUnit}
      />
      <main>
          <ShoppingList
            shoppingList={shoppingList}
            clearList={clearList}
            resetList={resetList}
            handleRemove={handleRemove}
            buyItem={buyItem}
          />
      </main>
    </div>
  );
}

export default App;
