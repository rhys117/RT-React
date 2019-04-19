import gql from 'graphql-tag';

const usersPageTicketsQuery = gql`
  query user($id: ID!) {
    user(id: $id) {
      tickets(filter: {
        status: "new",
        OR: {
          status: "open"
        }
      }) {
        effectiveId
        status
        subject
        lastUpdated
        owner {
          name
        }
      }
      
      reminders(filter:{
        status: "new",
        OR: {
          status: "open"
        }
      }) {
        effectiveId
        status
        subject
        priority
        due
        ticket {
          effectiveId
          status
          owner {
            name
          }
        }
      }
    }
  }
`;

export default usersPageTicketsQuery