import React from 'react';
import OrderLayout from '../../../layouts/OrderLayout';

const MeetingRoomForm = () => {
    return (
            <div class="row justify-content-center mb-2">
                <div class="col-11 col-md-10">
                    <div class="meeting-room-form-wrapper">
                        <div className="row gx-2 mt-4 mb-3">
                            <div className="col-12 mb-4 text-center">
                                <h4>Please fill in the fields below for meeting room information</h4>
                            </div>
                            <div className="col-12 col-md-6 py-1">
                                <label className="form-label">Start Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-12 col-md-6 py-1">
                                <label className="form-label">Number of People</label>
                                <input type="number" min={1} className="form-control" />
                            </div>
                            <div className='col-12 py-1'>
                                <div className="form-group">
                                    <label htmlFor="select-office">
                                        <label className='form-label'>Office Name</label>
                                    </label>
                                    <select className="form-select" aria-label="Meeting Room Select" defaultValue={2}>
                                        <option value="1" disabled>Please select office name</option>
                                        <option value="2">Meeting Room A1</option>
                                        <option value="3">Meeting Room B2</option>
                                        <option value="4">Meeting Room C3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MeetingRoomForm;