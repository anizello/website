import * as S from './styles'

export type AvatarProps = {
  image?: string
  alt: string
}

const Avatar = ({ image, alt }: AvatarProps) => (
  <S.Avatar>
    <S.AvatarImage src={image} alt={alt} />
    <S.AvatarFallback delayMs={600}>{alt.charAt(0)}</S.AvatarFallback>
  </S.Avatar>
)

export default Avatar
