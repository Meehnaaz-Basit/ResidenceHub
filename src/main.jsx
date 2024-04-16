import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./provider/AuthProvider";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/routes/PropertyDetails";
import PrivateRoute from "./pages/routes/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";
import ProfileUpdate from "./pages/routes/ProfileUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profileUpdate",
        element: (
          <PrivateRoute>
            {" "}
            <ProfileUpdate></ProfileUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
