import React from 'react'
import PropTypes from 'prop-types';
import TicketListRow from './TicketListRow';

const TicketList = ({tickets}) => {
  return (
    <table className='ticket-list'>
      <thead>
      <tr>
        <th className='ticket-id'>ID</th>
        <th className='ticket-status'>Status</th>
        <th className='ticket-subject'>Subject</th>
        <th className='ticket-owner'>Owner</th>
        <th className='ticket-last-updated'>Last Updated</th>
      </tr>
      </thead>
      <tbody>
      {tickets.map(ticket =>
        <TicketListRow key={ticket.effectiveId} ticket={ticket} />
      )}
      </tbody>
    </table>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired
};

export default TicketList;