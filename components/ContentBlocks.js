export const RenderBlocks = ({ blocks }) => {
  return blocks.map((block) => {
    const { type, id } = block
    const value = block[type]

    switch (type) {
      case 'paragraph':
        return <Text text={value.rich_text} id={id} key={id} />

      case 'heading_1':
        return <Heading text={value.rich_text} id={id} level={type} key={id} />

      case 'heading_2':
        return <Heading text={value.rich_text} id={id} level={type} key={id} />

      case 'heading_3':
        return <Heading text={value.rich_text} id={id} level={type} key={id} />

      case 'bulleted_list_item':
      case 'numbered_list_item':
        return <ListItem key={id} value={value} id={id} />

      case 'to_do':
        return <ToDo key={id} value={value} />

      case 'toggle':
        return <Toggle key={id} value={value} />

      case 'image':
        const imageSrc = value.type === 'external' ? value.external.url : value.file.url
        const caption = value.caption.length ? value.caption[0].plain_text : ''
        return (
          <figure key={id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={caption} src={imageSrc} />
            {caption && <figcaption className="mt-2">{caption}</figcaption>}
          </figure>
        )

      default:
        return `Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`
    }
  })
}

const SpanText = ({ text, id }) => {
  if (!text) return null

  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value
    return (
      <span
        key={id + i}
        className={[
          bold ? 'font-bold' : '',
          code ? 'bg-gray-100 p-1 font-mono text-sm rounded-md' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a href={text.link.url} className="underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    )
  })
}

const Text = ({ text, id }) => {
  return (
    <p className="mb-4 text-gray-700">
      <SpanText text={text} id={id} />
    </p>
  )
}

const ListItem = ({ value, id }) => {
  return (
    <li>
      <SpanText text={value.rich_text} id={id} />
    </li>
  )
}

const Heading = ({ text, level }) => {
  switch (level) {
    case 'heading_1':
      return (
        <h1 className="my-2 text-3xl font-bold tracking-tight text-black md:text-5xl">
          <SpanText text={text} />
        </h1>
      )
    case 'heading_2':
      return (
        <h2 className="my-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
          <SpanText text={text} />
        </h2>
      )
    case 'heading_3':
      return (
        <h3 className="my-2 text-lg font-bold tracking-tight text-black md:text-xl">
          <SpanText text={text} />
        </h3>
      )
    default:
      return null
  }
}

const ToDo = ({ id, value }) => {
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
        <SpanText text={value.rich_text} />
      </label>
    </div>
  )
}

const Toggle = ({ value }) => {
  return (
    <details>
      <summary className="cursor-pointer">{value.rich_text[0].text.content}</summary>
      {value.children?.map((block) => {
        if (block.type === 'paragraph') {
          return <Text key={block.id} text={block.paragraph.rich_text} id={block.id} />
        }
      })}
    </details>
  )
}
