## Intro

This is the TeachT3ch website revamped. It's build in NextJs and uses Styled Components for styling. Check out below how deploy and test environment.
It is directly deployed in Vercel, and the repository `main` branch will automatically deploy.

## Adding Event info bar

Modify the file placed into `/utils/eventBarInfo.js` with the following info:

```js
export const eventBarInfo = {
  showUntilTimeStamp: null,
  eventTitle: (
    <p>
      No te pierdas las <span className="bold">Winter Sessions 2021</span>. No
      te pierdas las Winter Sessions 2021. No te pierdas las Winter Sessions
      2021. No te pierdas las Winter Sessions 2021.
    </p>
  ),
  eventLinkText: "Comprueba el calendario 👉",
  eventLinkURL: "/blog",
};
```

Where:

- `showUntilTimeStamp`: the bar will be displaying this event until this date. Enter it in timestamp format, number. If empty, the event bar will always show on load.
- `eventTitle`: the text that will describe the event. Bar will grow according to this text. Max recommended 160 char. Ideal: 100 char.
- `eventLinkText`: the text of the link if any.
- `eventLinkURL`: the URL where the link must head to.

## Writing posts in the blog

This website has a Markdown (MDX) blog. In order to write a post, you just need to create a new `.mdx` file in the folder `/posts`.

It is **very important** that the post contains a header frontmatter with the following information:

```js
---
title: La infraestructura como código, una introducción
slug: la-infraestructura-como-codigo
tags: [Clases, DevOps]
featuredImg: infra.jpg
summary: Desde el "hierro" a la "nube" han cambiado muchas cosas en el mundo de la Infraestructura y el Devops. En las últimas Winter Sessions, el profe Nacho nos ha contado cómo ha sido esta evolución y cómo se hace actualmente.
userName: nanythery
publishDate: "2021-12-06"
---

```

- `title`: The title to be shown for the post
- `slug`: Choose the slug for this post, preferrably keep it just like file name.
- `tags`: Write all the tags within the array that can be aplicable to this post.
- `featuredImg`: The featured image should be uploaded to the folder `/public/img/posts` in this field only write the name of the file and the extension.
- `summary`: Write a summary to be shown in the featured post description.
- `userName`: Enter the autor userName. If you don't have one, there's a generic TTStaff one.
- `publishDate`: Enter the publish date in format "YYYY-MM-DD".

Don't forget to include the `---` before and after the fields.

You can start writing right away, following the same MarkDown format rules as usual.

### Special components

MDX files allows you to insert custom components. Since this blog has a custom format, there are several custom components you can use:

- To insert images:
  - `<CustomImage src='the full path-absolute or relative' alt="the description"/>`
- To insert videos:
  - `<YTvideo id='the id of the video' />`

## Adding teachers and mentors to staff

1. Add a new entry to [staff.json](utils/staff.json).
2. Add a jpg image to the [team](public/img/team) folder. The name must be the person's name in lowercase with dashes instead of spaces. For example `Rubén de Alba` maps to `ruben-de-alba.jpg`.
3. Optionally, add an `mp4` following the same naming as the image. This will be displayed on hover. We normally get them from https://giphy.com which allows you to download gifs as mp4. The reason to use mp4 instead of gifs is to save a ton of bandwidth.

See [this commit](https://github.com/NanyThery/tt-web-react/commit/9b6b35b6245ed7e66c3fd78622836956605217f5) for a real example.

## Tech debt

- Cookie banner: we decided to postpone this banner since the website does not use cookies at the moment.
- Adding a custom check box according to the original design.

### Refactor

- Unify all badges used in home, blog and profes

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
