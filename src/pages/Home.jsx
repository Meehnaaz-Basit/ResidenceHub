import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import HouseCard from "../components/HouseCard";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <div>
      <Helmet>
        <title>ResidenceHub - Home </title>
      </Helmet>
      <Slider></Slider>
      {/* estate */}
      <div className="py-6 my-6">
        <div
          className=" text-center lg:max-w-4xl mx-auto space-y-4"
          data-aos="fade-down"
        >
          <h1 className="font-bold text-2xl lg:text-4xl ">
            Discover Your <span className="text-orange-500">Dream Home</span>
          </h1>
          <p className="">
            Step into a world of unparalleled luxury and comfort with our
            handpicked selection of premier properties. Each listing is a
            masterpiece of design and functionality, waiting to welcome you
            home.
          </p>
        </div>
        {houses.map((house) => (
          <HouseCard key={house.id} house={house}></HouseCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
