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
        <a href="#">Home</a>
        <a href="#">Account</a>
        <a href="#">Cart</a>
      </nav>
    </div>
  );
}
