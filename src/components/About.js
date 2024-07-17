import UserCard from "./UserCard";
import React from "react";
import Contact from "./Contact";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>About Us</h1>
        <p>
          Swiggy is an Indian online food ordering and delivery platform.
          Founded in 2014, Swiggy is headquartered in Bangalore and operates in
          more than 580 Indian cities, as of July 2023.[4] Besides food
          delivery, the platform also provides on-demand grocery deliveries
          under the name Instamart, and a same-day package delivery service
          called Swiggy Genie
        </p>
        <UserCard username={"1st child"} location={"Hyderabad"} />
        <UserCard username={"2nd child"} location={"Hyderabad"} />
        <Contact></Contact>
      </div>
    );
  }
}

export default About;
