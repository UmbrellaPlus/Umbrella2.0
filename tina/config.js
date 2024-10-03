import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  local: { enabled: true, userRelativeMedia: true },

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static/img",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "cities",
        label: "Города + Блог",
        path: "content",
        match: { exclude: "{contact,about,_index}" },
        fields: [
          {
            type: "string",
            label: "Название вкладки в Гугле",
            name: "tabTitle",
          },
          {
            type: "string",
            label: "Заголовок страницы",
            name: "Title",
          },
          {
            type: "string",
            label: "Описание под заголовком",
            name: "Description",
          },
          {
            type: "image",
            label: "Картинка",
            name: "image",
          },
          {
            type: "rich-text",
            label: "Основной текст страницы",
            name: "body",
            isBody: true,
          },
        ],
      },
      {
        name: "contact",
        label: "Контакт",
        path: "content",
        match: {
          include: "contact",
        },
        format: "md",
        fields: [{ type: "string", name: "title", label: "Title" }],
      },
      {
        name: "about",
        label: "О нас",
        path: "content",
        match: {
          include: "about",
        },
        format: "md",
        fields: [{ type: "string", name: "title", label: "Title" }],
      },
    ],
  },
});
