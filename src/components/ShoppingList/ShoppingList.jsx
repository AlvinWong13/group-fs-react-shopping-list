import ShoppingItem from '../ShoppingItem/ShoppingItem'

function ShoppingList({shoppingList, handleRemove}) {
  console.log('shoppingList', shoppingList);
  return (
  <>  
    <h3>Shopping List</h3>
    <div>
      <button>Reset</button><button>Clear</button>
      
        {shoppingList.map(item => (
          <ShoppingItem
          key={item.id}
          item={item}
          handleRemove={handleRemove}
          />
  ))}    
    </div>
  </>  
  );
}

export default ShoppingList;