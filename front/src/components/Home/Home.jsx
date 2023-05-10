import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import SearchRes from "../Header/SearchRes";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

export default function Home() {
  const Items = useSelector((state) => state.search);

  return (
    <>
      <Header />

      {Items.length ? (
        <div className="container home-search">
          <SearchRes Items={Items} />
        </div>
      ) : (
        <>
          <Content />
        </>
      )}
      <Footer />
    </>
  );
}
