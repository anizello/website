import Profile, { ProfileProps } from 'components/Profile'
import Project, { ProjectProps } from 'components/Project'
import SectionTitle from 'components/SectionTitle'

import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  profile: ProfileProps
  projects: ProjectProps[]
}

const HomeTemplate = ({ profile, projects }: HomeTemplateProps) => (
  <Base>
    <S.Wrapper>
      {!!profile && <Profile {...profile} />}

      {projects?.length && (
        <section id="projects">
          <SectionTitle
            title="Projects"
            subtitle="Stuff I've been working on recently."
          />

          {projects.map((project) => (
            <Project
              key={`Project-${project.image}`}
              {...project}
              linkLabel="See Project"
            />
          ))}
        </section>
      )}
    </S.Wrapper>
  </Base>
)

export default HomeTemplate
