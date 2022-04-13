import {gql} from '@apollo/client';

export const loginUser = gql`
mutation login($email: String! $password: String!){
    login(email: $email, password: $password){
        token user { _id username}
    }
}
`;

export const createUser = gql`
mutation addUser($username: String!, $email: String!,$password: String!){
    addUser(username: $username, email: $email, password: $password){
        token user{
            _id username
        }
    }
}
`;

