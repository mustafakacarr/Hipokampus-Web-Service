import React, { useState } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import packagesDummyData from "../dummy-data/packagesDummyData.json";
import PackageCard from "../components/packages-components/PackageCard";
import TicketBoxCard from "../components/packages-components/TicketBoxCard";

var filteredPackagesData,
  filteredTicketBoxData = packagesDummyData;

const Packages = () => {
  const [packageFilter, setPackageFilter] = useState("virtual_office");

  if (packageFilter === "coworking_space") {
    filteredPackagesData = packagesDummyData.coworking_space.filter(packages => packages.packageType === "STANDARD");
    filteredTicketBoxData = packagesDummyData.coworking_space.filter(packages => packages.packageType === "TICKETBOX");
  }

  if (packageFilter === "virtual_office") {
    filteredPackagesData = packagesDummyData.virtual_office.filter(packages => packages.packageType === "STANDARD");
    filteredTicketBoxData = packagesDummyData.virtual_office.filter(packages => packages.packageType === "TICKETBOX");
  }

  if (packageFilter === "meeting_room") {
    filteredPackagesData = packagesDummyData.meeting_room.filter(packages => packages.packageType === "STANDARD");
    filteredTicketBoxData = packagesDummyData.meeting_room.filter(packages => packages.packageType === "TICKETBOX");
  }

  function handlePackages(selectedFilter) {
    setPackageFilter(selectedFilter);
  }

  return (
    <UserPanelLayout>
      <div>
        <div className="text-center">
          <h1 className="fs-1">HIPOKAMPUS MEMBERSHIP</h1>
          <span>VAT NOT INCLUDED</span>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-2 my-5">
          <button
            className="btn btn-outline-primary"
            onClick={() => handlePackages("virtual_office")}
          >
            FETHIYE VIRTUAL OFFICE
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => handlePackages("coworking_space")}
          >
            FETHIYE COWORKING SPACE
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => handlePackages("meeting_room")}
          >
            FETHIYE MEETING ROOM
          </button>
        </div>
        <div className="row gx-0 px-5 px-md-3 py-3 d-flex justify-content-center">
          {filteredPackagesData.map((item, index) => (
            <PackageCard data={item} index={index}></PackageCard>
          ))}
          <div className="px-1 px-lg-2 px-lg-3 mb-3">
            <div className="package-card my-2 p-4 package-offer d-flex justify-content-between row gx-0">
              <span className="fw-bold fs-3 pe-md-2 align-bottom package-offer-text col-12 col-md-9">
                GET AN OFFER FOR CUSTOMIZED SOLUTIONS
              </span>
              <button className="btn btn-primary btn-lg fs-5 fw-bold col-12 col-md-3 mt-4 mt-md-0">
                <FontAwesomeIcon icon={faComments} className="me-2" size="xl" />
                GET AN OFFER
              </button>
            </div>
          </div>
          {
            filteredTicketBoxData.map((item, index) => (
                <TicketBoxCard
                  data={item}
                  index={index}
                  descriptionless={true}
                ></TicketBoxCard>
              ))
            }
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Packages;
