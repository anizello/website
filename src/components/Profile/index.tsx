import CalloutStatus from 'components/CalloutStatus'
import Avatar from 'components/Avatar'

import { PaperPlaneIcon } from '@modulz/radix-icons'
import * as S from './styles'

export type ProfileProps = {
  name: string
  description: string
  calloutText?: string
  calloutLink?: string
}

const Profile = ({
  name,
  description,
  calloutText,
  calloutLink
}: ProfileProps) => (
  <S.Wrapper>
    <S.ContentWrapper>
      {!!calloutText && (
        <CalloutStatus
          link={calloutLink ? calloutLink : '/'}
          icon={<PaperPlaneIcon />}
        >
          {calloutText}
        </CalloutStatus>
      )}

      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.ContentWrapper>

    <S.ImageWrapper>
      <Avatar
        alt="Fernando's Avatar"
        image="https://avatars.githubusercontent.com/anizello"
      />
    </S.ImageWrapper>
  </S.Wrapper>
)

export default Profile
