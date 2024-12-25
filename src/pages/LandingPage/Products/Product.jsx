import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProduct(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (product) => {
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product Added to cart");
    // console.log(`Product ${product.title} added to cart`);
  };

  console.log(product);
  if (loading) {
    return <div className="text-4xl text-center ">Loading...</div>;
  } else {
    return (
      <>
        <Banner />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-20 p-5">
          {product.map((el) => {
            return (
              <div key={el.id} className="card bg-base-100 my-3 shadow-xl">
                {" "}
                <figure>
                  {" "}
                  <img
                    src={el.image}
                    className="w-40 h-40 object-cover"
                    alt="Product Image"
                  />{" "}
                </figure>{" "}
                <div className="card-body">
                  {" "}
                  <h2 className="card-title">Title: {el.title}</h2>{" "}
                  <p>Price: $ {el.price}</p>{" "}
                  <div className="card-actions justify-end">
                    {" "}
                    <button
                      onClick={() => handleClick(el)}
                      className="btn btn-primary"
                    >
                      {" "}
                      Add To Cart{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Product;
