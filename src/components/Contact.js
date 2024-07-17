import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor called");
  }
  componentDidMount() {
    console.log("About Component Did Mount");
  }
  render() {
    console.log("About render called");
    return (
      <div>
        <h1>Contact Us</h1>
        <p>
          We value our customer’s time and hence moved away from a single
          customer care number to a comprehensive chat-based support system for
          quick and easy resolution. You no longer have to go through the maze
          of an IVRS call support. Just search for your issue in the help
          section on this page and initiate a chat with us. A customer care
          executive will be assigned to you shortly. You can also email us your
          issue on support@swiggy.in Note: We value your privacy and your
          information is safe with us. Please do not reveal any personal
          information, bank account number, OTP etc. to another person. A Swiggy
          representative will never ask you for these details. Please do not
          reveal these details to fraudsters and imposters claiming to be
          calling on our behalf. Be vigilant and do not entertain phishing calls
          or emails.
        </p>
      </div>
    );
  }
}

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>
//         We value our customer’s time and hence moved away from a single customer
//         care number to a comprehensive chat-based support system for quick and
//         easy resolution. You no longer have to go through the maze of an IVRS
//         call support. Just search for your issue in the help section on this
//         page and initiate a chat with us. A customer care executive will be
//         assigned to you shortly. You can also email us your issue on
//         support@swiggy.in Note: We value your privacy and your information is
//         safe with us. Please do not reveal any personal information, bank
//         account number, OTP etc. to another person. A Swiggy representative will
//         never ask you for these details. Please do not reveal these details to
//         fraudsters and imposters claiming to be calling on our behalf. Be
//         vigilant and do not entertain phishing calls or emails.
//       </p>
//     </div>
//   );
// };

export default Contact;
