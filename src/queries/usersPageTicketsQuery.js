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
        owner {
          name
        }
        due
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