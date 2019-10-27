import React from "react";
import "./App.css";

function App() {
  const Items = require("./Items.js"),
    itemsList = Items.items(),
    mapItemsList = itemsList.map(item => (
      <div className="cards">
        <p>Name: {item.name}</p>
        <p>Category: {item.category}</p>
        <p>Brand: {item.brand}</p>
        <p>Size: {item.size}</p>
        <p>Thickness: {item.thickness}</p>
        <p>Price: {item.sold_price}</p>
      </div>
    ));
  console.log(itemsList);
  return mapItemsList;
}

export default App;
