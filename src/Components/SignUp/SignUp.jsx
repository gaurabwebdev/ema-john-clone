import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../AuthProvider";

const SignUp = () => {
  const { signup } = useContext(userContext);
  const [error, setError] = useState("");
  const handleSignup = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirm.value;
    console.log(name, email, password, confirmPass);
    if (password !== confirmPass) {
      setError("Password didn't match.");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
        password
      )
    ) {
      setError(
        "Your password should be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
      );
      return;
    }
    signup(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        loggedInUser.displayName = name;
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mx-auto">
      <h2 className="text-center mt-32 text-3xl">Please Sign Up!!!</h2>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-6">
        <form
          onSubmit={handleSignup}
          className="flex flex-col justify-center items-center gap-3 py-8 px-4"
        >
          <input
            className="input input-bordered input-error w-full max-w-xs"
            placeholder="Your Name"
            type="text"
            name="name"
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
        {error && (
          <p className="text-xl text-red-500 mb-6 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
