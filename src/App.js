import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";

const cardStyles = {
  padding: "0 2px",
};

const Footer = () => <div></div>;
const AppComponent = () => {
  return (
    <div className="appContainer">
      <Header></Header>
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "restaurants/:resid",
        element: <RestaurantDetails />,
      },
      {
        path: "/AboutUs",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/AboutUs",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
