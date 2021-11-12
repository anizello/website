import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

import client from 'graphql/client'
import { GET_PROFILE_BY_ID, GET_PROJECTS } from 'graphql/queries'
import {
  GetProfileByIdQuery,
  GetProjectsQuery
} from 'graphql/generated/graphql'

export default function Home({ projects, profile }: HomeTemplateProps) {
  return <HomeTemplate projects={projects} profile={profile} />
}

export const getStaticProps = async () => {
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS)
  const { profile } = await client.request<GetProfileByIdQuery>(
    GET_PROFILE_BY_ID,
    { id: 'ckvv750h43gro0b80wyihzi03' }
  )

  return {
    props: {
      revalidate: 60,
      profile,
      projects:
        projects?.length &&
        projects.map((project) => ({
          ...project,
          image: project.image?.url
        }))
    }
  }
}
