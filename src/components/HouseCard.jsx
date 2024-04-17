import { GrLocation } from "react-icons/gr";
import { MdOutlineOtherHouses } from "react-icons/md";
import { Link } from "react-router-dom";
import "animate.css";
const HouseCard = ({ house }) => {
  const {
    id,
    image,
    status,
    segment_name,
    estate_title,
    location,
    area,
    facilities,
    price,
  } = house;
  const isEvenId = id % 2 === 0;
  const animationDirection = isEvenId ? "fade-right" : "fade-left";
  return (
    <section className="p-4 my-8 lg:p-8 bg-gray-50  shadow-md">
      <div className="container mx-auto space-y-12">
        <div
          data-aos={animationDirection}
          className={`flex flex-col lg:flex-row ${
            isEvenId ? "lg:flex-row-reverse " : ""
          }`}
        >
          <div
            className={`flex flex-col lg:basis1/2 space-y-4 justify-center bg-white flex-1 p-6 ${
              isEvenId ? "lg:text-right lg:items-end" : ""
            }    `}
          >
            <p className="text-teal-500 text-sm font-semibold ">
              {segment_name}
            </p>
            <h1 className="text-3xl font-bold ">{estate_title}</h1>
            <div className="md:flex gap-8 items-center">
              <div className="flex gap-2 items-center ">
                {" "}
                <GrLocation className="text-orange-500" />
                {location}
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <MdOutlineOtherHouses className="text-orange-500" />
                {area}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold underline">Facilities</p>
              {facilities.map((facility, index) => (
                <li key={index} className="list-none ">
                  {facility}
                </li>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <span className="font-bold text-xl">
                  Price: <span className="text-orange-500">{price}</span>{" "}
                </span>
              </div>
              <Link
                to={`/property/${id}`}
                className="btn btn-md bg-orange-500 text-white font-bold"
              >
                View Property
              </Link>
            </div>
          </div>
          <div className="relative md:basis-1/2">
            <img
              src={image}
              alt=""
              className=" object-cover w-full  h-full aspect-video"
            />
            <div
              className={`text-sm absolute top-0 ${
                isEvenId ? "" : "lg:right-0"
              } text-white uppercase font-bold bg-orange-500 py-2 px-4`}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseCard;
