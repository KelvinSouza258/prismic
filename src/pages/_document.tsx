import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt_BR">
      <Head />
      <body className="bg-slate-100 dark:bg-slate-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
