import React from 'react';
import PropTypes from 'prop-types';
import {DISPLAY_TICKET_URL} from "../../../api/constants";
import dateFormat from 'dateformat';

const ReminderListRow = ({reminder}) => {
  let formatted_date = dateFormat(reminder.due, "dS mmmm, yyyy, h:MM TT");
  return (
    <tr>
      <td><a href={DISPLAY_TICKET_URL + reminder.ticket.effectiveId} target="_blank" rel="noopener noreferrer">{reminder.ticket.effectiveId}</a></td>
      <td>{reminder.ticket.status}</td>
      <td>{reminder.subject}</td>
      <td>{reminder.ticket.owner.name}</td>
      <td>{formatted_date}</td>
      <td>{reminder.priority}</td>
    </tr>
  );
};

ReminderListRow.propTypes = {
  reminder: PropTypes.object.isRequired
};

export default ReminderListRow;