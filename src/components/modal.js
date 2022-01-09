import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export const Modal = (prop) => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(prop.visible);
  console.log(prop.visible);

  const renderList = product.cart.posts.map((pro) => {
    return <p key={pro.strCategoryId}>{pro.strCategory}</p>;
  });
  console.log("list", renderList);
  return product.modal.visible ? (
    <div className='modal'>
      <ul> {renderList} </ul>
    </div>
  ) : (
    <></>
  );
};
