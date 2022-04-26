import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-around items-center bg-main h-16 fixed w-full top-0">
      <h1>LePannierNormand</h1>
      <div>
        <input />
        <button className="bg-second">o</button>
      </div>
      <nav>
        <a href="/home">Home</a>
        <a href="/account">Account</a>
        <a href="/cart">Cart</a>
      </nav>
    </div>
  );
}
