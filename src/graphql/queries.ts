import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      title
      description
      image {
        url
      }
      linkSource
      statusTag
    }
  }
`

export const GET_PROFILE_BY_ID = gql`
  query getProfileById($id: ID!) {
    profile(where: { id: $id }) {
      name
      description
      calloutText
      calloutLink
    }
  }
`
