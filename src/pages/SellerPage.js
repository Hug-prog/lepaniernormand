import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSellerById } from "../api/Seller";

export default function SellerPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const seller = useSelector((state) => state.sellersReducer);
  useEffect(() => {
    if (id !== undefined) {
      dispatch(getSellerById(id));
    }
  }, [id, dispatch]);
  if (seller === undefined) {
    return (
      <>
        <p>Loading ...</p>
      </>
    );
  }
  return (
    <div>
      <p>{seller.libelle}</p>
    </div>
  );
}
