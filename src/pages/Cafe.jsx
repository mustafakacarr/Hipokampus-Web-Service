import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout"
import cafeDummyData from "../dummyData/cafeDummyData.json"

const Cafe = () => {
    return (
        <UserPanelLayout>
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <div className="justify-content-center d-flex flex-wrap btn-group">
                        <button className="btn btn-outline-primary">ALL</button>
                        <button className="btn btn-outline-primary">PASTA</button>
                        <button className="btn btn-outline-primary">SALAD</button>
                        <button className="btn btn-outline-primary">SNACK</button>
                        <button className="btn btn-outline-primary">COLD DRINK</button>
                        <button className="btn btn-outline-primary">HOT DRINK</button>
                        <button className="btn btn-outline-primary">TREAT</button>
                        <button className="btn btn-outline-primary">DESSERT</button>
                    </div>
                    <div className="row justify-content-center justify-content-md-start">
                        {cafeDummyData.map((item, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-5 px-md-3 mt-4 cafe-card">
                                <div key={index} className="card">
                                    <img src={item.photo} className="card-img-top cafe-card-image" alt="..." />
                                    <div className="card-body text-center mt-2">
                                        <h5 className="card-title text-primary">{item.name}</h5>
                                        <p className="card-text mt-3"><b>{item.price} ₺</b></p>
                                        <div className="justify-content-center my-1 row">
                                            <div className="d-flex col-auto gx-0">
                                                <a className="btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                                    </svg>
                                                </a>
                                                <strong className="my-auto mx-auto">0</strong>
                                                <a className="btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a className="btn btn-primary ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                </svg></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-4 mt-md-0 px-5">
                    <div class="card text-center">
                        <h4 class="card-header"><i className="bi bi-cart-fill me-1" />Cart</h4>
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">There are no items in your cart.</p>
                            <a href="#" class="btn btn-primary">Go To Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </UserPanelLayout>
    )
}

export default Cafe
