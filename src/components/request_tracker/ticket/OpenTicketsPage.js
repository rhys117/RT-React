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
          subject
          due
          owner {
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading<LoadingDots interval={100} dots={20}/></p>;
      if (error) return <p>Error</p>;
      console.log(data);
      return (
        <table>
          <thead>
            <th>ID</th>
            <th>Subject</th>
            <th>Owner</th>
            <th>Due</th>
          </thead>
          <tbody>
          {data.openTickets.map(ticket =>
            <TicketListRow key={ticket.effectiveId} ticket={ticket} />
          )}
          </tbody>
        </table>
      )
    }}
  </Query>
);

export default OpenTicketsPage;