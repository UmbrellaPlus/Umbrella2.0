import { defineConfig, FieldDescription } from "tinacms";
import { tinaTableTemplate } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const cityTemplate = [
  {
    type: "string",
    label: "Название вкладки в Гугле",
    name: "tabTitle",
    ui: {
      description:
        "Например: Кодирование от алкоголизма Одесса | Umbrella Plus | От 1399 грн",
    },
  },
  {
    type: "string",
    label: "Заголовок страницы",
    name: "title",
    ui: {
      description: "Например: Кодирование от алкоголизма в Одессе",
    },
  },
  {
    type: "string",
    label: "Описание под заголовком",
    name: "description",
    ui: {
      description: "Например: Кодирование от алкоголизма в Одессе",
      component: "textarea",
    },
  },
  {
    type: "image",
    label: "Картинка",
    name: "image",
  },
  {
    type: "string",
    label: "Описание картинки (нужно для СЕО в гугле)",
    name: "imageText",
    ui: {
      description: "Например: Пациент на кровати или Капельница на штативе",
    },
  },
  {
    type: "string",
    component: "select",
    name: "reviewType",
    label: "Тип отзывов",
    description: "Выбери тип отзывов на эту страницу",
    options: [
      {
        value: "alk-1",
        label: "Алкоголизм тип 1",
      },
      {
        value: "alk-2",
        label: "Алкоголизм тип 2",
      },
      {
        value: "kod-2",
        label: "Кодирование тип 1",
      },
      {
        value: "kod-2",
        label: "Кодирование тип 2",
      },
      {
        value: "blog",
        label: "Блог",
      },
    ],
  },
  {
    type: "rich-text",
    label: "Основной текст страницы",
    name: "body",
    isBody: true,
    templates: [tinaTableTemplate],
  },
];

export default defineConfig({
  branch,
  local: { enabled: true, userRelativeMedia: true },

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
    basePath: "Umbrella2.0",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "odessa",
        label: "Одесса",
        path: "content/odessa",
        fields: [...cityTemplate],
      },
      {
        name: "kiev",
        label: "Киев",
        path: "content/kiev",
        fields: [...cityTemplate],
      },
      {
        name: "kharkiv",
        label: "Харьков",
        path: "content/kharkiv",
        fields: [...cityTemplate],
      },
      {
        name: "lviv",
        label: "Львов",
        path: "content/lviv",
        fields: [...cityTemplate],
      },
      {
        name: "dnepr",
        label: "Днепр",
        path: "content/dnepr",
        fields: [...cityTemplate],
      },
      {
        name: "zaporozje",
        label: "Запорожье",
        path: "content/zaporozje",
        fields: [...cityTemplate],
      },
      {
        name: "blog",
        label: "Блог",
        path: "content/blog",
        fields: [...cityTemplate],
      },
      {
        name: "about",
        label: "О нас",
        path: "content",
        match: {
          include: "about",
        },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Заголовок" },
          { type: "string", name: "layout", label: "Это не менять" },
          {
            type: "rich-text",
            label: "Основной текст",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
