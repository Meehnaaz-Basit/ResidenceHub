import { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const ProfileUpdate = () => {
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
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Residence - Edit Profile</title>
      </Helmet>
      <h1 className="text-center font-bold text-4xl">Edit Profile</h1>
      <div className="flex flex-col md:flex-row gap-6 h-[60vh] justify-center items-center ">
        <div className="md:basis-1/2 items-center flex flex-col space-y-4">
          <div className="w-full">
            <img
              className="w-[200px] h-[200px] rounded-full object-cover mx-auto"
              src={user?.photoURL || ""}
              alt=""
            />
          </div>
          <h1 className="font-bold text-2xl">{user?.displayName || ""}</h1>
          <p className="font-medium text-xl">{user?.email || ""}</p>
        </div>
        <div className="lg:h-[80%] lg:w-[2px] bg-orange-500"></div>
        <div className="md:basis-1/2">
          <form onSubmit={handleFormSubmit}>
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                className="input input-bordered"
                value={user?.email || ""}
                disabled
              />
            </div>
            <button
              type="submit"
              className="btn border-orange-500 bg-orange-500 text-white font-bold w-full mt-6"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
