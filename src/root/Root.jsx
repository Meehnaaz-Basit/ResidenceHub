import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div>
      <div className="container">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
