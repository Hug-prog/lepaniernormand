import FormLogin from "../components/auth/FormLogin";
import { ClOSEMODAL, LOGIN } from "../constants/modal";

export default function modalReducer(state = [], action) {
  switch (action.type) {
    case LOGIN:
      return { show: true, component: action.type };
    case ClOSEMODAL:
      return { show: false };
    default:
      return { show: false };
  }
}
