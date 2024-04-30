import React from 'react';
import CafeForm from '../forms/CafeForm';


const VirtualOfficeOrderSteps = [
  {
    label: "Table Number",
    path: "/order/cafe",
    component: <CafeForm />,
  },
];

export default VirtualOfficeOrderSteps;