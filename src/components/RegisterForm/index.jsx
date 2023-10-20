import "./style.css";
import { ReactComponent as Calendar } from "./../../assests/calendar.svg";
import{ ReactComponent as Clock } from  "./../../assests/clock.svg";
import { ReactComponent as Venue } from "./../../assests/venue.svg";
import MultiStepForm from "../MultiStepForm";

export const RegisterForm = () => {
  return (
    <>
      <div>
        <h4 className="registerform-heading">
          <strong>- Register Here -</strong>
        </h4>
        <p className="registerform-description">Join us to celebrate our biggest night of the year.</p>
      </div>
      <div className="event-info">
        <div>
          <Calendar/>
          <p>12 NOVEMBER 2022</p>
        </div>
        <div>
          <Clock/>
          <p>16:00 – 23:00</p>
        </div>
        <div>
          <Venue/>
          <p>Centara Grand & Bangkok Convention Centre, Bangkok</p>
        </div>
      </div>
      <MultiStepForm/>
      <p className="new-acc-text">Don’t have an account? <span>Create one here</span> and register for the event</p>
      <p className="tandc-text">Terms and Conditions apply*. To read the full T&Cs, <span>click here</span>.</p>
    </>
  );
};
