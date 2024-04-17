import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProfileUpdate = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhotoChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    // e.preventDefault();
    try {
      await updateProfile(user, { displayName: name, photoURL: photoURL });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Updating failed");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Residence - Edit Profile</title>
      </Helmet>
      <div className="py-20">
        <h1 data-aos="zoom-in" className="text-center font-bold text-4xl pb-8">
          Edit Profile
        </h1>
        <div className="flex flex-col lg:flex-row gap-6  justify-center items-center ">
          <div
            data-aos="zoom-in"
            className="lg:basis-1/2 items-center flex flex-col space-y-4"
          >
            <div className="w-full">
              <img
                className="w-[200px] h-[200px] rounded-full object-cover mx-auto"
                src={user?.photoURL || "https://i.ibb.co/X3yrLFJ/pngegg.png"}
                alt=""
              />
            </div>
            <h1 className="font-bold text-2xl">
              User Name: <span> {user?.displayName || "No Name found!"}</span>
            </h1>
            <p className="font-medium text-xl">
              User Email: <span>{user?.email || "No Email found!"}</span>
            </p>
          </div>
          <div className="lg:h-[80%] hidden lg:block lg:w-[2px] bg-orange-500"></div>
          <div className="lg:basis-1/2 w-full">
            <form onSubmit={handleFormSubmit}>
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="3000"
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Profile URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Your profile URL"
                  name="photoURL"
                  className="input input-bordered"
                  value={photoURL}
                  onChange={handlePhotoChange}
                />
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="4000"
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  className="input input-bordered"
                  value={user?.email || "'No email found!'"}
                  disabled
                />
              </div>
              <div data-aos="fade-down" data-aos-duration="4000">
                <button
                  type="submit"
                  className="btn border-orange-500 bg-orange-500 text-white font-bold w-full mt-6"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
