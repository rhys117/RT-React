import gql from 'graphql-tag';

const usersPageTicketsQuery = gql`
  query user($id: ID!) {
    user(id: $id) {
      ticketsMissingReminder {
        effectiveId
        status
        subject
        lastUpdated
        owner {
          name
        }
      }
    }
  }
`;

export default usersPageTicketsQuery;