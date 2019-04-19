import React from 'react'
import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import TicketList from '../ticket/TicketList';
import LoadingDots from '../../common/LoadingDots';
import usersTicketsMissingRemindersQuery from '../../../queries/usersTicketsMissingRemindersQuery';

const LoadMissingRemindersList = ({userId}) => {
  return (
    <Query
      query={usersTicketsMissingRemindersQuery}
      variables={{ id: userId }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div className="card-body">
              <h5 class="card-title">Searching for tickets missing reminders<LoadingDots interval={100} dots={20}/></h5>
            </div>
          );
        }

        if (error) return <p>Whoops! Something went wrong.</p>;
        debugger;
        return (
          <div>
            {
              data.user.ticketsMissingReminder.length > 0 &&
              <div className='card-body'>
                <h5 className="card-title">Tickets Without Reminders</h5>
                <TicketList tickets={data.user.ticketsMissingReminder}/>
              </div>
            }
          </div>
        )
      }}
    </Query>
  );
};

LoadMissingRemindersList.propTypes = {
  userId: PropTypes.number.isRequired
};

export default LoadMissingRemindersList;