import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="p-1 text-gray-900 hover:underline sm:p-4"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Nav() {
  return (
    <nav className="mx-auto my-0 flex w-full max-w-4xl items-center justify-center p-8 md:my-8">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <div>
        <Link href="/" className="p-1 text-gray-900 hover:underline sm:p-4">
          Home
        </Link>
        <ExternalLink href="https://twitter.com/luciovilla">Contact</ExternalLink>
        <ExternalLink href="https://github.com/luciovilla/notion-nextjs-blog">
          Source Code
        </ExternalLink>
      </div>
    </nav>
  )
}
