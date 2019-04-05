import gql from 'graphql-tag'

const loginMutation = gql`
  mutation signinUserMutation($username: String!, $password: String!) {
    signinUser(credentials: {
      username: $username,
      password: $password
    })
    {
      token
      user {
        name
        id
      }
    }
  }
`;

export default loginMutation;