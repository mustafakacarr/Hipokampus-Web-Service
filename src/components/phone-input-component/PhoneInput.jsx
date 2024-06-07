import React, { useState } from "react";
import IntlTelInput from "intl-tel-input/react";
import "intl-tel-input/build/js/utils.js";
import "intl-tel-input/build/css/intlTelInput.css";
import { useEffect } from "react";

const PhoneInput = ({ phoneDefault }) => {
  const [phoneNumberValue, setPhoneNumberValue] = useState(phoneDefault);
  const [isValid, setIsValid] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  const handleNumberChange = (value) => {
    setPhoneNumberValue(value);
  //  setIsValid(status);
    setErrorCode(errorCode);
  };

  useEffect(() => {
  
    setPhoneNumberValue(phoneDefault);
  }, [phoneDefault]);

  return (
    <div>
      <IntlTelInput
        initialValue={phoneNumberValue}
        onChangeNumber={handleNumberChange}
        onChangeValidity={setIsValid}
        onChangeErrorCode={setErrorCode}
        containerClassName="form-control"
        initOptions={{
          initialCountry: "tr",
          countrySearch: false,
          utilsScript: "intl-tel-input/build/js/utils.js",
          preferredCountries: ["tr", "ru", "ua", "us"],
          nationalMode: false,
          
        }}
        inputProps={{
          className: "form-control w-100",

        }}
      />

      {/* 
        To check the validity of the number

        {isValid ? (
            <p>Valid phone number: {phoneNumber}</p>
        ) : (
            <p style={{ color: 'red' }}>Invalid phone number ({errorCode})</p>
        )}
      */}
    </div>
  );
};

export default PhoneInput;
