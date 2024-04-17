import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0">
        <Nav></Nav>
        <div style={{ minHeight: `calc(100vh - 334px)` }}>
          <Outlet></Outlet>
          <ToastContainer />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

// className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0"
