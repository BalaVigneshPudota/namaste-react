import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const cardStyles = {
  padding: "0 2px",
};

const Footer = () => <div></div>;
const AppComponent = () => {
  return (
    <div className="appContainer">
      <Header></Header>
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
