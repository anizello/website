import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    gap: ${theme.spacing7};

    position: relative;

    ${media.greaterThan('medium')`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: ${theme.spacing8};
    `}
  `}
`

export const ImageWrapper = styled.span``

export const ContentWrapper = styled.blockquote`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing4};

    ${media.greaterThan('medium')`
      padding-left: ${theme.spacing8};
      border-left: 1px solid ${theme.colors.primary6};
    `}
  `}
`

export const Name = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary12};
    font-size: ${theme.font.size6};
    letter-spacing: ${theme.spacing1};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size7};
    `}
  `}
`

export const Description = styled.p``
