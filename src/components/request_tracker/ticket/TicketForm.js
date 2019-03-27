import React from 'react';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';

// Todo: all queue names
let allQueueNames = [];

const TicketForm = ({ticket, onSave, onChange, saving, errors})=> {
  return (
    <form>
      <h1>Create Ticket</h1>
      <TextInput
        name="subject"
        label="Subject"
        value={ticket.subject}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="queueName"
        label="Queue"
        value={ticket.queueName}
        defaultOption="Select Queue"
        options={allQueueNames}
        onChange={onChange} error={errors.queueName}/>

    </form>
  )
};

export default TicketForm;