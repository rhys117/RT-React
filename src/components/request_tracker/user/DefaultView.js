import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {connect} from 'react-redux';
import usersPageTicketsQuery from '../../../queries/usersPageTicketsQuery';
import LoadingDots from '../../common/LoadingDots';
import TicketList from '../ticket/TicketList';
import ReminderList from "../reminder/ReminderList";
import LoadMissingRemindersList from '../reminder/LoadMissingRemindersList';

export class UserDefaultView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      username: props.username
    }
  }

  render() {
    return (
      <Query
        query={usersPageTicketsQuery}
        variables={{ id: this.state.userId }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading<LoadingDots interval={100} dots={20}/></p>;
          if (error) return <p>Whoops! Something went wrong.</p>;

          return (
            <main>
              <section className='card' id='users-current-tickets'>
                <div className='card-body'>
                  <h5 className="card-title">Open Tickets</h5>
                  { data.user.tickets.length > 0 ?
                    <TicketList tickets={data.user.tickets}/>
                    :
                    <h5>Job Done!</h5>
                  }
                </div>
              </section>

              <section className='card' id='users-current-reminders'>
                <div className='card-body'>
                  <h5 className="card-title">Current Reminders</h5>
                  <ReminderList reminders={data.user.reminders}/>
                </div>
                <LoadMissingRemindersList userId={this.state.userId} />
              </section>
            </main>
          )
        }}
      </Query>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userId: state.userId,
    username: state.username
  }
}

export default connect(mapStateToProps)(UserDefaultView);