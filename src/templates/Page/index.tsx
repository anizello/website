import Base from 'templates/Base'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Base>
    <S.Wrapper>
      <S.Heading>{heading}</S.Heading>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Wrapper>
  </Base>
)

export default PageTemplate
