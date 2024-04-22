import React from 'react';

const TicketCard = () => {
    return (
      <div className="col-12">
        <div class="card m-2">
          <div class="card-body">
            <h5 class="card-title">Ticket 1</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Ticket Datas: Event Name, Owner Name, Order Code, Event Datetime
              etc
            </h6>
            <p class="card-text">
              the ticket cards will be horizontal, however we can prefer to put
              data side by side in the card. It has not to be under each other
              like this
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
};

export default TicketCard;