import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { auth } from "../../fireebaasdse";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../Hoc/AuthProvider";
const SignIn = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const [loading, setLoading] = useState(false);
  const AlreadyLoggedIn = () => {
    navigate("/");
    toast("Already Logged In");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (value) => {
      setLoading(true);
      submitForm(value);
    },
  });
  const submitForm = (value) => {
    console.log(value.email);

    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashbord");
        console.log(user);
        setLoading(false);
        toast.success("Logged in !", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        toast(`${errorMessage}`);
        setLoading(false);
      });
  };

  return (
    <>
      {!user ? (
        <div className="container">
          <div className="signin_wrapper" style={{ margin: "100px" }}>
            <form action="" onSubmit={formik.handleSubmit}>
              <h2>Log In</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error_label">{formik.errors.email} </div>
              ) : null}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error_label">{formik.errors.password} </div>
              ) : null}

              {loading ? (
                <CircularProgress color="secondary" className="progress" />
              ) : (
                <button style={{ cursor: "pointer" }} type="submit">
                  Log In
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        AlreadyLoggedIn()
      )}
    </>
  );
};

export default SignIn;
