import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import announcementsDummyData from "../dummy-data/announcementsDummyData.json"
import AnnouncementsCard from "../components/announcements-components/AnnouncementsCard"


const Announcements = () => {
    return (
        <UserPanelLayout>
            <div className="row gx-0 px-5 px-md-3 py-3 d-flex justify-content-start">
                {
                    announcementsDummyData.map((item, index) => (
                        <AnnouncementsCard key={index} data={item} index={index} />
                    ))
                }
            </div>
        </UserPanelLayout>
    );
};

export default Announcements;
