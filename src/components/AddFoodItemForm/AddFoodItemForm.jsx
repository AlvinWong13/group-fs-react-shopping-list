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

    <form onSubmit={handleSubmit}>

    <label>Item:
      <input
        type="text"
        onChange={(event) => setNewFoodItemName(event.target.value)}
        value={newFoodItemName}
      />
      </label>

      <label>Quantity:
        <input
          type="text"
          onChange={(event) => setNewFoodItemQuantity(event.target.value)}
          value={newFoodItemQuantity}
        />
      </label>

      <label>Unit:
        <input
        type="text"
        onChange={(event) => setNewFoodItemUnit(event.target.value)}
        value={newFoodItemUnit}
        />
      </label>
      
      <button type="submit">Save</button>


    </form>
</>   
  )
}

export default AddFoodItemForm;