function ShoppingList({ shoppingList, clearList }) {
  console.log('shoppingList', shoppingList);
  return (
    <>
      <h3>Shopping List</h3>
      <div>
        <button>Reset</button>
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
