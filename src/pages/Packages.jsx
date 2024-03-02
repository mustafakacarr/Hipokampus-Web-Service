import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout"

const Packages = () => {
    return (
        <UserPanelLayout>
            <div>
                <div className="text-center">
                    <h1 className="fs-1">HIPOKAMPUS MEMBERSHIP</h1>
                    <span>VAT NOT INCLUDED</span>
                </div>
                <div className="justify-content-center d-flex flex-wrap btn-group my-5 w-50 mx-auto">
                    <button className="btn btn-outline-primary">FETHIYE VIRTUAL OFFICE</button>
                    <button className="btn btn-outline-primary">FETHIYE COWORKING SPACE</button>
                    <button className="btn btn-outline-primary">FETHIYE MEETING ROOM</button>
                </div>
            </div>
        </UserPanelLayout>
    )
}

export default Packages
