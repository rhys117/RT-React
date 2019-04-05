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
        subject
      }
      
      reminders(filter:{
        status: "new",
        OR: {
          status: "open"
        }
      }) {
        status
        subject
        refersTo {
          effectiveId
        }
      }
    }
  }
`;

export default usersPageTicketsQuery