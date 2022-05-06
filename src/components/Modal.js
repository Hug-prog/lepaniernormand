import React from "react";
import { useDispatch } from "react-redux";
import { ClOSEMODAL, LOGIN } from "../constants/modal";
import FormLogin from "../components/auth/FormLogin";
import { getCurrentUser } from "../api/Auth";

export default function Modal(props) {
  const dispatch = useDispatch();
  const modalShow = (show) => {
    if (show) {
      return "";
    } else {
      return "hidden";
    }
  };
  const displayComponent = (component) => {
    switch (component) {
      case LOGIN:
        console.log(component);
        return <FormLogin />;
      default:
        return <FormLogin />;
    }
  };
  return (
    <div
      className={`h-fit lg:w-1/2 sm:w-10/12 w-11/12 bg-white z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${modalShow(
        props.state.show
      )}`}
    >
      <button onClick={() => dispatch({ type: ClOSEMODAL })}>X</button>
      {displayComponent(props.component)}
      <button onClick={() => getCurrentUser()}>try</button>
    </div>
  );
}
