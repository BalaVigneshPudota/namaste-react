import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.username + " Constructor called");

    this.state = {
      count: 0,
      count1: 100,
    };
  }
  componentDidMount() {
    console.log(this.props.username + " component did mount");
  }
  render() {
    console.log(this.props.username + " render called");
    const { username, location } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h1>
          Count is {count} and count1 is {count1}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              count: ++this.state.count,
              count1: --this.state.count1,
            });
          }}
        >
          + / -
        </button>
        <h1>{username}</h1>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserCard;
