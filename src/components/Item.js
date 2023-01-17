import React from "react";

import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const itemin = inCart ? "Items li in-cart" : "Items li";
  const btnCol = inCart ? " Items button remove" : "Items button add ";
  return (
    <li className={itemin}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnCol} onClick={() => setInCart(!inCart)}>
        {inCart ? "Remove From Cart" : "Add to Cart "}
      </button>
    </li>
  );
}

export default Item;
