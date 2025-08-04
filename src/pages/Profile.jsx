import React, { useState } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import ProfilePersonalInformation from "../components/profile-components/ProfilePersonalInformation";
import ProfileInvoiceDetails from "../components/profile-components/ProfileInvoiceDetails";
import ProfilePaymentHistory from "../components/profile-components/ProfilePaymentHistory";
import ProfileAccountHistory from "../components/profile-components/ProfileAccountHistory";

const Profile = () => {

  const [contentType, setContentType] = useState("PersonalInformation")

  function handleContentSelect(selectedContent) {
    setContentType(selectedContent)
  }

  function getSelectedContent() {

    switch (contentType) {

      case "PersonalInformation":
        return <ProfilePersonalInformation />
      case "InvoiceDetails":
        return <ProfileInvoiceDetails />
      case "PaymentHistory":
        return <ProfilePaymentHistory />
      case "AccountHistory":
        return <ProfileAccountHistory />
    }
  }

  return (
    <UserPanelLayout>
      <div className="mt-3 mx-1 mx-md-3 mx-lg-5">
        <div className="rounded-3 mx-auto py-1 px-3 profile-jumbotron">
          <div className="row gx-2 mt-3">
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button onClick={() => handleContentSelect("PersonalInformation")}
                className="btn btn-dark rounded px-3 w-100 h-100" type="button">Personal Information</button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button onClick={() => handleContentSelect("InvoiceDetails")}
                className="btn btn-dark rounded px-3 w-100 h-100" type="button">Invoice Details</button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button onClick={() => handleContentSelect("PaymentHistory")}
                className="btn btn-dark rounded px-3 w-100 h-100" type="button">Payment History</button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button onClick={() => handleContentSelect("AccountHistory")}
                className="btn btn-dark rounded px-3 w-100 h-100" type="button">Account History</button>
            </div>
          </div>
          {
            getSelectedContent()
          }
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Profile;
