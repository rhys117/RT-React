import React from 'react';
import dateFormat from "dateformat";
import * as colours from '../../common/colours';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from  '@fortawesome/free-solid-svg-icons'
import {DISPLAY_TICKET_URL} from "../../../api/constants";
import PropTypes from "prop-types";

const TicketListRow = ({ticket, editToggleClick}) => {
  let formatted_date = dateFormat(ticket.lastUpdated, "dS mmmm, yyyy, h:MM TT");

  return (
    <tr>
      <td><a href={DISPLAY_TICKET_URL + ticket.effectiveId} target="_blank"
             rel="noopener noreferrer">{ticket.effectiveId}</a></td>
      <td>{ticket.status}</td>
      <td>{ticket.subject}</td>
      <td>{ticket.owner}</td>
      <td>{formatted_date}</td>
      <td>
        <div className='edt-button pointer' onClick={editToggleClick} >
          <FontAwesomeIcon icon={faEdit} color={colours.lightBlue} />
        </div>
      </td>
    </tr>
  );
};

TicketListRow.propTypes = {
  ticket: PropTypes.object.isRequired,
  editToggleClick: PropTypes.func.isRequired
};

export default TicketListRow;