import styled, { css } from 'styled-components'
import { Container } from 'components/Container'

export const Wrapper = styled(Container).attrs({ as: 'main' })`
  ${({ theme }) => css`
    section {
      padding: ${theme.spacing9} 0 ${theme.spacing7};
    }
  `}
`
