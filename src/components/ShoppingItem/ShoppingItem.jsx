import './ShoppingItem.css';

function ShoppingItem({item, handleRemove, buyItem}) { // need to pass in PUT function
  console.log('item is', item);

if (item.purchased) {
 return (
  <div key={item.id} className="itemBox">
  <h3>{item.name}</h3>
  <h3>{item.quantity} {item.unit} </h3>
  <span>Purchased</span>
</div>
)
} else {
  return (
      <div key={item.id} className="itemBox">
        <h3>{item.name} </h3>
        <h3>{item.quantity} {item.unit}</h3>
        <span>
          <button data-id={item.id} data-purchased={item.purchased} onClick={buyItem}>Buy</button>
          <button data-id={item.id} onClick={handleRemove}>Remove</button>
        </span>
      </div>
  )}
}

export default ShoppingItem;