import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import LoadingDots from './../../common/LoadingDots';
import TicketList from './TicketList';

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
      if (error) return <p>Whoops! Something went wrong.</p>;

      return (
        <div className='open-tickets'>
          <h2>Open Tickets</h2>
          <TicketList tickets={data.openTickets} />
        </div>
      )
    }}
  </Query>
);

export default OpenTicketsPage;