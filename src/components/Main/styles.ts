import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: 3rem;

    background-color: ${theme.colors.primary1};
    color: ${theme.colors.primary11};
    text-align: center;
  `}
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary12};
    letter-spacing: ${theme.spacing1};
  `}
`

export const Subtitle = styled.span``
