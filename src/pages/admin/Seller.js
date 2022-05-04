import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSeller, getSellers } from "../../api/Seller";

export default function Seller() {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellersReducer);
  console.log(sellers);
  useEffect(() => {
    dispatch(getSellers());
  }, [dispatch]);
  return (
    <div>
      <p>Vendeur</p>
      <div>
        {sellers.map((seller, i) => {
          return (
            <div key={i} className="flex items-center">
              <div
                className="w-16 h-16 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(
                    ${process.env.REACT_APP_API_URL}uploads/seller/${seller.image}
                  )`,
                }}
              ></div>
              <p>{seller.libelle}</p>
              <button
                className="bg-red-600 text-white p-1.5 rounded-lg"
                onClick={() => dispatch(deleteSeller(seller.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
