import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout</h1>
        </Link>
      </div>
    </header>
  );
}
