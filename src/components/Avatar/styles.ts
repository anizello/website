import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { ImageWrapper as Profile } from 'components/Profile/styles'

export const Avatar = styled(AvatarPrimitive.Root)`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    vertical-align: middle;

    width: 16rem;
    height: 16rem;

    background-color: ${theme.colors.primary3};
    border-radius: ${theme.border.radiusRound};
    overflow: hidden;
    user-select: none;

    ${Profile} & {
      ${media.lessThan('medium')`
        width: ${theme.spacing11};
        height: ${theme.spacing11};
      `}
    }
  `}
`

export const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;

  border-radius: inherit;
  object-fit: cover;
`

export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: ${theme.colors.primary11};
    font-size: ${theme.font.size9};
  `}
`
