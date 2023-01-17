import React from "react";
import Item from "./Item";
import { useState } from "react";
import items from "../data/items";

function ShoppingList() {
  const [filterBy, setFilterBy] = useState("All");

  function handleFilter(e) {
    setFilterBy(e.target.value);
  }
  const CousineFilter = () => {
    if (filterBy === "All") {
      return items.filter((item) => "All" === filterBy);
    } else {
      return items.filter((item) => item.category === filterBy);
    }
  };

  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleFilter}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" onChange={CousineFilter}>
        {CousineFilter(items).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
