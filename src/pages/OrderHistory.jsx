import React from 'react';
import OrderHistoryTable from '../components/order-history-components/OrderHistoryTable';
import UserPanelLayout from '../layouts/UserPanelLayout';

const OrderHistory = () => {
    return (
      <UserPanelLayout>
        <div>
                Order History
                the table will not be wide that much. 
          <OrderHistoryTable></OrderHistoryTable>
        </div>
      </UserPanelLayout>
    );
};

export default OrderHistory;