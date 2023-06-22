import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '@/slices'
import { PrismicRichText } from '@prismicio/react'

export default async function Home() {
    const client = createClient()
    const homepage = await client.getSingle('homepage')

    return (
        <main>
            <PrismicRichText
                field={homepage.data.title}
                components={{
                    heading1: ({ children }) => (
                        <h1 className="text-2xl">{children}</h1>
                    ),
                    heading2: ({ children }) => (
                        <h2 className="text-xl">{children}</h2>
                    ),
                }}
            />
            <SliceZone slices={homepage.data.slices} components={components} />
        </main>
    )
}
