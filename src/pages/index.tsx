import type { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

import { createClient } from '@/prismic/config'
import { components } from '@/slices'

export default function Home({
  homeData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{homeData.data.metaTitle}</title>
        <meta
          content={homeData.data.metaDescription ?? ''}
          name="description"
        />
      </Head>
      <div className="my-24">
        <SliceZone components={components} slices={homeData.data.slices} />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  homeData: Content.HomeDocument
}> = async () => {
  const client = createClient()

  const homeData = await client.getSingle('home', {
    fetchLinks: [
      'projectPage.projectName',
      'projectPage.projectBanner',
      'projectPage.projectDescription'
    ]
  })

  return {
    props: {
      homeData
    }
  }
}
