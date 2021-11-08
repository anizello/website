import Link from 'next/link'
import CustomLink from 'components/CustomLink'

import * as S from './styles'

export type CalloutStatusProps = {
  children: string
  link: string
  icon?: JSX.Element
}

const CalloutStatus = ({ children, link, icon }: CalloutStatusProps) => (
  <S.Wrapper>
    <S.ShapeCircle />
    <Link href={link} passHref>
      <CustomLink color="teal" icon={icon}>
        {children}
      </CustomLink>
    </Link>
  </S.Wrapper>
)

export default CalloutStatus
