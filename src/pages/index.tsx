import { SliceZone } from '@prismicio/react'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { createClient } from '@/prismic/config'
import { components } from '@/slices'

export default function Home({
  homeData
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticProps = async ({
  previewData
}: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  const homeData = await client.getSingle('home')

  return {
    props: {
      homeData
    }
  }
}
