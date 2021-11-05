import * as S from './styles'

export type TagProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'teal'
}

const Tag = ({ children, color = 'secondary' }: TagProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Tag
