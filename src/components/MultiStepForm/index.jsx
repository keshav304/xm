import React, { useState } from "react";
import "./style.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Fields, setStep1Fields] = useState({
    fullName: "",
    dateOfBirth: "",
  });
  const [step2Fields, setStep2Fields] = useState({ email: "", password: "" });
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isLowerValid, setIsLowerValid] = useState(false);
  const [isUpperValid, setIsUpperValid] = useState(false);
  const [isSpecialValid, setIsSpecialValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // Initialize as true
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(false);
  const [dateOfBirthErrorMessage, setDateOfBirthErrorMessage] = useState("");
  const isStep1Complete = isNameValid && isDateOfBirthValid;
  const isStep2Complete = step2Fields.email && step2Fields.password;
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setStep2Fields({ ...step2Fields, email: newEmail });

    // Email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailPattern.test(newEmail);
    setIsEmailValid(isValid);
  };
  const getStep1Progress = () => {
    if (isStep1Complete) return 1; // Step 1 is complete
    if (step1Fields.fullName || step1Fields.dateOfBirth) return 0.5; // One input filled
    return 0; // No input filled
  };

  const getStep2Progress = () => {
    if (isStep2Complete) return 1; // Step 2 is complete
    if (step2Fields.email || step2Fields.password) return 0.5; // One input filled
    return 0; // No input filled
  };

  const moveToNextStep = () => {
    if (currentStep === 1 && isStep1Complete) {
      setCurrentStep(2);
    } else if (currentStep === 2 && isStep2Complete) {
      // Handle form submission or completion
    }
  };
  // Password validation functions
  const validatePassword = (password) => {
    setIsLengthValid(password.length >= 8 && password.length <= 15);
    setIsNumberValid(/[0-9]/.test(password));
    setIsLowerValid(/[a-z]/.test(password));
    setIsUpperValid(/[A-Z]/.test(password));
    setIsSpecialValid(/[#\[\]()@$&*!?|,.^/\\+_-]/.test(password));
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setStep2Fields({ ...step2Fields, password: newPassword });
    validatePassword(newPassword);
  };

  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s]+$/; // Only letters (A-Z, a-z)
    const isValid = namePattern.test(name);
    setIsNameValid(isValid);

    // Set error message if invalid
    if (!isValid) {
      setNameErrorMessage("Please Enter Valid Name");
    } else {
      setNameErrorMessage("");
    }
  };
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setStep1Fields({ ...step1Fields, fullName: newName });
    validateName(newName);
  };
  const handleDateOfBirthChange = (e) => {
    const newDateOfBirth = e.target.value;
    setStep1Fields({ ...step1Fields, dateOfBirth: newDateOfBirth });

    const birthDate = new Date(newDateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      setIsDateOfBirthValid(false);
      setDateOfBirthErrorMessage("Minimum age requirements, 18 years old");
    } else if (age > 60) {
      setIsDateOfBirthValid(false);
      setDateOfBirthErrorMessage("Maximum age requirements, 60 years old");
    } else {
      setIsDateOfBirthValid(true);
      setDateOfBirthErrorMessage("");
    }
  };

  return (
    <div className="multistepform">
      {isRegistrationSuccessful ? ( // Check if registration is successful
        <div className="registration-success">
          <h2><span><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <g clip-path="url(#clip0_4803_124)">
              <path d="M26.8597 52C41.1859 52 52.7969 40.3609 52.7969 26C52.7969 11.6391 41.1859 0 26.8597 0C12.5335 0 0.922607 11.6391 0.922607 26C0.922607 40.3609 12.5335 52 26.8597 52ZM38.3085 21.2266L25.34 34.2266C24.3876 35.1813 22.8476 35.1813 21.9053 34.2266L15.4211 27.7266C14.4687 26.7719 14.4687 25.2281 15.4211 24.2836C16.3734 23.3391 17.9134 23.3289 18.8557 24.2836L23.6176 29.057L34.8638 17.7734C35.8161 16.8188 37.3562 16.8188 38.2984 17.7734C39.2407 18.7281 39.2508 20.2719 38.2984 21.2164L38.3085 21.2266Z" fill="#31B63B" />
            </g>
            <defs>
              <clipPath id="clip0_4803_124">
                <rect width="51.8742" height="52" fill="white" transform="translate(0.922607)" />
              </clipPath>
            </defs>
          </svg></span>Registration Successful</h2>
          <p><span> &#9658;</span>Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
        </div>
      ) : (
        <div>

          {window.innerWidth > 768 ? (
            <div className="step-indicators">
              <div
                className={`step-indicator${currentStep === 1 ? " active" : ""}`}
              >
                <div>
                  <div className={`circle${currentStep === 1 ? " green" : ""}`}>
                    <div>1</div>
                  </div>
                  <div className="step-number">Step 1</div>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${getStep1Progress() * 100}%` }}
                  ></div>
                </div>
              </div>

              <div
                className={`step-indicator${currentStep === 2 ? " active" : ""}`}
              >
                <div>
                  <div className={`circle${currentStep === 2 ? " green" : ""}`}>
                    <div>2</div>
                  </div>
                  <div className="step-number">Step 2</div>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${getStep2Progress() * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : null}

          {currentStep === 1 && (
            <div className="step1-fields">
              {window.innerWidth < 768 ? (
                <div className="step-indicators">
                  <div
                    className={`step-indicator${currentStep === 1 ? " active" : ""
                      }`}
                  >
                    <div>
                      <div className={`circle${currentStep === 1 ? " green" : ""}`}>
                        <div>1</div>
                      </div>
                      <div className="step-number">Step 1</div>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${getStep1Progress() * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* Step 1 input fields */}
              <div className="input-container">
                <label>Full Name:</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={step1Fields.fullName}
                  onChange={(e) => handleNameChange(e)}
                />
                {/* Display the name error message */}
                {nameErrorMessage.length > 0 && (
                  <li className="validation-message error-msg">{nameErrorMessage}</li>
                )}
              </div>
              <div className="input-container">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  placeholder=""
                  title=""
                  value={step1Fields.dateOfBirth}
                  onChange={handleDateOfBirthChange}
                />
                {dateOfBirthErrorMessage.length > 0 && (
                  <li className="validation-message error-msg">{dateOfBirthErrorMessage}</li>
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step2-fields">
              {window.innerWidth < 768 ? (
                <div className="step-indicators">
                  <div
                    className={`step-indicator${currentStep === 2 ? " active" : ""
                      }`}
                  >
                    <div>
                      <div className={`circle${currentStep === 2 ? " green" : ""}`}>
                        <div>2</div>
                      </div>
                      <div className="step-number">Step 2</div>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${getStep2Progress() * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* Step 2 input fields */}
              <div className="input-container">
                <label>Email:</label>
                <input
                  type="email" // Use type "email" for email input
                  placeholder="Email"
                  value={step2Fields.email}
                  onChange={handleEmailChange}
                />
                {/* Error message */}
                {!isEmailValid && (
                  <li className="validation-message error-msg"> Please enter a valid email address.</li>
                )}
              </div>

              <div className="input-container">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={step2Fields.password}
                  onChange={handlePasswordChange}
                />
                <ul className="validation-messages">
                  <li
                    className={`validation-message ${isLengthValid ? "valid" : "invalid"}`}
                  >
                    8-15 characters
                  </li>
                  <li
                    className={`validation-message ${isNumberValid ? "valid" : "invalid"}`}
                  >
                    1 or more numbers
                  </li>
                  <li
                    className={`validation-message ${isLowerValid ? "valid" : "invalid"}`}
                  >
                    1 or more lower case letters
                  </li>
                  <li
                    className={`validation-message ${isUpperValid ? "valid" : "invalid"}`}
                  >
                    1 or more upper case letters
                  </li>
                  <li
                    className={`validation-message ${isSpecialValid ? "valid" : "invalid"
                      }`}
                  >
                    1 or more special characters
                  </li>
                </ul>
              </div>
            </div>
          )}
          {currentStep === 1 ? (
            <button
              disabled={!isStep1Complete}
              className={!isStep1Complete ? "input-btn" : "input-btn next-btn"}
              onClick={moveToNextStep}
            >
              Continue
            </button>
          ) : (
            <button
              disabled={!isStep2Complete}
              className={!isStep2Complete ? "input-btn" : "input-btn register-btn"}
              onClick={() => {
                if (isStep2Complete) {
                  // Handle form submission or completion
                  setRegistrationSuccessful(true); // Set registration as successful
                }
              }}
            >
              Register Now
            </button>
          )}
        </div>
      )}

    </div>
  );
};

export default MultiStepForm;
