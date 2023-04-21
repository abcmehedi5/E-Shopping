import React from "react";
const CategoryDetails = ({ category }) => {
    const{description, name, image ,} = category
  return (
    <div className="col-md-3">
      <div className="card catergory-card">
        <div className="card-body text-center">
         <img className="img img-fluid" src={image} alt="icon" />
         <hr />
          <h5 className="card-title fw-bold mt-3">{name}</h5>
          <p className="card-text text-secondary">{description}</p>
        </div>
      </div>

    </div>
  );
};

export default CategoryDetails;
