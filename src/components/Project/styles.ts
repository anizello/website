import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing7};

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    filter: grayscale(100%);
  }
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing4};
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing3};

    ${media.lessThan('small')`
      flex-direction: column-reverse;

    `}

    ${media.greaterThan('small')`
      justify-content: space-between;
      align-items: center;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary12};
    font-size: ${theme.font.size5};
    letter-spacing: ${theme.spacing1};
    text-transform: uppercase;
  `}
`

export const Description = styled.p``
