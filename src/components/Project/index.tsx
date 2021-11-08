import Image from 'next/image'
import Link from 'next/link'

import CustomLink from 'components/CustomLink'
import Tag from 'components/Tag'

import { ExternalLinkIcon } from '@modulz/radix-icons'
import * as S from './styles'

export type ProjectProps = {
  title: string
  description: string
  image: string
  linkLabel: string
  linkSource: string
  status?: string
}

const Project = ({
  title,
  description,
  image,
  linkLabel,
  linkSource,
  status
}: ProjectProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image
        src={image}
        alt={`${title}'s logo image`}
        width={640}
        height={320}
        quality={80}
        layout="responsive"
        objectFit="cover"
      />
    </S.ImageWrapper>
    <S.ContentWrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        {!!status && <Tag>{status}</Tag>}
      </S.TitleWrapper>

      <S.Description>{description}</S.Description>

      {!!linkLabel && (
        <Link href={linkSource} passHref>
          <CustomLink highlight icon={<ExternalLinkIcon />}>
            {linkLabel}
          </CustomLink>
        </Link>
      )}
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Project
