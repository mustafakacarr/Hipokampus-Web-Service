import React from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";

const Profile = () => {
  return (
    <UserPanelLayout>
      <div className="main mt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="col-12">
                  <h3>Update Profile</h3>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" disabled />
                        {/* Cannot be changed */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 btn btn-success">Save</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body p-3">
                <div>
                  <h3>Change Password</h3>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Old Password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">New Password Again</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 btn btn-success">Update</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Profile;
