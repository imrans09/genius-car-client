import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setAuthToken(user);
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-4/5" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14">
          <h1 className="text-3xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-600"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account{" "}
            <Link className="font-bold text-orange-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
