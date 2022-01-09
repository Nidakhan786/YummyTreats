import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect, useDispatch, useSelector } from "react-redux";

import { Modal } from "./modal";
export const Header = (count) => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(false);

  console.log(state);
  const onCountClick = () => {
    console.log("Heyyy");
    setVisibility(true);
  };
  return (
    <div className='header'>
      <h1 className='header__title'>FoodPandu</h1>
      <FaShoppingCart
        className='header__cart'
        onClick={() => setVisibility(true)}
      />
      <h1 onClick={() => onCountClick()}>{state.posts.length}</h1>
      {visible ? <Modal visible={visible} /> : <></>}
    </div>
  );
};

export default Header;
