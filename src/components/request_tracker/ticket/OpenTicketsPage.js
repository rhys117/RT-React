import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import LoadingDots from './../../common/LoadingDots';
import TicketListRow from "./TicketListRow";

const OpenTicketsPage = () => (
  <Query
    query={gql`
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
      }
    `}
    // Fetch policy so reloads when changing routes (does not use cached data)
    fetchPolicy='network-only'
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading<LoadingDots interval={100} dots={20}/></p>;
      if (error) return <p>Error</p>;

      console.log(data);
      return (
        <div>
          <h2>Open Tickets</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Subject</th>
                <th>Owner</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
            {data.openTickets.map(ticket =>
              <TicketListRow key={ticket.effectiveId} ticket={ticket} />
            )}
            </tbody>
          </table>
        </div>
      )
    }}
  </Query>
);

export default OpenTicketsPage;