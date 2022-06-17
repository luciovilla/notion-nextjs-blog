import { useRouter } from 'next/router'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Container(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'A Next.js, Notion, Tailwind CSS starter blog template',
    description: `An open-source starter blog template that is statically generated with Next.js, content powered by Notion and styled with Tailwind CSS.`,
    type: 'website',
    image: '/site.png',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://blog.luciovilla.com${router.asPath}`} />
        <link rel="canonical" href={`https://blog.luciovilla.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image ?? '/site.png'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@luciovilla" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image ?? '/site.png'} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Nav />
      <main id="skip" className="px-4">
        {children}
        <Footer />
      </main>
    </>
  )
}
