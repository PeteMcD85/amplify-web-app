import React from "react";
import "./App.css";
import Items from "./Items.js";

class App extends React.Component {
  // constructor() {}

  render() {
    return (
      <div id="cards">
        {Items.map((item, ind) => {
          return (
            <div className="card" key={ind}>
              <p>Name: {item.name}</p>
              <p>Category: {item.category}</p>
              <p>Brand: {item.brand}</p>
              <p>Size: {item.size}</p>
              <p>Thickness: {item.thickness}</p>
              <p>Price: ${Number(item.sold_price).toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
