import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div>
      <Helmet>
        <title>ResidenceHub - Contact </title>
      </Helmet>

      <div className="my-6 py-6">
        <h2
          data-aos="zoom-in"
          className="text-2xl text-center font-bold leading-tight lg:text-4xl"
        >
          Let's talk!
        </h2>
        <div className="grid items-center max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
          {/* <div className="flex flex-col items-center justify-between">
            <div className="space-y-2"></div>
            <img
              src="https://i.ibb.co/jwNxjh3/12893086-5092143.jpg"
              alt=""
              className="p-6 h-full "
            />
          </div> */}
          <div data-aos="zoom-in" className="py-6 md:py-0 md:px-6">
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
                  className="w-5 h-5 mr-2 sm:mr-6 animate__heartBeat animate__animated animate__infinite"
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
                  className="w-5 h-5 mr-2 sm:mr-6 animate__headShake animate__animated animate__slower animate__infinite"
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
                  className="w-5 h-5 mr-2 sm:mr-6 animate__tada animate__animated animate__slow animate__infinite"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form noValidate="" className="space-y-6">
            <div data-aos="zoom-in-left">
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded bg-gray-800 dark:bg-gray-100"
              />
            </div>
            <div data-aos="zoom-in-right">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded bg-gray-800 dark:bg-gray-100"
              />
            </div>
            <div data-aos="zoom-in-right">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded bg-gray-800 dark:bg-gray-100"
              ></textarea>
            </div>
            <button
              data-aos="fade-up"
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-500  text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
