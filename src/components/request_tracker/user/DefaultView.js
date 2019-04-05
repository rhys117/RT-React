import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {connect} from 'react-redux';
import toastr from 'toastr';
import usersPageTicketsQuery from '../../../queries/usersPageTicketsQuery';
import LoadingDots from '../../common/LoadingDots';



export class UserDefaultView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId
    }
  }

  render() {
    let userId = this.state.userId;

    return (
      <Query
        query={usersPageTicketsQuery}
        variables={{ id: userId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading<LoadingDots interval={100} dots={20}/></p>;

          return (
            <main>
              <h2>{this.props.username}</h2>
              <section className='row card-deck'>
                <div className='col-8 card' id='users-current-tickets'>
                  <div className='card-body'>
                    <h5 className="card-title">Open Tickets</h5>
                  </div>
                </div>

                <div className='col-4 card' id='users-current-reminders'>
                  <div className='card-body'>
                    <h5 className="card-title">Current Reminders</h5>
                  </div>
                </div>
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
    userId: state.userId
  }
}

export default connect(mapStateToProps)(UserDefaultView);