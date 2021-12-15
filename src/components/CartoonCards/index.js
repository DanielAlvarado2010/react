import React from "react";

function CartoonCards({ name, status, species, image }) {
  return (
    <div>
      <img className="card-item" src={image} />
      <p className="card-item">Name: {name}</p>
      <p className="card-item">Status: {status}</p>
      <p className="card-item">Species: {species}</p>
    </div>
  );
}
export default CartoonCards;
