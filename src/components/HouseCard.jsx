const HouseCard = ({ house }) => {
  const { id, image, status, segment_name, estate_title, location, area } =
    house;
  const isEvenId = id % 2 === 0;

  return (
    <section className="p-4 my-8 lg:p-8 bg-gray-50  shadow-md">
      <div className="container mx-auto space-y-12">
        <div
          className={`flex flex-col lg:flex-row ${
            isEvenId ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`flex flex-col justify-center bg-white flex-1 p-6 ${
              isEvenId ? "lg:text-right" : ""
            }    `}
          >
            <p className="text-teal-500 text-sm font-semibold ">
              {segment_name}
            </p>
            <h1 className="text-2xl font-bold ">{estate_title}</h1>
            <div className="md:flex gap-6">
              <div>{location}</div>
              <div> {area} </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={image}
              alt=""
              className=" object-cover w-full  h-80 aspect-video"
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
