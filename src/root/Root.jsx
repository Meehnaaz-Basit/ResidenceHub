import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[84%] px-0">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
