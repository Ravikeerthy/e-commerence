import React, { useState } from 'react';
import Nav from './componenets/Nav';
import Header from './componenets/Header';
import ProductCard from './componenets/ProductCard';
import Footer from './componenets/Footer';
import Card from './componenets/Card';

const App = () => {
  const [status, setStatus] = useState(true);
  const [cartCount, setCartCount] = useState(0);
   
  let data = [
    {
      name: " Moisturizer",
      image: "data:image/jpeg;base64,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",
      price: "$40-$60",
      sale: false,
      originalPrice: "$50=$90",
      original: false,
      reviews: false
    },
    {
      name: "Primer",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products2.jpg",
      price: "$50-80",
      sale: true,
      originalPrice: "$50-$100",
      original: true,
      reviews: false
    },
    {
      name: "Foundation",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products3.jpg",
      price: "$50-$80",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true
    },
    {
      name: "Concealer",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products4.jpg",
      price: "$50-$90",
      sale: false,
      originalPrice: "$70-$110",
      original: true,
      reviews: false
    },
    {
      name: "Face powder",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products5.jpg",
      price: "$70",
      sale: true,
      originalPrice: "",
      original: false,
      reviews: true
    },
    {
      name: " Blush, Cheek Coloring",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products6.jpg",
      price: "$50-$80",
      sale: true,
      originalPrice: "",
      original: false,
      reviews: false
    },
    {
      name: "Lipstick",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products7.jpg",
      price: "$50-$80",

      sale: false,
      originalPrice: "",
      original: false,
      reviews: true
    },
    {
      name: "Lip balm",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products8.jpg",
      price: "$50",

      sale: true,
      originalPrice: "$75",
      original: true,
      reviews: false
    },
    {
      name: " Lip gloss",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products9.jpg",
      price: "$50-$80",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true
    },
    {
      name: "Mascara",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products10.jpg",
      price: "$80",
      sale: false,
      originalPrice: "$100",
      original: true,
      reviews: false
    },
    {
      name: "Highlighter",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products12.jpg",
      price: "$50-$80",
      sale: true,
      originalPrice: "",
      original: false,
      reviews: true
    },
    {
      name: "Eye shadow",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products14.jpg",
      price: "$50-$80",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true
    },
    {
      name: "Setting Spray/Powder",
      image: "https://static.javatpoint.com/list/images/list-of-cosmetic-products13.jpg",
      price: "$50",
      sale: true,
      originalPrice: "",
      original: true,
      reviews: true
    }];
   const [products, setProducts] = useState(data);

  return (
    <div>
      <Nav cartCount={cartCount} />
      <Header />
      {status?<ProductCard setCartCount = { setCartCount } cartCount={cartCount} setProducts={setProducts} products={products}/>:""}
      
      <Footer />
    </div>
  );
};

export default App;