function ShoppingItem({item, handleRemove, buyItem}) { // need to pass in PUT function
  console.log('item is', item);
  return (
      <li key={item.id}>
        {item.name} 
        {item.quantity} 
        {item.unit} 
        <button data-id={item.id} data-purchased={item.purchased} onClick={buyItem}>Buy</button>
        <button data-id={item.id} onClick={handleRemove}>Remove</button>
      </li>
  );
}

export default ShoppingItem;