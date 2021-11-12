import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

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
