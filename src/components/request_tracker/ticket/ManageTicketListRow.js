import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TicketApi from '../../../api/TicketApi';
import toastr from 'toastr';
import TicketListRow from "./TicketListRow";
import EditTicketListRow from "./EditTicketListRow";

class ManageTicketListRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket: {
        effectiveId: this.props.ticket.effectiveId,
        status: this.props.ticket.status,
        subject: this.props.ticket.subject,
        owner: this.props.ticket.owner.name,
        lastUpdated: this.props.ticket.lastUpdated
      },
      editable: false,
      ticketBeforeEdit: null
    };

    this.updateTicketState = this.updateTicketState.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveTicket = this.saveTicket.bind(this);
  }

  updateTicketState(event) {
    let ticket = this.state.ticket;

    // handle moment date change for due field [it does not have target attribute]
    if(event.target == null) {
      if(event._isAMomentObject) {
        ticket['due'] = event.format('DD/MM/YYYY HH:MM A')
      } else {
        ticket['due'] = event
      }
    } else {
      const field = event.target.name;
      ticket[field] = event.target.value;
    }

    return this.setState({ticket: ticket});
  }

  saveTicket(event) {
    // Check if changes were made to ticket
    if(JSON.stringify(this.state.ticket) === JSON.stringify(this.state.ticketBeforeEdit)) {
      this.cancelEdit('No changes made')
    } else { // save if changes made
      this.toggleEditable();
      TicketApi.saveTicketListRow(this.state.ticket)
        .then(result => {
          let ticket = this.state.ticket;
          ticket.lastUpdated = result.data.editTicket.lastUpdated;
          this.setState({ticket: ticket});
          toastr.success(result.data.editTicket.effectiveId, 'Ticket Updated')
        })
        .catch(error => toastr.error(error, "Error"))
    }

  }

  toggleEditable() {
    let reversed = !this.state.editable;
    this.setState({editable: reversed});
    // Set ticketBeforeEdit state so can reverse change and check if save needed
    if(reversed) { this.setState({ticketBeforeEdit: Object.assign({}, this.state.ticket)}) }
  }

  cancelEdit(msg) {
    this.setState({
      editable: false,
      ticket: this.state.ticketBeforeEdit
    });
    toastr.warning(msg, 'Ticket not saved')
  }

  render() {
    return this.state.editable ?
      <EditTicketListRow
        ticket={this.state.ticket}
        onSaveClick={this.saveTicket}
        onCancelClick={this.cancelEdit}
        onInputChange={this.updateTicketState} />
      : <TicketListRow ticket={this.state.ticket} editToggleClick={this.toggleEditable} />
  }
}

ManageTicketListRow.propTypes = {
  ticket: PropTypes.object.isRequired
};

export default ManageTicketListRow;