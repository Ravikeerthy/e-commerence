import React, { Component, useState } from "react";
import "./style/Cardstyle.css";

const Card = ({ item, setCartCount }) => {
  const [cartStatus, setCartStatus] = useState(true);
  const addCart = () => {
    setCartStatus(false);
    setCartCount((val) => val + 1);
  };
  const removeCart = () => {
    setCartStatus(true);
    setCartCount((val) => val - 1);
  };
  return (
    <div>
      {/* <h1> New Card</h1> */}
      <div key={item}>
        <div className="col mb-5" id="alignGrid">
          <div className="card">
            {/* {Product Image} */}
            <img
              src={item.image}
              className="card-img-top"
              id="card-Img"
              alt="img"
            ></img>
            {/* {Product Sale} */}
            {item.sale ? (
              <>
                <div
                  className="badge bg-dark text-white position-absolute"
                  id="right"
                >
                  Sale
                </div>
              </>
            ) : (
              ""
            )}

            <div className="text-center">
              {/* {Product-name} */}
              <h5>
                <b>{item.name}</b>
              </h5>
            </div>
            <div className="card-body p-4" id="card-bodyalign">
              {/* {Product Review} */}
              {item.reviews ? (
                <div className="text-warning text-center mb-2 small">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              ) : (
                <></>
              )}
              {/* {Product Price} */}
              <p className="card-price text-center" id="visible-price">
                <b>{item.price}</b>
              </p>
              <p className="card-price text-center" id="deleted-price">
                <b>{item.originalPrice}</b>
              </p>
            </div>
            {/* {Adding/Removing Function} */}
            <div className="card-footer text-center">
              {cartStatus ? (
                <button className="btn btn-success" onClick={addCart}>
                  Add to Cart
                </button>
              ) : (
                <button className="btn btn-danger" onClick={removeCart}>
                  Remove From Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
