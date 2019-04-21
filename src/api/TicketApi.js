import client from './client';
import editTicketListRowMutation from "../queries/editTicketListRowMutation";


class TicketApi {
  static saveTicketListRow(ticket) {
    let variables = {
      effectiveId: ticket.effectiveId,
      owner: ticket.owner,
      status: ticket.status,
    };

    return client.mutate({
      mutation: editTicketListRowMutation,
      variables: variables
    })
  }
}

export default TicketApi;