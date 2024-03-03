import React from 'react'
import UserPanelHeader from '../components/user-panel-components/UserPanelHeader'
import UserPanelFooter from '../components/user-panel-components/UserPanelFooter'
import UserPanelSidebar from '../components/user-panel-components/UserPanelSidebar';

const UserPanelLayout = ({ children }) => {
    return (
        <div>
            <UserPanelHeader />
            <br />
            <div className='row g-0 mt-5 mx-auto user-panel-main'>
                <div className='col-sm-4 col-md-3 col-xl-2 py-2 px-2'><UserPanelSidebar /></div>
                <div className='col-sm-8 col-md-9 col-xl-10 py-2 px-2'>{children}</div>
            </div>
            <hr />
            <div className='container-fluid'>
                <UserPanelFooter />
            </div>
        </div>
    )
}

export default UserPanelLayout;
