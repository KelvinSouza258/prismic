import { PrismicRichText, SliceZone } from '@prismicio/react'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
        <Image
          alt={project.data.projectBanner.alt ?? ''}
          height={project.data.projectBanner.dimensions?.height ?? 500}
          src={project.data.projectBanner.url ?? ''}
          width={project.data.projectBanner.dimensions?.width ?? 500}
        />
        <SliceZone components={components} slices={project.data.slices} />
      </section>
    </>
  )
}

export const getStaticPaths = async () => {
  const client = createClient()

  const projects = await client.getAllByType('projectPage')

  const paths = projects.map(project => ({
    params: {
      uid: project.uid
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const client = createClient()

  const UID = (params?.uid as string | undefined) ?? ''

  const project = await client.getByUID('projectPage', UID)

  return {
    props: {
      project
    }
  }
}
