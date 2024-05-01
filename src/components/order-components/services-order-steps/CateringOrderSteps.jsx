import React from 'react';
import CateringForm from '../forms/CateringForm';


const CateringOrderSteps = [
  {
    label: "Table Number",
    path: "/order/cafe",
    component: <CateringForm />,
  },
];

export default CateringOrderSteps;