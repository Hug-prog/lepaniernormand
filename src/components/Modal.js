import React from "react";
import { useDispatch } from "react-redux";
import { ClOSEMODAL, LOGIN, REGISTER } from "../constants/modal";
import FormLogin from "../components/auth/FormLogin";
import FormRegister from "./auth/FormRegister";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
        return <FormLogin />;
      case REGISTER:
        return <FormRegister />;
      default:
        return "";
    }
  };
  return (
    <div
      className={`h-fit lg:w-1/2 sm:w-10/12 w-11/12 bg-white z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${modalShow(
        props.state.show
      )}`}
    >
      <button
        className=" float-right m-5"
        onClick={() => dispatch({ type: ClOSEMODAL })}
      >
        <AiOutlineCloseCircle className="text-2xl lg:text-3xl hover:text-red-800" />
      </button>
      {displayComponent(props.state.component)}
    </div>
  );
}
