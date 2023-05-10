import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function SearchRes({ Items }) {
  return (
    <>
      <div className="row">
        <h4 className="text-center p-2 bg-dark text-white ">
          Search Results : ( {Items[0].length} )
        </h4>
        {Items[0].map((data) => (
          <div
            className="col-sm-3 col-6 mb-3 d-flex justify-content-center align-items-center"
            key={data.id}
          >
            <ProductCard
              id={data.id}
              photo={data.image}
              title={data.title}
              price={data.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}
