import React from 'react';
import UserPanelHeader from '../components/user-panel-components/UserPanelHeader';
import UserPanelSidebar from '../components/user-panel-components/UserPanelSidebar';
import UserPanelFooter from '../components/user-panel-components/UserPanelFooter';

const UserPanelLayout = ({children}) => {
    return (
        <div>
            <UserPanelHeader/>
            <br />
            <div className='row g-0 mt-5'>
                <div className='col-sm-2 p-2'><UserPanelSidebar /></div>
                <div className='col-sm-10'>{children}</div>
            </div>
            <hr />
            <div className='container-fluid'><UserPanelFooter /></div>
        </div>
    );
};

export default UserPanelLayout;