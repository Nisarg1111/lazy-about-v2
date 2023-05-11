import { Collapse } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { TfiMinus } from "react-icons/tfi";
import "./Accordions.scss";

export const Accordions = ({
  text,
  val,
  currentCollapse,
  setCurrentCollapse,
}) => {
  return (
    <div className="container">
      <div className="accordion-box">
        <div className="accordion-item" onClick={() => setCurrentCollapse(val)}>
          <p className="">{text}</p>
          <span
            className=""
            aria-controls=""
            aria-expanded={currentCollapse === val}
          >
            {currentCollapse === val ? (
              <TfiMinus className="icon" />
            ) : (
              <BsPlusLg className="icon" />
            )}
          </span>
        </div>
        <Collapse in={currentCollapse === val}>
          <div className="answer-box" id="example-collapse-text1">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    </div>
  );
};
