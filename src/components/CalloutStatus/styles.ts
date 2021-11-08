import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing4};
  `}
`

export const ShapeCircle = styled.span`
  ${({ theme }) => css`
    display: block;
    flex-shrink: 0;

    width: ${theme.spacing3};
    height: ${theme.spacing3};

    background-color: ${theme.colors.teal11};
    border-radius: ${theme.border.radiusRound};

    animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 hsla(166, 69%, 53%, 0.7);
      }

      70% {
        box-shadow: 0 0 0 8px hsla(166, 69%, 53%, 0);
      }

      100% {
        box-shadow: 0 0 0 0 hsla(166, 69%, 53%, 0);
      }
    }
  `}
`
