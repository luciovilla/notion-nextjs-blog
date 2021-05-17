export const Text = ({ text, id }) => {
  if (!text) return null
  return (
    <p className="mb-4 text-gray-700">
      {text.map((value, i) => {
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
              italic ? 'italic break-all' : '',
              strikethrough ? 'line-through' : '',
              underline ? 'underline' : '',
            ].join(' ')}
            style={color !== 'default' ? { color } : {}}
          >
            {text.link ? <a href={text.link.url} className="underline">{text.content}</a> : text.content}
          </span>
        )
      })}
    </p>
  )
}
export const ListItem = ({ text, id }) => {
  if (!text) return null
  return (
    <p className="mb-1 inline text-gray-700">
      {text.map((value, i) => {
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
            {text.link ? <a href={text.link.url} className="underline">{text.content}</a> : text.content}
          </span>
        )
      })}
    </p>
  )
}
