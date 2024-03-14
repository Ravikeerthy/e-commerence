import React, { Component, useState } from 'react';
import './style/Cardstyle.css'

const Card = ({ item, setCartCount }) => {
    const [cartStatus, setCartStatus] = useState(true);
    const addCart = () => {
        setCartStatus(false);
        setCartCount((val) => val + 1);
    }
    const removeCart = () => {
        setCartStatus(true);
        setCartCount((val) => val - 1);
    }
    return (
        <div>
            {/* <h1> New Card</h1> */}
            <div key={item}>
                
                    <div class="col mb-5" id='alignGrid'>
                        <div class="card">
                            
                            {/* {Product Image} */}
                            <img src={item.image} class="card-img-top" id='card-Img' alt="..."></img>
                            {/* {Product Sale} */}
                            {item.sale?(<><div class="badge bg-dark text-white position-absolute" id='right'>Sale</div></>):""}
                                
                                    <div class="text-center">
                                        {/* {Product-name} */}
                                        <h5><b>{item.name}</b></h5>                                    
                                    </div>
                                    <div class="card-body p-4" id='card-bodyalign'>
                                    {/* {Product Review} */}
                                    {item.reviews?(
                                        <div class="text-warning text-center mb-2 small">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            </div> 
                                    ):
                                    <>
                                    </>}
                                        {/* {Product Price} */}
                                    <p class="card-price text-center" id='visible-price'><b>{item.price}</b></p>
                                    <p class="card-price text-center" id='deleted-price'><b>{item.originalPrice}</b></p>
                                </div>
                                {/* {Adding/Removing Function} */}
                                <div class="card-footer">
                                {cartStatus? <button class="btn btn-success" onClick={addCart}>Add to Cart</button> : <button class="btn btn-danger" onClick={removeCart}>Remove From Cart</button>}
                                </div>
                        </div>
                    </div>

                    
                
            </div>
            </div>
            );
};

            export default Card;