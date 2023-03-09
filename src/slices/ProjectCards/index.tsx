import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

export default function ProjectCards({
  slice
}: SliceComponentProps<Content.ProjectCardSlice>) {
  return (
    <section className="mt-24 flex flex-col gap-6">
      <div className="basis border-b border-slate-900">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {slice.items.map((item, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="flex flex-col justify-between gap-6">
            <PrismicRichText field={item.projectTitle} />
            <div className="relative">
              <Image
                alt={item.projectImage.alt ?? ''}
                height={item.projectImage.dimensions?.height ?? 400}
                src={item.projectImage.url ?? ''}
                width={item.projectImage.dimensions?.width ?? 400}
              />
              <div className="relative">
                <div className="absolute bottom-full w-full bg-gradient-to-t from-neutral-800 px-4 pb-4 pt-8 text-white">
                  <PrismicRichText field={item.projectDescription} />
                </div>
              </div>
            </div>
            <PrismicLink field={item.projectLink}>Saiba Mais</PrismicLink>
          </div>
        ))}
      </div>
    </section>
  )
}
