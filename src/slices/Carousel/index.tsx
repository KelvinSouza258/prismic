import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="grid grid-cols-4"
        >
            {slice.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <PrismicRichText field={item.imageTitle} />
                    <PrismicNextImage field={item.image} />
                </div>
            ))}
        </section>
    )
}

export default Carousel
