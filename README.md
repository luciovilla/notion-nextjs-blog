# A Next.js, Notion and Tailwind CSS starter blog template 

This is an open-source starter blog template that is statically generated with Next.js, content powered by Notion and styled with Tailwind CSS.

*Still a work in progress.*

**Live example hosted on Vercel**: [https://blog.luciovilla.com](https://blog.luciovilla.com)

## Getting Started

1. Clone this repo `git clone https://github.com/luciovilla/notion-nextjs-blog.git`
2. Install its dependencies `npm install`
3. Copy or rename the `.env.example` file to `.env.local`
4. Personalize the page meta data in `Container.js`

## Creating Your Notion Pages Table

1. Create a blank page in Notion
2. Create a table on that page.
3. Add the following columns to the table:
- `Page` (type: title): this the blog post's headline and meta title.
- `Slug` (text): this is the blog post's URL slug.
- `Date` (date): the display date and meta published_time property.
- `Description` (text): this is the preview text on the homepage and the meta description property.
- `Published` (checkbox): this checks if a blog post should be displayed when deployed. 
- `Cover Image` (files & media): optional - adds a cover image for a post on the frontpage and becomes the featured image on social (og:image, twitter card image).

View this sample template table in [Notion](https://vast-rifle-eed.notion.site/8dde3326f8cb4cc68b47a96bea86e9be).

## Getting Database ID and Notion Token

- Create a [Notion Integration](https://www.notion.so/my-integrations).
- Copy and paste the Integration Token in the `.env.local` file: `NOTION_TOKEN=____`
- On the Notion page, click the "Share" button in the top right and  share the database with the Notion Integration you just created
- In a browser, go to the Notion page and grab the Database ID from the URL. Its the part of the URL after your workspace name and the slash and before the question mark. The ID is 32 characters long, containing numbers and letters.
- Paste your Database ID in the `.env.local` file: `NOTION_DATABASE_ID=___`

## Creating Blog Posts

1. In Notion click new on the table to add a new row
2. Fill in the Page title, Slug, Date and Description
3. Keep the Description text short, as it will be the text that shows up on the homepage as the post's preview text.

## Running Locally

Run `npm run dev`

## Deploy your own

Deploy your own Notion blog with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fluciovilla%2Fnotion-nextjs-blog&env=NOTION_TOKEN,NOTION_DATABASE_ID&envDescription=Notion%20Integration%20token%20and%20Database%20ID%20required.&envLink=https%3A%2F%2Fblog.luciovilla.com%2Fnotion-blog-setup-instructions&project-name=notion-blog)

## Credits
Thankful for the following people as I was inspired by their code:
- [samuelkraft](https://github.com/samuelkraft/notion-blog-nextjs)
- [ijjk](https://github.com/ijjk/notion-blog)
- [leerob](https://github.com/leerob/leerob.io)
