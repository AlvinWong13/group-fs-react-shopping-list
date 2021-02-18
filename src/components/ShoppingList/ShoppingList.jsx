function ShoppingList({ shoppingList, clearList, resetList }) {
  console.log('shoppingList', shoppingList);
  return (
    <>
      <h3>Shopping List</h3>
      <div>
        <button onClick={resetList}>Reset</button>
        <button onClick={clearList}>Clear</button>

        {shoppingList.map((item) => {
          return (
            <li key={item.id}>
              {item.name} {item.quantity} {item.unit}
              <button>Buy</button>
              <button>Remove</button>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default ShoppingList;
