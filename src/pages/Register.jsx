import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    console.log(name, email, password, photoURL);

    // create user
    createUser(email, password, photoURL)
      .then((result) => {
        console.log(result.user);
        // navigate after register
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>ResidentialHub - Register </title>
      </Helmet>
      <div className=" min-h-[70%] mt-8">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-500">
              Please Register!
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-6">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute right-6 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-600"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-gray-600"></FaEyeSlash>
                  )}
                </span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Picture Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn border-orange-500 bg-orange-500 text-white font-bold">
                  Register
                </button>
              </div>
            </form>
            <div className="flex justify-between p-8 pt-0 text-sm">
              <div>
                <p> Already have an account?</p>
              </div>

              <div>
                <Link
                  to="/login"
                  className="text-orange-500 underline font-bold"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
