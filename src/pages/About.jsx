import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <div>
      <Helmet>
        <title>ResidenceHub - About </title>
      </Helmet>
      <div>
        <div
          data-aos="zoom-in"
          className="hero min-h-[90vh] rounded-2xl"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/mvcrJGs/pexels-binyamin-mellish-1396132.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70 rounded-2xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl text-white">
              <h1 className="mb-5 text-5xl font-bold">ABOUT US</h1>
              <p className="mb-5">
                Welcome to ResidenceHub, your premier destination for finding
                your dream home. At ResidenceHub, we understand that buying or
                renting a home is more than just a transaction; it's about
                finding the perfect place to build your life and make memories.
                With our extensive listings and personalized service, we strive
                to make the process of finding your ideal home as smooth and
                enjoyable as possible.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <section className="p-4 lg:p-8 text-gray-800 my-10">
          <div className="container mx-auto space-y-12">
            <div
              className="flex flex-col overflow-hidden items-center lg:flex-row-reverse gap-6"
              data-aos="fade-down"
            >
              <img
                src="https://i.ibb.co/945Nztp/back-view-family-hugging-admiring-their-home.jpg"
                alt=""
                className="h-80 object-cover  aspect-video rounded-md"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold text-orange-500 ">
                  Our Mission
                </h3>
                <p className="my-6 text-gray-600">
                  At ResidenceHub, our mission is to connect individuals and
                  families with their perfect residential properties, providing
                  exceptional service and guidance throughout the entire
                  process. We aim to simplify the home-buying or renting
                  experience by offering a comprehensive platform.
                </p>
              </div>
            </div>
            <div
              className="flex flex-col overflow-hidden items-center  lg:flex-row gap-6"
              data-aos="fade-up"
            >
              <img
                src="https://i.ibb.co/fG5NR6w/pexels-fauxels-3183183.jpg"
                alt=""
                className="h-80  object-cover aspect-video rounded-md"
              />
              <div className="flex flex-col justify-center flex-1 p-6 space-y-5 ">
                <h3 className="text-3xl font-bold text-orange-500">
                  What We Offer
                </h3>
                <ul className="ml-5 space-y-3">
                  <li className=" list-disc">
                    <span className="font-bold underline ml-2">
                      {" "}
                      Diverse Selection:
                    </span>{" "}
                    Explore a wide range of residential properties, including
                    single-family homes, townhouses, apartments, and more.
                  </li>
                  <li className=" list-disc">
                    <span className="font-bold underline">
                      Personalized Assistance:
                    </span>{" "}
                    Our team of experienced real estate agents is dedicated to
                    understanding your unique requirements and helping you find
                    the perfect property.
                  </li>
                  <li className=" list-disc">
                    <span className="font-bold underline">
                      {" "}
                      Transparent Transactions:
                    </span>{" "}
                    We believe in transparency and honesty in every transaction,
                    ensuring that you have all the information you need to make
                    informed decisions.
                  </li>
                  <li className=" list-disc">
                    <span className="font-bold underline">
                      {" "}
                      Ongoing Support:
                    </span>{" "}
                    Our commitment to you doesn't end once the deal is closed.
                    We provide ongoing support and assistance to ensure your
                    satisfaction with your new home.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="py-6  text-black mb-6">
          <div className="container p-4 mx-auto space-y-16 sm:p-10">
            <div className="space-y-4 ">
              <h3
                data-aos="fade-up"
                className="text-2xl font-bold leading-none text-center sm:text-5xl text-orange-500"
              >
                Meet our team
              </h3>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="space-y-4 border-orange-500 border-2 rounded-2xl px-4 py-8 hover:shadow-xl hover:text-orange-500 transition-all"
              >
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://i.ibb.co/T8z5kqg/pexels-mikhail-nilov-8872784.jpg"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="space-y-4 border-orange-500 border-2 rounded-2xl px-4 py-8 hover:shadow-xl hover:text-orange-500 transition-all"
              >
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://i.ibb.co/tDrf8mJ/pexels-daniel-ursache-8289271.jpg"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="space-y-4 border-orange-500 border-2 rounded-2xl px-4 py-8 hover:shadow-xl hover:text-orange-500 transition-all"
              >
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://i.ibb.co/6cSMHGg/pexels-picha-stock-3894379.jpg"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="5000"
                className="space-y-4 border-orange-500 border-2 rounded-2xl px-4 py-8 hover:shadow-xl hover:text-orange-500 transition-all"
              >
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://i.ibb.co/Jc8cZVY/pexels-mikhail-nilov-9304782.jpg"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className=" text-black">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div
                data-aos="fade-up"
                className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
              >
                <h2 className="text-4xl font-bold text-orange-500">
                  Our Client Says
                </h2>
                <p className="text-gray-400">
                  Discover what our satisfied customers have to say about their
                  experience with ResidenceHub. We take pride in providing
                  exceptional service and helping individuals and families find
                  their perfect homes. Read on to see why our clients trust us
                  to guide them through their real estate journey.
                </p>
              </div>
              <div className="p-6 xl:col-span-3">
                <div data-aos="zoom-in" className="grid gap-4 md:grid-cols-2 ">
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-orange-300">
                      <p>
                        I couldn't be happier with the service I received from
                        ResidenceHub. Their agents were attentive,
                        knowledgeable, and truly cared about finding the right
                        home for me.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://i.ibb.co/T8z5kqg/pexels-mikhail-nilov-8872784.jpg"
                          alt=""
                          className="w-12 h-12 bg-center object-cover bg-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold"> Sarah M.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md bg-orange-100">
                      <p>
                        Finding a home was a breeze with ResidenceHub. Their
                        extensive listings made it easy to narrow down my
                        options, and their team guided me through every step of
                        the process.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://i.ibb.co/T8z5kqg/pexels-mikhail-nilov-8872784.jpg"
                          alt=""
                          className="w-12 h-12 bg-center object-cover bg-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold"> John D.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md md:bg-orange-100 bg-orange-300 ">
                      <p>
                        I highly recommend ResidenceHub to anyone in search of
                        their dream home. Their professionalism and dedication
                        to their clients set them apart from other real estate
                        agencies.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://i.ibb.co/6cSMHGg/pexels-picha-stock-3894379.jpg"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover object-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Emily W.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md md:bg-orange-300 bg-orange-100">
                      <p>
                        Thanks to ResidenceHub, my family and I found the
                        perfect home in our desired neighborhood. We couldn't
                        have done it without their expertise and support.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://i.ibb.co/tDrf8mJ/pexels-daniel-ursache-8289271.jpg"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover object-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold"> Michael S.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* <section className="py-6 bg-orange-100 rounded-2xl text-gray-900 mb-6">
          <div className="grid items-center max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
              </div>
            </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  placeholder="Leroy Jenkins"
                  className="block w-full rounded-md p-3"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder="leroy@jenkins.com"
                  className="block w-full rounded-md p-3"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  className="block w-full rounded-md "
                ></textarea>
              </label>
              <button
                type="button"
                className="self-center px-8 py-3 text-lg rounded bg-orange-500 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default About;
