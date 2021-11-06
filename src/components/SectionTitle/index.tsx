import * as S from './styles'

export type SectionHeadingProps = {
  title: string
  subtitle?: string
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    {!!subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
  </S.Wrapper>
)

export default SectionHeading
