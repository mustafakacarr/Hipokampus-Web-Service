import React from 'react';
import MeetingRoomReservationForm from '../forms/MeetingRoomReservationForm';

const MeetingRoomOrderSteps =  [
     {
       label: "Reservation",
       path: "/order/reservation",
       component: <MeetingRoomReservationForm />,
     },
   ];


export default MeetingRoomOrderSteps;