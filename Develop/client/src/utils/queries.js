import {gql} from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
        _id username email saveBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }
}`