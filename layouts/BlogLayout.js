import Container from '../components/Container'

export default function BlogLayout({ children, data }) {
  return (
    <Container
      title={data.properties.Post.title[0].plain_text}
      description={data.properties.Description.rich_text[0].plain_text}
      date={new Date(data.properties.Date.date.start)}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        {children}
      </article>
    </Container>
  )
}
