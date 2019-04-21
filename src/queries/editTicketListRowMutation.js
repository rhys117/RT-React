import gql from 'graphql-tag'

const EditTicketListRowMutation = gql`
  mutation editTicketMutation($effectiveId: ID!, $status: String!, $owner: String!) {
    editTicket(
      effectiveId: $effectiveId,
      attributes: {
        status: $status,
        owner: $owner
      }
    ) {
      effectiveId
      lastUpdated
    }  
  }
`;

export default EditTicketListRowMutation;