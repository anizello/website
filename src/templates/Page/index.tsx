import { NextSeo } from 'next-seo'

import Base from 'templates/Base'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Base>
    <NextSeo
      title={`${heading} · Anizello`}
      description="A little about how I got in programming and my goals."
    />
    <S.Wrapper>
      <S.Heading>{heading}</S.Heading>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Wrapper>
  </Base>
)

export default PageTemplate
