import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Home/Footer";
import Swiper from "../ProductCard/Swiper";
import { foodItems } from "../FoodItems";
import ProductCard from "../ProductCard/ProductCard";
import { Rating } from "@mui/material";
import "../../index.css";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increamentItem,
  decreamentItem,
  totalAmount,
} from "../Store/cartSlice";

const key =
  "pk_test_51Mk3hWSHUdToPcq8gaPkRmtWGoA9uuuQ8n0QANkSmHaR3r3tAnK6xagbRi7AtiKYRFTHGjPchjyROHr3UAMQTlLf008M0ChoHK";

function Cart() {
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const items = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);

  dispatch(totalAmount(items));

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/api/v1/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        setStripeToken(res.data);
        navigate("/success");
      } catch (error) {
        console.log(error.message);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <>
      <Header />

      <div className="m-auto" style={{ paddingTop: "80px", width: "90%" }}>
        <div className="row">
          <div className="col-md-3 cart-left-sidebar">
            <div className="overflow-auto vh-100">
              <h4 className="text-center card p-2 bg-dark text-white mt-2">
                Recommended
              </h4>
              {foodItems.map((data) => (
                <div className="my-1" key={data.id}>
                  <ProductCard
                    id={data.id}
                    photo={data.image}
                    title={data.title}
                    price={data.price}
                    quantity={data.quantity}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 bg-warning">
            {items.length ? (
              <div className="order-cards">
                {items.map((item) => (
                  <div className="card my-1">
                    <div className="row ">
                      <div className="col">
                        <div className="cart-image">
                          <img
                            src={item.photo}
                            className="w-100 h-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h5 className="mt-2">{item.title}</h5>
                        <div className="py-2 " style={{ fontSize: "16px" }}>
                          <span className="">Quantity : </span>
                          <button
                            className="btn btn-primary "
                            onClick={() => dispatch(decreamentItem(item.id))}
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            className="btn btn-primary "
                            onClick={() => dispatch(increamentItem(item.id))}
                          >
                            +
                          </button>
                        </div>
                        <Rating />
                        <h5 className="bg-dark text-white text-center mt-4 p-2 rounded w-75">
                          Price : Rs. {item.price}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "85vh" }}
              >
                <img src={"/assets/images/others/emptyCartImage.png"} alt="" />
              </div>
            )}
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <p className="h5">Total Item : {items.length}</p>
              <p className="h5">Total Amount(in Rs.) : {total}</p>
              <p className="h5 text-success">Free delievery on Rs.1000</p>

              <StripeCheckout
                name="indiancuisine"
                image={"assets/images/breads/b1.jpg"}
                shippingAddress
                billingAddress
                description="my first payment"
                amount={2000}
                token={onToken}
                stripeKey={key}
              >
                <button
                  className="btn btn-danger w-100"
                  style={{ "font-size": "22px" }}
                >
                  Checkout
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center card p-2 bg-dark text-white mt-4">
        Featured Items
      </h4>
      <Swiper />
      <Footer />
    </>
  );
}

export default Cart;
