import React from "react";
import { foodItems } from "./FoodItems";
import Header from "./Header/Header";
import Footer from "../components/Home/Footer";
import SearchRes from "./Header/SearchRes";
import ProductCard from "./ProductCard/ProductCard";
import Swiper from "./ProductCard/Swiper";
import LeftSidebar from "./Sidebar/LeftSidebar";
import Carousel1 from "./ProductCard/Carousel1";
import { useSelector } from "react-redux";

export default function Products() {
  const Items = useSelector((state) => state.search);
  const filterItems = useSelector((state) => state.filterItem.filterItems);
  console.log(filterItems);
  return (
    <>
      <Header />

      <div className="container" style={{ paddingTop: "80px" }}>
        <div className="row">
          <div className="col-md-3 leftsidebar-container">
            <div className="card  ">
              <div className="card-body">
                <LeftSidebar />
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            {Items.length ? (
              <div className="container product-search">
                <SearchRes Items={Items} />
              </div>
            ) : filterItems.length ? (
              <div className="row mb-2">
                {filterItems[0].map((data) => (
                  <div
                    className="col-6 col-sm-4  products-menu-card my-1 d-flex justify-content-center align-items-center"
                    key={data.id}
                  >
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
            ) : (
              <div>
                <div className="carousel1">
                  <Carousel1 />
                </div>

                <h4 className="text-center card p-2 bg-dark text-white mt-2">
                  Popular Indian Foods
                </h4>
                <Swiper />
                <div className="row mb-2" id="products-menu">
                  <h4 className="text-center card p-2 bg-dark text-white mt-2">
                    Top Indian Foods
                  </h4>
                  {foodItems.map((data) => (
                    <div
                      className="col-6 col-sm-4  products-menu-card my-1 d-flex justify-content-center align-items-center"
                      key={data.id}
                    >
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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
