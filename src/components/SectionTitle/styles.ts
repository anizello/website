import styled, { css } from 'styled-components'
import { Wrapper as Home } from 'templates/Home/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing1};

    ${Home} & {
      margin-bottom: ${theme.spacing7};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary12};
    font-size: ${theme.font.size5};
    font-weight: ${theme.font.weightExtraBold};
    letter-spacing: ${theme.spacing1};
  `}
`

export const Subtitle = styled.p``
