import React, { useEffect, useState } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import PackageCard from "../components/packages-components/PackageCard";
import TicketBoxCard from "../components/packages-components/TicketBoxCard";
import { getWithoutAuth } from "../api/apiCalls";
import {
  COWORKING_SPACE,
  MEETING_ROOM,
  VIRTUAL_OFFICE,
} from "../constants/ServiceTypes";
import ErrorWhileLoadingAlert from "../components/alert-component/ErrorWhileLoadingAlert";
import TripleSpinner from "../components/spinner-components/TripleSpinner";

const Packages = () => {
  const [packageList, setPackageList] = useState([]);
  const [packageFilter, setPackageFilter] = useState(COWORKING_SPACE);
  const [isLoading, setIsLoading] = useState(true)
  const [isAlert, setIsAlert] = useState(false)

  const getButtonClassName = (name) => {
    return packageFilter === name
      ? "btn btn-outline-dark active"
      : "btn btn-outline-dark";
  };

  const serviceNames = ["Coworking Space", "Virtual Office", "Meeting Room"];

  const fetchPackages = async () => {
    try {
      const response = await getWithoutAuth("/api/v1.0/packages");
      setPackageList(response.data);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsAlert(true)
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const filteredPackagesData = packageList.filter(
    (pkg) =>
      pkg.serviceType === packageFilter && pkg.packageType === "MEMBERSHIP"
  );

  const filteredTicketBoxData = packageList.filter(
    (pkg) =>
      pkg.serviceType === packageFilter && pkg.packageType === "TICKETBOX"
  );

  function handlePackages(selectedFilter) {
    setPackageFilter(selectedFilter);
  }

  return (
    <UserPanelLayout>
      {
        isAlert &&
        <ErrorWhileLoadingAlert />
      }
      {
        isLoading &&
        <TripleSpinner />
      }
      {!isLoading && !isAlert &&
        <>
          <div>
            <div className="text-center">
              <h1 className="fs-1">INWORK MEMBERSHIP</h1>
              <small>(VAT NOT INCLUDED)</small>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-2 my-5">
              <button
                className={getButtonClassName(VIRTUAL_OFFICE)}
                onClick={() => handlePackages(VIRTUAL_OFFICE)}
              >
                VIRTUAL OFFICE
              </button>
              <button
                className={getButtonClassName(COWORKING_SPACE)}
                onClick={() => handlePackages(COWORKING_SPACE)}
              >
                COWORKING SPACE
              </button>
              <button
                className={getButtonClassName(MEETING_ROOM)}
                onClick={() => handlePackages(MEETING_ROOM)}
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
                  <button
                    className="btn btn-dark btn-lg fs-5 fw-bold col-12 col-md-3 mt-4 mt-md-0"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
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
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="packagesModal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-3 fw-bold text-secondary"
                    id="packagesModal"
                  >
                    <FontAwesomeIcon icon={faComments} className="me-2" />
                    Get Offer
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <select className="form-select my-3" defaultValue={1}>
                    <option value={0} disabled>
                      Please Select A Service To Make An Offer
                    </option>
                    {serviceNames.map((item, index) => (
                      <option key={index} value={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="packagesOfferTextarea"
                    id="packagesOfferTextarea"
                    placeholder="Write Your Message Here"
                    className="packages-offer-modal-textarea rounded"
                  />
                </div>
                <div className="modal-footer text-center justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary fw-bold">
                    Get Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </UserPanelLayout>
  );
};

export default Packages;
