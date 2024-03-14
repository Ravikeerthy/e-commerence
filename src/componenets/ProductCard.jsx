import React from 'react';
import Card from './Card';

const ProductCard = ({ setCartCount, cartCount, setProducts, products }) => {
    return (
        <div>
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                    {products.map((item, index) => {
                        return (
                            <>
                                <Card item={item} setCartCount={setCartCount} />
                            </>
                        )
                    })}
                </div>

            </div>

        </div>
    );
};

export default ProductCard;