import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");

    console.log(name, email, password, photo);

    // create user
    createUser(email, password)
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input
                type="file"
                name="picture"
                placeholder="Profile Picture"
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
              <Link to="/login" className="text-orange-500 underline font-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
