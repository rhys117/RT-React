import React from 'react';
import {Query} from 'react-apollo';
import LoadingDots from './../../common/LoadingDots';
import TicketList from './TicketList';
import allOpenTicketsQuery from '../../../queries/allOpenTicketsQuery';

const OpenTicketsPage = () => (
  <Query
    query={allOpenTicketsQuery}
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