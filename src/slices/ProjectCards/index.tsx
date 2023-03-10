import type { Content } from '@prismicio/client'
import { isFilled } from '@prismicio/helpers'
import { PrismicNextImage } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

type ProjectData = Pick<
  Content.ProjectPageDocument['data'],
  'projectBanner' | 'projectName' | 'projectDescription'
>

function isProjectData(data: unknown): data is ProjectData {
  return !!(
    (data as ProjectData).projectName &&
    (data as ProjectData).projectBanner &&
    (data as ProjectData).projectDescription
  )
}

export default function ProjectCards({
  slice
}: SliceComponentProps<Content.ProjectCardSlice>) {
  return (
    <section className="mt-24 flex flex-col gap-6">
      <div className="basis border-b border-slate-900">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {slice.items.map((item, index) =>
          isFilled.contentRelationship(item.project) &&
          isProjectData(item.project.data) ? (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="flex flex-col justify-between gap-6">
              <PrismicRichText field={item.project.data.projectName} />
              <div className="relative">
                <PrismicNextImage field={item.project.data.projectBanner} />
                <div className="relative">
                  <div className="absolute bottom-full w-full bg-gradient-to-t from-neutral-800 px-4 pb-4 pt-8 text-white">
                    <PrismicRichText
                      field={item.project.data.projectDescription}
                    />
                  </div>
                </div>
              </div>
              <PrismicLink href={item.project.url}>Saiba Mais</PrismicLink>
            </div>
          ) : null
        )}
      </div>
    </section>
  )
}
