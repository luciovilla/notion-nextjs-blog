import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="mb-8 w-full border border-gray-200" />

      <div className="grid w-full max-w-2xl grid-cols-1 pb-16 sm:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-gray-500 transition hover:text-gray-600">
            Home
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <ExternalLink href="https://twitter.com/luciovilla">Contact</ExternalLink>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <ExternalLink href="https://github.com/luciovilla/notion-nextjs-blog">
            Source Code
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
