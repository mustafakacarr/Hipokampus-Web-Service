import React from 'react';
import UserPanelHeader from '../components/user-panel-components/UserPanelHeader';
import UserPanelFooter from '../components/user-panel-components/UserPanelFooter';

const UserPanelLayout = ({children}) => {
    return (
        <div>
            <UserPanelHeader/>
            <br />
            <div className='row g-0 mt-5 mx-auto user-panel-main'>
                <div className='py-2 px-4'>{children}</div>
            </div>
            <hr />
            <div className='container-fluid'><UserPanelFooter /></div>
        </div>
    );
};

export default UserPanelLayout;
