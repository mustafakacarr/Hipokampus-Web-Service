import React, { useState } from "react";
import IntlTelInput from "intl-tel-input/react";
import "intl-tel-input/build/js/utils.js";
import "intl-tel-input/build/css/intlTelInput.css";

const PhoneInput = () => {
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  const handleNumberChange = (status, value) => {
    setPhoneNumberValue(value);
    setIsValid(status);
    setErrorCode(errorCode);
  };

  return (
    <div>
      <IntlTelInput
        initialValue={phoneNumberValue}
        onChangeNumber={handleNumberChange}
        onChangeValidity={setIsValid}
        onChangeErrorCode={setErrorCode}
        containerClassName="form-control"

        // any initialisation options from the readme will work here
        
        initOptions={{
          initialCountry: "tr",
          countrySearch: false,
          utilsScript: "intl-tel-input/build/js/utils.js",

          preferredCountries: ["tr", "ru", "ua", "us"],
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
