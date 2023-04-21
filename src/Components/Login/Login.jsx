import React, { useContext, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {
  sweetError,
  sweetSuccess,
} from "../../utilities/SweetAlert/SweetAlert";
const Login = () => {
  const [loading, setLoading] = useState(false);
  // authentication context
  const { loginUser, googleSingin, forgotPassword } = useContext(AuthContext);

  // private router info
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";
  console.log(from);
  // handle login submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    loginUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        sweetSuccess("Login Successfull!!");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        sweetError(errorMessage);
      });
  };

  // handle google singin
  const handleGoogleSignIn = () => {
    googleSingin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetError(errorMessage);
      });
  };

  // forgot password useRef
  const emailValue = useRef(null);
  const forgotEmail = emailValue.current?.value;
  const passwordForgot = () => {
    forgotPassword(forgotEmail)
      .then(() => {
        sweetSuccess("check your email and reset your password");
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetError(errorMessage);
      });
  };

  return (
    <div className="m-4">
      <div className="register-container">
        <form onSubmit={handleSubmit} className="w-100">
          <h4 className="text-center text-primary mb-4">E-Shopping Login</h4>
          <div className="mb-3">
            <span className="input-group-text">
              <AiOutlineMail />
              <input
                type="email"
                name="email"
                className=" form-control"
                placeholder="email"
                ref={emailValue}
              />
            </span>
          </div>
          <div>
            <span className="input-group-text">
              <RiLockPasswordLine />
              <input
                type="password"
                name="password"
                className=" form-control"
                placeholder="password"
              />
            </span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <small>
              New to E-shopping?
              <Link to={"/register"}>
                <small> Create New Account</small>
              </Link>
            </small>
            <p
              onClick={() => {
                passwordForgot();
              }}
            >
              <Link>
                <small>Forgot password</small>
              </Link>
            </p>
          </div>

          {/* loading  */}
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <button type="submit" className="w-100 btn btn-danger mt-3">
            Login
          </button>
        </form>
        <button
          onClick={() => handleGoogleSignIn()}
          className="w-100  mt-2 google-login "
        >
          <FcGoogle size={25} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
