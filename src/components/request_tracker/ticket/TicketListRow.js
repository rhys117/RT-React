import React from 'react';
import PropTypes from 'prop-types';
import {DISPLAY_TICKET_URL} from "../../../api/constants";
import dateFormat from 'dateformat';

const TicketListRow = ({ticket}) => {
  let formatted_date = dateFormat(ticket.lastUpdated, "dS mmmm, yyyy, h:MM TT");

  return (
    <tr>
      <td><a href={DISPLAY_TICKET_URL + ticket.effectiveId} target="_blank" rel="noopener noreferrer">{ticket.effectiveId}</a></td>
      <td>{ticket.status}</td>
      <td>{ticket.subject}</td>
      <td>{ticket.owner.name}</td>
      <td>{formatted_date}</td>
    </tr>
  );
};

TicketListRow.propTypes = {
  ticket: PropTypes.object.isRequired
};

export default TicketListRow;