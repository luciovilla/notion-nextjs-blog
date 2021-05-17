import { Fragment } from 'react'
import BlogLayout from '../layouts/BlogLayout'
import { getNotionData, getPage, getBlocks } from '../lib/getNotionData'
import { Text, ListItem } from '../components/ContentBlocks'

const databaseId = process.env.NOTION_DATABASE_ID

const renderBlock = (block) => {
  const { type, id } = block
  const value = block[type]
  const { text } = value

  switch (type) {
    case 'paragraph':
      return <Text text={value.text} id={id} />

    case 'heading_1':
      return (
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-2 text-black">
          {text[0].text.content}
        </h1>
      )

    case 'heading_2':
      return (
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight my-2 text-black">
          {text[0].text.content}
        </h2>
      )

    case 'heading_3':
      return (
        <h3 className="font-bold text-lg md:text-xl tracking-tight my-2 text-black">
          {text[0].text.content}
        </h3>
      )

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <ListItem text={value.text} id={id} />
        </li>
      )

    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} /> {text[0].text.content}
          </label>
        </div>
      )

    case 'toggle':
      return (
        <details>
          <summary>{text[0].text.content}</summary>
          Toggle contents dont come through the API yet...
        </details>
      )

    default:
      return `Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`
  }
}

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />
  }
  const postTitle = page.properties.Post.title[0].plain_text
  return (
    <BlogLayout data={page} content={blocks}>
      <span className="text-sm text-gray-700">
        {new Date(page.created_time).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })}
      </span>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-5 text-black">{postTitle}</h1>

      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}
    </BlogLayout>
  )
}

export const getStaticPaths = async () => {
  const database = await getNotionData(databaseId)
  return {
    paths: database.map((page) => ({
      params: {
        slug: page.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params
  const database = await getNotionData(databaseId)
  const filter = database.filter((blog) => blog.properties.Slug.rich_text[0].plain_text === slug)
  const page = await getPage(filter[0].id)
  const blocks = await getBlocks(filter[0].id)

  return {
    props: {
      page,
      blocks,
    },
  }
}
