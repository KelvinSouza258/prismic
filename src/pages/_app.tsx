import '@/styles/globals.css'

import { PrismicPreview } from '@prismicio/next'
import type { JSXMapSerializer } from '@prismicio/react'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

import { repositoryName } from '../prismic/config'

// façam todos, fiz só esses por perguiça
const richTextResolver: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-bold">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-3xl font-bold">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-2xl font-bold">{children}</h3>
  ),
  heading4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
  paragraph: ({ children }) => <p>{children}</p>,
  strong: ({ children }) => <strong>{children}</strong>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      // eslint-disable-next-line react/no-unstable-nested-components
      internalLinkComponent={props => <Link {...props} />}
      richTextComponents={richTextResolver}>
      {/* Vocês estão na versão 12 do next então o link é meio diferente ficaria assim
        
        <PrismicProvider internalLinkComponent={{href, children, ...props} => (
            <Link href={href} passHref>
                <a {...props}>{children}</a>
            </Link>
        )}>
        
        */}
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
