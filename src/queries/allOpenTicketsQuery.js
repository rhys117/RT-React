import gql from 'graphql-tag';

const allOpenTicketsQuery = gql`
  {
    openTickets {
      effectiveId
      status
      subject
      lastUpdated
      owner {
        name
      }
    }
  }`;

export default allOpenTicketsQuery;