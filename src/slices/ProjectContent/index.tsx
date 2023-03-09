import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

export default function ProjectContent({
  slice
}: SliceComponentProps<Content.ProjectContentSlice>) {
  return (
    <section className="mt-12 flex flex-col gap-6">
      {slice.items.map(item => (
        <div
          key={String(item.paragraph)}
          className="flex flex-col items-center gap-6">
          {item.image.url ? (
            <Image
              alt={item.image.alt ?? ''}
              height={item.image.dimensions?.height ?? 400}
              src={item.image.url}
              width={item.image.dimensions?.width ?? 400}
            />
          ) : null}
          <PrismicRichText field={item.paragraph} />
        </div>
      ))}
    </section>
  )
}
