import React from 'react';
import UserPanelLayout from '../layouts/UserPanelLayout';
import MyTicketList from '../components/my-tickets-components/MyTicketList';

const MyTickets = () => {
    return (
      <UserPanelLayout>
            <div>My Tickets will be here</div>
            <MyTicketList></MyTicketList>
      </UserPanelLayout>
    );
};

export default MyTickets;