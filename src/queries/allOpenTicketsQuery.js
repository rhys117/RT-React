import gql from 'graphql-tag';

const allOpenTicketsQuery = gql`
  {
    openTickets {
      effectiveId
      status
      subject
      due
      owner {
        name
      }
    }
  }`;

export default allOpenTicketsQuery;