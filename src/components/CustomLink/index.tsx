import { forwardRef, AnchorHTMLAttributes } from 'react'

import * as S from './styles'

export type CustomLinkProps = {
  color?: 'primary' | 'teal'
  icon?: JSX.Element
  highlight?: boolean
  as?: React.ElementType
} & AnchorHTMLAttributes<HTMLAnchorElement>

const CustomLink: React.ForwardRefRenderFunction<
  S.WrapperProps,
  CustomLinkProps
> = (
  { children, icon, color = 'primary', highlight = false, ...props },
  ref
) => (
  <S.Wrapper
    color={color}
    highlight={highlight}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {!!children && <span>{children}</span>} {icon}
  </S.Wrapper>
)

export default forwardRef(CustomLink)
