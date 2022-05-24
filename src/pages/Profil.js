import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../api/User";

export default function Profil() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  if (user === undefined) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <p>Bonjour {user.firstname} !</p>
    </div>
  );
}
