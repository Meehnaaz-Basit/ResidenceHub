import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" min-h-[70%] mt-8">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-orange-500">
            Login your account!
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-6">
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
            <div className="form-control">
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
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn border-orange-500 bg-orange-500 text-white font-bold">
                Login
              </button>
            </div>
          </form>
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
  );
};

export default Login;
