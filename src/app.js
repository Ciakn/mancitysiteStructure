import "./css/app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import SignIn from "./Component/Signin/SignIn";
import AuthProvider from "./Component/Hoc/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBord from "./Admin/Dashbord/Dashbord";
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/dashbord" element={<DashBord />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <ToastContainer theme="light" />
    </AuthProvider>
  );
};

export default App;
