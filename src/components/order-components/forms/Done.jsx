import React, { useState } from 'react';
import OrderSuccess from '../OrderSuccess';
import OrderFailed from '../OrderFailed';

const Done = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(true)
    
    return (
      <div>{paymentSuccess ? <OrderSuccess /> : <OrderFailed />}</div>
    );
};

export default Done;