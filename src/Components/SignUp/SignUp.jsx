import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-center mt-32 text-3xl">Please Sign Up!!!</h2>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-6">
        <form className="flex flex-col justify-center items-center gap-3 py-8 px-4">
          <input
            className="input input-bordered input-error w-full max-w-xs"
            placeholder="Your Name"
            type="text"
            name="text"
            required
          />
          <input
            className="input input-bordered input-error w-full max-w-xs"
            placeholder="Your Email"
            type="email"
            name="email"
            required
          />
          <input
            className="input input-bordered input-error w-full max-w-xs"
            placeholder="Your Password"
            type="password"
            name="password"
            required
          />
          <input
            className="input input-bordered input-error w-full max-w-xs"
            placeholder="Confirm Your Password"
            type="password"
            name="confirm"
            required
          />
          <input
            className="btn btn-primary px-5"
            type="submit"
            value="signup"
          />
        </form>
        <p className="text-xl mb-6 text-center">
          Already Have An Account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
