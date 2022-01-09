import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { Header } from "../components/header";
import { useSelector } from "react-redux";
import { Modal } from "../components/modal";

const HomePage = ({ loading, posts, hasErrors, count }) => {
  const state = useSelector((state) => state.posts);
  console.log("state", state);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchPosts();
  }, []);

  const products = state.posts;
  console.log("products", products);
  return (
    <section className='section'>
      <Header />

      {products.length == 0 ? (
        <h1>Loading....</h1>
      ) : (
        <></>
        // <Menu key={products.strCategoryId} />
      )}
    </section>
  );
};
export default HomePage;
