import React from "react";
import "./Items.css";
import ITEMS from "../../variables/items.js";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  render() {
    console.log(this.state);
    return (
      <div id="cards">
        {ITEMS.map((item, ind) => {
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

export default Items;
