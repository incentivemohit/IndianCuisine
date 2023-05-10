import React, { createContext } from "react";
import { useState } from "react";
import { foodItems } from "./components/FoodItems";

//fetching different categories
const curries = foodItems.filter((item) => item.category == "curries");
const rice = foodItems.filter((item) => item.category == "rice");
const breads = foodItems.filter((item) => item.category == "bread");

const ProductContext = createContext({});

const Context = ({ children }) => {
  const [Curries, setCurries] = useState(curries);
  const [Rice, setRice] = useState(rice);
  const [Bread, setBread] = useState(breads);
  const [counter, setCounter] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [res, setRes] = useState([]);

  var cartData = [...orderList];

  //adding products into cart
  const addToCart = (id) => {
    var itemObj = foodItems.find((item) => item.id == id);
    var index = cartData.indexOf(itemObj);

    if (index === -1) {
      cartData.push(itemObj);
      setCounter(counter + 1);
      setOrderList(cartData);
    } else if (index > -1) {
      alert("Already Added to cart!");
    }
  };

  //get total amount of selected products
  function totalAmount() {
    var sum = 0;
    cartData.map((item) => {
      sum += item.price;
    });

    setTotal(sum);
  }

  var currPrice = 0;
  //increase quantity of particular product
  function increamentItem(id) {
    var incObj = cartData.find((element) => element.id == id);
    incObj.quantity += 1;

    currPrice =
      (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
      (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;

    setOrderList(cartData);
  }

  //decrease quantity of particular product
  function decreamentItem(id) {
    let decObj = cartData.find((element) => element.id == id);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
      currPrice =
        (decObj.price * decObj.quantity -
          decObj.price * (decObj.quantity - 1)) /
        decObj.quantity;
      decObj.quantity -= 1;
      decObj.price = currPrice * decObj.quantity;
      setOrderList(cartData);
    } else {
      cartData.pop(ind);
      setCounter(counter - 1);
      setOrderList(cartData);
    }
  }

  //delete selected product
  function deleteItem(id) {
    let itemObj = cartData.find((element) => element.id == id);
    cartData.pop(itemObj);
    setOrderList(cartData);
  }

  //search products
  var searchArray = [];
  function searchItems(inputData) {
    var searchedData = foodItems.filter((item) => {
      return item.title.toLocaleLowerCase().includes(inputData);
    });
    setSearchData(searchedData);
    searchArray = [...searchedData];
  }

  const handleFilter = (n) => {
    if (n == 1) {
      const results = foodItems.filter((item) => item.price < 150);
      setRes(results);
    } else if (n == 2) {
      const results = foodItems.filter(
        (item) => item.price < 300 && item.price > 200
      );
      setRes(results);
    } else if (n == 3) {
      const results = foodItems.filter((item) => item.price > 300);
      setRes(results);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        handleFilter,
        res,
        userInfo,
        Curries,
        Rice,
        Bread,

        searchData,
        searchItems: searchItems,
        totalAmount: totalAmount,
        orderList,
        counter,
        total,

        increamentItem: increamentItem,
        decreamentItem: decreamentItem,
        deleteItem: deleteItem,
        addToCart: addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, Context };
