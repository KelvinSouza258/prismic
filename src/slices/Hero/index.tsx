import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'

export default function Hero({
  slice
}: SliceComponentProps<Content.HeroSlice>) {
  return (
    <section className="flex flex-col items-center gap-6">
      <PrismicNextImage field={slice.primary.heroImage} />
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </section>
  )
}
