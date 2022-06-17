import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto mb-8 w-full max-w-2xl">
      <hr className="mb-8 w-full border border-gray-200" />

      <div className="grid grid-cols-1 pb-16 w-full max-w-2xl sm:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
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
