import { useState } from "react";
import PropTypes from "prop-types";

const ItemForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) return;

    onAddItem({ name, category });
    setName("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
     
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
     
      <button type="submit">Add to List</button>
    </form>
  );
};

ItemForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default ItemForm;