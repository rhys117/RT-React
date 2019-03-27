import React from 'react';
import PropTypes from 'prop-types';

const rt_ticket_url = 'http://localhost/Ticket/Display.html?id=';

const TicketListRow = ({ticket}) => {
  return (
    <tr>
      <td><a href={rt_ticket_url + ticket.effectiveId} target="_blank">{ticket.effectiveId}</a></td>
      <td>{ticket.subject}</td>
      <td>{ticket.owner.name}</td>
      <td>{ticket.due}</td>
    </tr>
  );
};

TicketListRow.propTypes = {
  ticket: PropTypes.object.isRequired
};

export default TicketListRow;