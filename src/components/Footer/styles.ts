import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing7};

    padding: ${theme.spacing4} 0 ${theme.spacing9};

    border-top: 1px solid ${theme.colors.primary6};

    ${media.greaterThan('medium')`
      flex-direction: row;
      justify-content: space-between;
    `}
  `}
`

export const ContentWrapper = styled.div`
  ${media.greaterThan('medium')`
    max-width: 50rem;
  `}
`
