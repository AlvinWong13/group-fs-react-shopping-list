import './ShoppingList.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingList({
  shoppingList,
  handleRemove,
  buyItem,
  resetList,
  clearList,
}) {
  console.log('shoppingList', shoppingList);

  

  return (
    <>
    <div className="listHead">
      <h3>Shopping List</h3>
        <button onClick={resetList}>Reset</button>
        <button onClick={clearList}>Clear</button>
    </div>
      <div className="listContainer">
        {shoppingList.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            handleRemove={handleRemove}
            buyItem={buyItem}
          />
        ))}
      </div>
    </>
  );
}

export default ShoppingList;
