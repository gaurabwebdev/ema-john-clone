import React, { useContext, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [showpass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(userContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        form.reset();
        navigate(from, { replace: true });

        console.log(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="mx-auto">
      <h2 className="text-center mt-32 text-3xl">Login!!!</h2>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-6">
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center gap-3 py-8 px-4"
        >
          <input
            className="input input-bordered input-error w-full max-w-xs"
            placeholder="Your Email"
            type="email"
            name="email"
            required
          />
          <div className="max-w-xs w-full relative">
            <input
              className="input input-bordered input-error w-full"
              placeholder="Your Password"
              type={showpass ? "text" : "password"}
              name="password"
              required
            />
            <div
              className="absolute top-1/4 right-2"
              onClick={() => setShowPass(!showpass)}
            >
              {!showpass ? (
                <EyeSlashIcon className="w-6 h-6 text-red-400" />
              ) : (
                <EyeIcon className="w-6 h-6 text-red-400" />
              )}
            </div>
          </div>
          <input className="btn btn-primary px-5" type="submit" value="login" />
        </form>
        <p className="text-xl mb-6 text-center">
          Don't have account? <Link to={"/signup"}>Create One</Link>
        </p>
        <img
          className="cursor-pointer mx-auto mb-6 w-60"
          src="https://i.ibb.co/Rp9CSQy/google-btn.png"
          alt=""
        />
        {error && (
          <p className="text-xl text-red-500 mb-6 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
