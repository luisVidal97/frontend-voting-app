import { gql } from '@apollo/client';

export const GET_CANDIDATES = gql`
  query GetCandidats {
    candidates {
        id
        age
        firstname
        lastname
        votes
        slogan
    }
  }
`;

export const INCREATE_VOTES_CANDIDATE = gql`
  mutation IncreaseVotesCandidate($id: ID!) {
    increaseVote(id: $id) {
      id
      age
      firstname
      lastname
      votes
      slogan
    }
  }
`;

export const DECREMENT_VOTES_CANDIDATE = gql`
  mutation DecrementVotesCandidate($id: ID!) {
    decrementVote(id: $id) {
      id
      age
      firstname
      lastname
      votes
      slogan
    }
  }
`;