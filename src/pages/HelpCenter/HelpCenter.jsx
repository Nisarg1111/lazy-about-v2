import { useState } from "react";
import "./HelpCenter.scss";
import { BiSearch } from "react-icons/bi";
import {Accordions} from "../../components/Accordions/Accordions";

export const HelpCenter = () => {
  const [currentCollapse, setCurrentCollapse] = useState(0);

  const handleCollapsChange = (num) => {
    if (currentCollapse === num) {
      setCurrentCollapse(0);
    } else {
      setCurrentCollapse(num);
    }
  };

  const accordionList = [
    "Product Information",
    "Shipping And Delivery",
    "Returns And Exchange",
    "Cancellation",
    "Business Inquiries",
  ];

  return (
    <>
      <div className="inner-box">
        <div className="help-center-box">
          <h1>Help Center</h1>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products, pages & help topics…"
            />
            <BiSearch className="search-icon" />
          </div>
          <div className="contact-div">
            <p className="descr">Would you like to complain or provide feedback? </p>
            <p className="contact-us">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="accordions">
        {accordionList.map((text, index) => (
          <Accordions
            text={text}
            currentCollapse={currentCollapse}
            val={index + 1}
            setCurrentCollapse={handleCollapsChange}
          />
        ))}
      </div>
    </>
  );
};
