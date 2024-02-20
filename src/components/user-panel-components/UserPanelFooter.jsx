import React from "react";

const UserPanelFooter = () => {
    return (
        <footer className="p-5">
            <div className="row">
                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Profile</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Campaigns</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Messages</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Caterings</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Payment</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Profile</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Campaigns</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Messages</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Caterings</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Payment</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Profile</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Campaigns</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Messages</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Caterings</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Payment</a></li>
                    </ul>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                    <form>
                        <h5>Be the first to know about new events</h5>
                        <p>Learn about seminars and events.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2019-2024 Hipokampüs Coworking Space</p>
            </div>
        </footer>
    )
}

export default UserPanelFooter
