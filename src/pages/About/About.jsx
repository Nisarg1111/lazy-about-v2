import "./About.scss";
import banner from "../../assets/images/about-banner.png";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>about us</h1>
        <p className="descr">easiest way to create a beautiful modern space.</p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.""Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.""Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.""Lorem ipsum dolor sit a
        </p>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};
