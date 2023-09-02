
import { signOut } from "firebase/auth";
import { auth } from "../../fireebaasdse";
import { ToastContainer, toast } from "react-toastify";
 export const logOutHandler = () => {
    signOut(auth);
    toast('Logged Out !', {
        position: toast.POSITION.BOTTOM_LEFT
    });;
  };