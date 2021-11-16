import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'

import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { GetPagesQuery } from 'graphql/generated/graphql'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES)

  const fields = pages.map(({ slug }) => ({
    loc: `https://www.anizello.com/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push({
    loc: 'https://www.anizello.com',
    lastmod: new Date().toISOString()
  })

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
