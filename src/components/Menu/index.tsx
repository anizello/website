import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CustomLink from 'components/CustomLink'
import MediaMatch from 'components/MediaMatch'

import LogoImage from '../../../public/img/logo.svg'
import {
  GitHubLogoIcon as GithubIcon,
  HamburgerMenuIcon
} from '@modulz/radix-icons'
import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Image
              src={LogoImage}
              alt="main logo with the letter a"
              width={32}
              height={32}
              layout="fixed"
            />
          </a>
        </Link>

        <S.MenuGroup>
          <Link href="https://github.com/anizello" passHref>
            <CustomLink icon={<GithubIcon />} target="_blank" rel="noopener">
              Github
            </CustomLink>
          </Link>
        </S.MenuGroup>
      </S.LogoWrapper>

      <MediaMatch greaterThan="small">
        <S.MenuGroup>
          <Link href="/about" passHref>
            <CustomLink>About</CustomLink>
          </Link>
          <Link href="/#projects" passHref>
            <CustomLink>Projects</CustomLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <MediaMatch lessThan="small">
        <S.DropdownMenu>
          <S.DropdownMenuTrigger asChild>
            <S.IconButton
              aria-label="Pages menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HamburgerMenuIcon />
            </S.IconButton>
          </S.DropdownMenuTrigger>
          <S.DropdownMenuContent sideOffset={8}>
            <Link href="/about" passHref>
              <S.DropdownMenuItem>About</S.DropdownMenuItem>
            </Link>
            <Link href="/#projects" passHref>
              <S.DropdownMenuItem>Projects</S.DropdownMenuItem>
            </Link>
          </S.DropdownMenuContent>
        </S.DropdownMenu>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Menu
