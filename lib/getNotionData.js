import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getNotionData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  const sortePosts = response.results
    .slice()
    .sort((a, b) => new Date(b.properties.Date.date.start) - new Date(a.properties.Date.date.start))
  return sortePosts
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  })
  return response.results
}
