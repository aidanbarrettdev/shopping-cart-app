import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="home-page">
      <h1> WELCOME</h1>
      <div className="home-img-container">
        <img
          src="https://cdn.pixabay.com/photo/2019/04/10/12/40/watercolor-4117017__340.png"
          alt="cloured strips of paint"
        />
        <div className="home-img-text"> Setholc | Clothes</div>
      </div>
    </div>
  );
}
