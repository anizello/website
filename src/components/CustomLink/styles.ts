import styled, { css, DefaultTheme } from 'styled-components'

import { CustomLinkProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<CustomLinkProps, 'color' | 'highlight'>

const wrapperModifiers = {
  hasHighlight: (theme: DefaultTheme) => css`
    text-decoration-line: underline;
    text-underline-offset: ${theme.spacing2};
  `,

  hasIcon: (theme: DefaultTheme) => css`
    svg {
      vertical-align: text-bottom;
      margin-left: ${theme.spacing2};
    }
  `,

  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary11};
    text-decoration-color: ${theme.colors.primary6};

    &:hover {
      color: ${theme.colors.primary12};
      text-decoration-color: ${theme.colors.primary8};
    }
  `,

  teal: (theme: DefaultTheme) => css`
    color: ${theme.colors.teal11};
    text-decoration-color: ${theme.colors.teal6};

    &:hover {
      color: ${theme.colors.teal12};
      text-decoration-color: ${theme.colors.teal8};
    }
  `
}

export const Wrapper = styled.a<WrapperProps>`
  ${({ theme, color, highlight, hasIcon }) => css`
    position: relative;
    display: inline-block;

    cursor: pointer;
    text-decoration-line: none;
    white-space: nowrap;

    &:hover {
      transition: color text-decoration-color ${theme.transition.default};
    }

    ${!!color && wrapperModifiers[color](theme)}
    ${highlight && wrapperModifiers.hasHighlight(theme)}
    ${!!hasIcon && wrapperModifiers.hasIcon(theme)}
  `}
`
