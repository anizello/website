import { Container } from 'components/Container'
import CustomLink from 'components/CustomLink'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <Container>
      <S.SectionFooter>
        <Footer>
          Built with ⚡ using{' '}
          <CustomLink highlight href="https://nextjs.org/" target="_blank">
            NextJS
          </CustomLink>
          ,{' '}
          <CustomLink
            highlight
            href="https://styled-components.com/"
            target="_blank"
          >
            Styled Components
          </CustomLink>
          ,{' '}
          <CustomLink highlight href="https://graphcms.com/" target="_blank">
            GraphCMS
          </CustomLink>{' '}
          and{' '}
          <CustomLink highlight href="https://vercel.com/" target="_blank">
            Vercel
          </CustomLink>
          .
        </Footer>
      </S.SectionFooter>
    </Container>
  </S.Wrapper>
)

export default Base
