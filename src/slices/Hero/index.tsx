import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

export default function Hero({
  slice
}: SliceComponentProps<Content.HeroSlice>) {
  return (
    <section className="flex flex-col items-center gap-6">
      <Image
        alt={slice.primary.heroImage.alt ?? ''}
        height={slice.primary.heroImage.dimensions?.height ?? 32}
        src={slice.primary.heroImage.url ?? ''}
        width={slice.primary.heroImage.dimensions?.width ?? 32}
      />
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </section>
  )
}
