import Link from 'next/link'
import CustomLink from 'components/CustomLink'

import { ExternalLinkIcon } from '@modulz/radix-icons'
import * as S from './styles'

export type FooterProps = {
  children: React.ReactNode
}

const Footer = ({ children }: FooterProps) => (
  <S.Wrapper>
    <S.ContentWrapper>{children}</S.ContentWrapper>

    <Link href="https://github.com/anizello/website" passHref>
      <CustomLink highlight icon={<ExternalLinkIcon />} target="_blank">
        Website Repository
      </CustomLink>
    </Link>
  </S.Wrapper>
)

export default Footer
