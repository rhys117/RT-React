import React from 'react';
import {DISPLAY_TICKET_URL, STATUS_VALUES} from "../../../api/constants";
import SelectInput from '../../common/SelectInput';
import {valuesArrayToValueTextKeys} from '../../../helpers/inputHelpers';
import PropTypes from 'prop-types';
import dateFormat from "dateformat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from  '@fortawesome/free-solid-svg-icons'

const EditTicketListRow = ({ticket, onSaveClick, onCancelClick, onInputChange}) => {
  let formatted_date = dateFormat(ticket.lastUpdated, "dS mmmm, yyyy, h:MM TT");

  return (
    <tr className='ticket-row'>
      <td>
        <a href={DISPLAY_TICKET_URL + ticket.effectiveId} target="_blank"
           rel="noopener noreferrer">{ticket.effectiveId}</a>
      </td>
      <td>
        <SelectInput name="status"
                     value={ticket.status}
                     onChange={onInputChange}
                     options={valuesArrayToValueTextKeys(STATUS_VALUES)}
                     required={true} />

      </td>
      <td>{ticket.subject}</td>
      <td>
        <SelectInput name='owner'
                     value={ticket.owner}
                     onChange={onInputChange}
                     // TODO: Implement Users call to api and replace static list below
                     options={valuesArrayToValueTextKeys(['root', 'Nobody'])} />
      </td>
      <td>{formatted_date}</td>
      <td>

      </td>
      <td>
        <div>
          <div className='edt-button pointer d-inline-block' onClick={onSaveClick} >
            <FontAwesomeIcon icon={faCheck} color='Green' />
          </div>
          <div className='edt-button pointer d-inline-block' onClick={() => onCancelClick('Cancelled by user')} >
            <FontAwesomeIcon icon={faTimes} color='red' />
          </div>
        </div>
      </td>
    </tr>
  );
};

EditTicketListRow.propTypes = {
  ticket: PropTypes.object.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default EditTicketListRow;