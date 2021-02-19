import './AddFoodItemForm.css';

function AddFoodItemForm({
  handleSubmit, 
  setNewFoodItemName, 
  newFoodItemName, 
  setNewFoodItemQuantity, 
  newFoodItemQuantity, 
  newFoodItemUnit, 
  setNewFoodItemUnit
}) {
  return (
<>
    <h2>Add an Item</h2>

    <form className="inputForm" onSubmit={handleSubmit}>

    <label>Item:</label>
      <input
        className="item-input"
        type="text"
        onChange={(event) => setNewFoodItemName(event.target.value)}
        value={newFoodItemName}
      />
      <div>
      <label>Quantity:
        <input
          className="quantity-input"
          type="text"
          onChange={(event) => setNewFoodItemQuantity(event.target.value)}
          value={newFoodItemQuantity}
        />
      </label>

      <label>Unit:
        <input
        className="unit-input"
        type="text"
        onChange={(event) => setNewFoodItemUnit(event.target.value)}
        value={newFoodItemUnit}
        />
      </label>

          <button className="submitBtn" type="submit">Save</button>

      </div>
    </form>
</>   
  )
}

export default AddFoodItemForm;