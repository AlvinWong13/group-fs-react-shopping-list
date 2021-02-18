function ShoppingItem({item, handleRemove}) {
  console.log('item is', item);
  return (
      <li key={item.id}>
        {item.name} 
        {item.quantity} 
        {item.unit}
        <button>Buy</button>
        <button data-id={item.id} onClick={handleRemove}>Remove</button>
      </li>
  );
}

export default ShoppingItem;