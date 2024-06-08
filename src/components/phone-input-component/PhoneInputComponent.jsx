import { useEffect, useState } from "react";
import { PhoneInput  } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputComponent = ({ phoneDefault="+90" }) => {
  const [phoneNumberValue, setPhoneNumberValue] = useState(phoneDefault);

  useEffect(() => {
    setPhoneNumberValue(phoneDefault);
  }, [phoneDefault]);

  return (
    <div>
      <PhoneInput
        defaultCountry="auto"
        value={phoneNumberValue}
        onChange={(phone) => setPhoneNumberValue(phone)}
        preferredCountries={["tr", "ua", "ru", "us"]}
        disableDialCodeAndPrefix={true}
   
      />
    </div>
  );
};

export default PhoneInputComponent;
