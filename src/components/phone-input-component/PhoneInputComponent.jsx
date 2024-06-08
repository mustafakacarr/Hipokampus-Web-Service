import { useEffect, useState } from "react";
import { PhoneInput  } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputComponent = ({ phoneDefault="+90" ,onChangePhoneNumber}) => {

  useEffect(() => {
    onChangePhoneNumber(phoneDefault);
  }, [phoneDefault]);

  return (
    <div>
      <PhoneInput
        defaultCountry="tr"
        value={phoneDefault}
        onChange={(phone) => onChangePhoneNumber(phone)}
        preferredCountries={["tr", "ua", "ru", "us"]}
        disableDialCodeAndPrefix={true}
      />
    </div>
  );
};

export default PhoneInputComponent;
