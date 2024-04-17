import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  console.log("login with google,login page", loginWithGoogle);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("login");
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);
    // logIN
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        console.log(result.user.photoURL);
        toast.success("Logged In Successfully");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("User not found. Please check your email address.");
        } else if (error.code === "auth/invalid-credential") {
          toast.error("Please check your email or password again");
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      });
  };
  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully with Google ");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleLoginWithGithub = (e) => {
    e.preventDefault();
    loginWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully with GitHub");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div>
      <Helmet>
        <title>ResidenceHub - Login </title>
      </Helmet>

      <div className=" min-h-[70%] my-8">
        <div className="hero-content flex-col ">
          <div className="text-center" data-aos="zoom-in">
            <h1 className="text-3xl font-bold text-orange-500">
              Login your account!
            </h1>
          </div>
          <div
            className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-6"
            data-aos="zoom-in"
          >
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                    <FaEye className="text-gray-600 cursor-pointer"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-gray-600 cursor-pointer"></FaEyeSlash>
                  )}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-orange-500 bg-orange-500 text-white font-bold">
                  Login
                </button>
              </div>
            </form>
            <div className="mx-8 mt-3 mb-8 h-[1px] text-center relative  bg-orange-500">
              <span className="p-2 px-4 font-semibold absolute top-5 left-50% transform -translate-x-1/2 -translate-y-full bg-white ">
                OR
              </span>
              <p className="mt-5 font-semibold">Login with Social media</p>
            </div>

            <div className="flex justify-center gap-8 p-8 pt-0 mt-10 text-sm">
              <button
                onClick={handleLoginWithGoogle}
                className="btn bg-transparent border-2 border-orange-500 hover:bg-transparent "
              >
                <img
                  className="w-5"
                  src="https://i.ibb.co/r3Z4M9J/google.png"
                  alt=""
                />{" "}
                <span className="font-bold text-orange-500">Google</span>
              </button>
              <button
                onClick={handleLoginWithGithub}
                className="btn bg-transparent border-2 border-orange-500 hover:bg-transparent "
              >
                <img
                  className="w-5"
                  src="https://i.ibb.co/jVWqChS/github.png"
                  alt=""
                />{" "}
                <span className="font-bold text-orange-500">GitHub</span>
              </button>
            </div>
            <div className="flex justify-between p-8 pt-0 text-sm">
              <div>
                <p> Don't have any account?</p>
              </div>

              <div>
                <Link
                  to="/register"
                  className="text-orange-500 underline font-bold"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
