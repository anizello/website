import styled, { css } from 'styled-components'

import { Container } from 'components/Container'

export const Wrapper = styled(Container).attrs({ as: 'main' })`
  ${({ theme }) => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: ${theme.spacing5};

      color: ${theme.colors.primary12};
      letter-spacing: ${theme.spacing1};
      font-weight: ${theme.font.weightExtraBold};
    }

    img {
      width: 100%;
      height: auto;
      margin-bottom: ${theme.spacing8};
    }

    a {
      position: relative;
      display: inline-block;

      color: ${theme.colors.teal11};
      cursor: pointer;
      text-decoration-color: ${theme.colors.teal6};
      text-decoration-line: underline;
      text-underline-offset: ${theme.spacing2};
      white-space: nowrap;

      &:hover {
        transition: color text-decoration-color ${theme.transition.default};

        color: ${theme.colors.teal12};
        text-decoration-color: ${theme.colors.teal8};
      }
    }

    p {
      margin-bottom: ${theme.spacing5};
    }

    code,
    pre {
      font-family: ${theme.font.familyCode};

      background-color: ${theme.colors.primary3};
      border-radius: ${theme.border.radius1};
      border: 1px solid ${theme.colors.primary6};
    }

    code {
      padding: 0 ${theme.spacing2};
    }

    pre {
      padding: ${theme.spacing3};
      margin-bottom: ${theme.spacing5};

      max-width: 100%;
      white-space: pre-wrap;
    }

    pre code {
      border: none;
    }

    blockquote {
      margin: ${theme.spacing8} 0;
      padding-left: ${theme.spacing5};

      border-left: 1px solid ${theme.colors.primary6};
      font-size: ${theme.font.size3};
      line-height: ${theme.spacing6};
    }

    ul,
    ol {
      padding-inline-start: ${theme.spacing5};
      margin-bottom: ${theme.spacing5};
    }

    ul li,
    ol li {
      padding-top: ${theme.spacing2};
      padding-bottom: ${theme.spacing2};
    }

    ul {
      list-style-position: outside;
      list-style-image: none;
    }

    strong {
      font-weight: ${theme.font.weightExtraBold};
    }
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    padding-top: ${theme.spacing9};
    text-transform: uppercase;
  `}
`
