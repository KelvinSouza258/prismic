import type { Content } from '@prismicio/client'
import { PrismicError } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next'
import Head from 'next/head'

import { createClient } from '@/prismic/config'
import { components } from '@/slices'

export default function Project({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{project.data.metaTitle}</title>
      </Head>
      <section className="my-24 flex flex-col items-center gap-8">
        <PrismicRichText field={project.data.projectName} />
        <PrismicNextImage field={project.data.projectBanner} />
        <SliceZone components={components} slices={project.data.slices} />
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()

  const projects = await client.getByType('projectPage', {
    pageSize: 1,
    page: 1
  })

  const paths = projects.results.map(project => ({
    params: {
      uid: project.uid
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<{
  project: Content.ProjectPageDocument
}> = async ({ params }) => {
  const client = createClient()

  const UID = (params?.uid as string | undefined) ?? ''
  try {
    const project = await client.getByUID('projectPage', UID)

    return {
      props: {
        project
      }
    }
  } catch (e) {
    if (
      e instanceof PrismicError &&
      e.message === 'No documents were returned'
    ) {
      return {
        notFound: true
      }
    }

    throw e
  }
}
