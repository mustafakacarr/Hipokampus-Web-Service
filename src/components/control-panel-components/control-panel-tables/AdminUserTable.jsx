import React from "react"
import userDummyData from "../../../dummy-data/userDummyData.json"

const AdminUserTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr style={{whiteSpace: "nowrap"}}>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userDummyData.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.username}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td style={{whiteSpace: "nowrap"}}>
                                    <button className="btn btn-outline-success me-1">
                                        Edit
                                    </button>
                                    <button className="btn btn-outline-danger">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminUserTable;
