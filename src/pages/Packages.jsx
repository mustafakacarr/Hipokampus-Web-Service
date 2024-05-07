import React, { useState } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import packagesDummyData from "../dummy-data/packagesDummyData.json";
import PackageCard from "../components/packages-components/PackageCard";
import TicketBoxCard from "../components/packages-components/TicketBoxCard";

var filteredPackagesData,
  filteredTicketBoxData = packagesDummyData;

const packagesNames = ["Coworking Space", "Virtual Office", "Meeting Room"]

const Packages = () => {
  const [packageFilter, setPackageFilter] = useState("coworking_space");
  const getButtonClassName = (name) => {
    return packageFilter === name
      ? "btn btn-outline-secondary active"
      : "btn btn-outline-secondary";
  }
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
          <small>(VAT NOT INCLUDED)</small>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-2 my-5">
          <button
            className={getButtonClassName("virtual_office")}
            onClick={() => handlePackages("virtual_office")}
          >
            VIRTUAL OFFICE
          </button>
          <button
            className={getButtonClassName("coworking_space")}
            onClick={() => handlePackages("coworking_space")}
          >
            COWORKING SPACE
          </button>
          <button
            className={getButtonClassName("meeting_room")}
            onClick={() => handlePackages("meeting_room")}
          >
            MEETING ROOM
          </button>
        </div>
        <div className="row gx-0 p-3 packages-wrapper d-flex justify-content-center">
          {filteredPackagesData.map((item, index) => (
            <PackageCard key={index} data={item} index={index}></PackageCard>
          ))}
          <div className="px-1 px-sm-2 mb-3">
            <div className="offer-card my-2 p-4 package-offer d-flex justify-content-between row gx-0">
              <span className="fw-bold fs-3 pe-md-2 align-bottom package-offer-text col-12 col-md-9">
                GET AN OFFER FOR CUSTOMIZED SOLUTIONS
              </span>
              <button className="btn btn-secondary btn-lg fs-5 fw-bold col-12 col-md-3 mt-4 mt-md-0"
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FontAwesomeIcon icon={faComments} className="me-2" size="xl" />
                GET AN OFFER
              </button>
            </div>
          </div>
          {filteredTicketBoxData.map((item, index) => (
            <TicketBoxCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="packagesModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3 fw-bold text-primary" id="packagesModal">
                <FontAwesomeIcon icon={faComments} className="me-2" />
                Get Offer
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <select
                className="form-select my-3"
                defaultValue={1}
              >
                <option value={0} disabled>
                  Please Select A Office To Make An Offer
                </option>
                {packagesNames.map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
              <textarea name="packagesOfferTextarea" id="packagesOfferTextarea"
                placeholder="Write Your Message Here"
                className="packages-offer-modal-textarea rounded" />
            </div>
            <div className="modal-footer text-center justify-content-center">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary fw-bold">Get Offer</button>
            </div>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Packages;
