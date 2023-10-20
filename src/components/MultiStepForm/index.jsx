import React, { useState } from "react";
import "./style.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Fields, setStep1Fields] = useState({
    fullName: "",
    dateOfBirth: "",
  });
  const [step2Fields, setStep2Fields] = useState({ email: "", password: "" });

  const isStep1Complete = step1Fields.fullName && step1Fields.dateOfBirth;
  const isStep2Complete = step2Fields.email && step2Fields.password;
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isLowerValid, setIsLowerValid] = useState(false);
  const [isUpperValid, setIsUpperValid] = useState(false);
  const [isSpecialValid, setIsSpecialValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // Initialize as true
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
  return (
    <div className="multistepform">
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
                className={`step-indicator${
                  currentStep === 1 ? " active" : ""
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
              onChange={(e) =>
                setStep1Fields({ ...step1Fields, fullName: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label>Date of Birth:</label>
            <input
              type="date"
              placeholder=""
              title=""
              value={step1Fields.dateOfBirth}
              onChange={(e) =>
                setStep1Fields({ ...step1Fields, dateOfBirth: e.target.value })
              }
            />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="step2-fields">
          {window.innerWidth < 768 ? (
            <div className="step-indicators">
              <div
                className={`step-indicator${
                  currentStep === 2 ? " active" : ""
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
          </div>
          {/* Error message */}
          {!isEmailValid && (
            <div className="error-message">
              Please enter a valid email address.
            </div>
          )}
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
                className={`validation-message ${isLengthValid ? "valid" : ""}`}
              >
                8-15 characters
              </li>
              <li
                className={`validation-message ${isNumberValid ? "valid" : ""}`}
              >
                1 or more numbers
              </li>
              <li
                className={`validation-message ${isLowerValid ? "valid" : ""}`}
              >
                1 or more lower case letters
              </li>
              <li
                className={`validation-message ${isUpperValid ? "valid" : ""}`}
              >
                1 or more upper case letters
              </li>
              <li
                className={`validation-message ${
                  isSpecialValid ? "valid" : ""
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
          onClick={moveToNextStep}
        >
          Register Now
        </button>
      )}
    </div>
  );
};

export default MultiStepForm;
