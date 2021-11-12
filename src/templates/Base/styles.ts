import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100vh;
    padding: ${theme.spacing7} 0 ${theme.spacing10};

    color: ${theme.colors.primary11};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    margin-top: ${theme.grid.gutter};
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.grid.gutter};

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.grid.gutter} * 3);
    `}
  `}
`
