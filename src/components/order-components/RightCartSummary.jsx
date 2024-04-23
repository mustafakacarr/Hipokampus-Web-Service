import React from "react";
function RightCartSummary() {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">Cart Summary</h5>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between py-2">
            <span>
              <strong>Key:</strong>
            </span>
            <span>Value</span>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>
            <strong>TOPLAM:</strong>
          </span>
          <span>100 $</span>
        </div>
      </div>
    </div>
  );
 
}

export default RightCartSummary;
