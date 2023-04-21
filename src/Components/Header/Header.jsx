import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide "
      data-bs-ride="true"
    >
    
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/1224234335/photo/conceptual-photo-of-happy-girl-holds-shopping-packages-on-blue-background.jpg?s=612x612&w=0&k=20&c=5bgmMIx7xbO6e61nd7nDUKY44P2zLU2IsTDfZ6RyI4g="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src="https://img.freepik.com/free-photo/image-surprised-young-woman-gasping-amazed-holding-hand-chest-smiling-astonished-with-sale_1258-121612.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src="https://img.freepik.com/premium-photo/full-size-shot-beautiful-asian-woman-jumping-with-shopping-bags-smiling-happy-yellow-backgrou_1258-156642.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
