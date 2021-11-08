import styled, { css, DefaultTheme } from 'styled-components'
import { TagProps } from '.'

type WrapperProps = Pick<TagProps, 'color'>

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary3};
    color: ${theme.colors.primary11};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary3};
    color: ${theme.colors.secondary11};
  `,
  teal: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.teal3};
    color: ${theme.colors.teal11};
  `
}

export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    padding: ${theme.spacing2} ${theme.spacing4};
    width: max-content;

    border-radius: ${theme.border.radiusPill};
    font-size: ${theme.font.size1};
    letter-spacing: ${theme.spacing1};
    line-height: 2rem;
    text-transform: uppercase;

    ${!!color && wrapperModifiers[color](theme)}
  `}
`
