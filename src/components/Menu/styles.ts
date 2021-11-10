import styled, { css } from 'styled-components'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing7};

    img {
      border-radius: ${theme.border.radius1};
    }
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing4};
  `}
`

const StyledContent = styled(DropdownMenuPrimitive.Content)`
  ${({ theme }) => css`
    min-width: 10rem;
    padding: ${theme.spacing3};

    background-color: ${theme.colors.primary3};
    border-radius: ${theme.border.radius1};
    color: ${theme.colors.primary11};
  `}
`

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  ${({ theme }) => css`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    height: ${theme.spacing5};
    padding: ${theme.spacing2};

    border-radius: ${theme.border.radius1};
    cursor: pointer;

    &:focus {
      background-color: ${theme.colors.primary5};
    }
  `}
`

export const IconButton = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: ${theme.spacing7};
    height: ${theme.spacing7};

    background-color: ${theme.colors.primary3};
    border: unset;
    border-radius: ${theme.border.radiusRound};
    color: ${theme.colors.primary11};
    cursor: pointer;

    &:hover,
    &[data-state='open'] {
      background-color: ${theme.colors.primary5};
    }
  `}
`

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuContent = StyledContent
export const DropdownMenuItem = StyledItem
