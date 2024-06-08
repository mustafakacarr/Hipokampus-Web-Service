import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ClassicalBSAlert = ( props ) => {
  const { message, variant, icon } = props;

  const alertClass = `alert alert-${variant}`;
  return (
    <div className={alertClass}>
      <FontAwesomeIcon icon={icon} className="pe-2"/>
      {message}
    </div>
  );
};

export default ClassicalBSAlert;
