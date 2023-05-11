import "./ContactUs.scss";
import img from "../../assets/images/contact-us-banner.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";

export const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-div">
        <h1>contact us</h1>
        <p>
          Thank you for your interest in our company. We are here to answer any
          questions you may have about our products or services. Please feel
          free to contact us using the information below:
        </p>
        <form onSubmit="">
          <div className="input-box">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-box">
            <label htmlFor="message">Message</label>
            <input type="text" placeholder="Leave us a message" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <div className="inquiries">
          <h1>business inquiries</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.""Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
      </div>
      <div className="image-div">
        <div className="img">
          {/* <img src={img} alt="" /> */}
          <div className="contact-details">
            <div className="contact">
              <div>
                <BsTelephone className="icon" />
                <span>(406) 555-0120</span>
              </div>
              <div>
                <AiOutlineMail className="icon" />
                <span>lazyabout@example.com</span>
              </div>
              <div>
                <GoLocation className="icon" />
                <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
              </div>
              <div>
                <BiTime className="icon" />
                <div className="time">
                  <span>Mon-Fri 6 PM - 5 AM GMT+5:30</span>
                  <span>Sat-Sun 7 PM - 5 AM GMT+5:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
