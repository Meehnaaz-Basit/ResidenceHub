import { useLoaderData, useParams } from "react-router-dom";
import Location from "../../components/Location";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const PropertyDetails = () => {
  const houses = useLoaderData();
  // const { bookName } = book;
  const { id } = useParams();
  const house = houses.find((b) => b.id === parseInt(id));
  const {
    image,
    details,
    status,
    segment_name,
    estate_title,
    location,
    area,
    facilities,
    price,
    description,
  } = house;
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <div>
      <Helmet>
        <title>ResidenceHub - Details:{id} </title>
      </Helmet>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div
          className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded"
          data-aos="zoom-in"
        >
          <img
            src={image}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
            <div className="space-y-2" data-aos="fade-up">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {description}
              </a>
            </div>
            <div className="">
              <h1>{estate_title}</h1>

              <p> {details} </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* map\ */}
      <div className="my-6">
        <Location></Location>
      </div>
      {/*  */}
    </div>
  );
};

export default PropertyDetails;
