import React from 'react'
import PropTypes from 'prop-types';
import ReminderListRow from './ReminderListRow';

const ReminderList = ({reminders}) => {
  return (
    <table className='reminder-list'>
      <thead>
      <tr>
        <th className='reminder-id'>ID</th>
        <th className='reminder-status'>Status</th>
        <th className='reminder-subject'>Reminder</th>
        <th className='reminder-owner'>Owner</th>
        <th className='reminder-due'>Due</th>
        <th className='reminder-priority'>Priority</th>
      </tr>
      </thead>
      <tbody>
      {reminders.map(reminder =>
        <ReminderListRow key={reminder.effectiveId} reminder={reminder} />
      )}
      </tbody>
    </table>
  );
};

ReminderList.propTypes = {
  reminders: PropTypes.array.isRequired
};

export default ReminderList;