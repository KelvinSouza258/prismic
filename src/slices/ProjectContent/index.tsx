import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'

export default function ProjectContent({
  slice
}: SliceComponentProps<Content.ProjectContentSlice>) {
  return (
    <section className="mt-12 flex flex-col gap-6">
      {slice.items.map(item => (
        <div
          key={String(item.paragraph)}
          className="flex flex-col items-center gap-6">
          <PrismicNextImage field={item.image} />
          <PrismicRichText field={item.paragraph} />
        </div>
      ))}
    </section>
  )
}
