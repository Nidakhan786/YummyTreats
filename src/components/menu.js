import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART, getPostsFromCart } from "../actions/cartActions";

export const Post = () => {
  const product = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [value, setValue] = useState([]);
  const [isDisabled, setValueDisabled] = useState(false);
  const list = product.categories.map((product) => {
    const {
      strCategoryThumb,
      strCategory,
      strCategoryDescription,
      strCategoryId,
    } = product;
    const addtoCart = (posts, e) => {
      dispatch(getPostsFromCart(value));
      setValueDisabled(true);
    };
    return (
      <div className='Menu' key={strCategoryId}>
        <img className='img' src={strCategoryThumb} />
        <h2>{strCategory}</h2>
        <p>{strCategoryDescription.substring(0, 100)}</p>
        <button
          className='addCart'
          disabled={isDisabled}
          onClick={(e) => addtoCart(value.push(product), e.target)}>
          Add to Cart
        </button>
      </div>
    );
  });

  return <>{list}</>;
};
