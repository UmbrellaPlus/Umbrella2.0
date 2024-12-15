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
      description:
        "Например: Благодаря нашему подходу во всех случаях мы эффективно и успешно вылечиваем женский алкоголизм",
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
    label: "Среднее оценивание страницы",
    name: "ratingAvarage",
    ui: {
      description: "Например: 4.9/5. Ставить нужно именно точку . и именно /",
    },
  },
  {
    type: "string",
    label: "Сколько человек оценили",
    name: "rating",
    ui: {
      description: "Например: 495",
    },
  },
  {
    type: "string",
    component: "select",
    name: "reviewType",
    label: "Тип отзывов",
    description:
      "Алкоголизм тип 1 - запой, женский, пивной; тип 2 - просто позитивные отзывы, Кодирование 1 и 2 особо не различаються",
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
        name: "odessa-ru",
        label: "Одесса-русский-язык",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{vivod-iz-zapoya,vivod-iz-zapoya-na-domu-odessa,podshivka-ot-alkogolya-odessa,poshivka-ot-alc,pivnoy-alkogolism,lechenie-alkogolizma-odessa,lechenie-alc,kodirovka-ukolom-espiral,kodirovka-ukolom-disulfiram,kodirovanie-ukolom,kodirovanie-ot-alc,kodirovanie-dovgenko,kapelnitsya-ot-alc,kapelnitsya-ot-alc-na-domu-odessa,genskiy-alc}",
        },
        format: "md",
      },
      {
        name: "odessa-ua",
        label: "Одесса-украинский-язык",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{vivod-iz-zapoya,vivod-iz-zapoya-na-domu-odessa,podshivka-ot-alkogolya-odessa,poshivka-ot-alc,pivnoy-alkogolism,lechenie-alkogolizma-odessa,lechenie-alc,kodirovka-ukolom-espiral,kodirovka-ukolom-disulfiram,kodirovanie-ukolom,kodirovanie-ot-alc,kodirovanie-dovgenko,kapelnitsya-ot-alc,kapelnitsya-ot-alc-na-domu-odessa,genskiy-alc}",
        },
        format: "md",
      },
      {
        name: "kiev-ru",
        label: "Киев-русский-язык",
        path: "content/ru-lang/kiev",
        fields: [...cityTemplate],
      },
      {
        name: "kiev-ua",
        label: "Киев-украинский-язык",
        path: "content/ua-lang/kiev",
        fields: [...cityTemplate],
      },
      {
        name: "kharkiv-ru",
        label: "Харьков-русский-язык",
        path: "content/ru-lang/kharkiv",
        fields: [...cityTemplate],
      },
      {
        name: "kharkiv-ua",
        label: "Харьков-украинский-язык",
        path: "content/ua-lang/kharkiv",
        fields: [...cityTemplate],
      },
      {
        name: "lviv-ru",
        label: "Львов-русский-язык",
        path: "content/ru-lang/lviv",
        fields: [...cityTemplate],
      },
      {
        name: "lviv-ua",
        label: "Львов-украинский-язык",
        path: "content/ua-lang/lviv",
        fields: [...cityTemplate],
      },
      {
        name: "dnepr-ru",
        label: "Днепр-русский-язык",
        path: "content/ru-lang/dnepr",
        fields: [...cityTemplate],
      },
      {
        name: "dnepr-ua",
        label: "Днепр-украинский-язык",
        path: "content/ua-lang/dnepr",
        fields: [...cityTemplate],
      },
      {
        name: "zaporozje-ru",
        label: "Запорожье-русский-язык",
        path: "content/ru-lang/zaporozie",
        fields: [...cityTemplate],
      },
      {
        name: "zaporozje-ua",
        label: "Запорожье-украинский-язык",
        path: "content/ua-lang/zaporozie",
        fields: [...cityTemplate],
      },
      {
        name: "blog-ru",
        label: "Блог-русский-язык",
        path: "content/ru-lang/blog",
        fields: [...cityTemplate],
      },
      {
        name: "blog-ua",
        label: "Блог-украинский-язык",
        path: "content/ua-lang/blog",
        fields: [...cityTemplate],
      },
      {
        name: "services-ru",
        label: "Услуги-русккий-язык",
        path: "content/ru-lang/services",
        fields: [...cityTemplate],
      },
      {
        name: "services-ua",
        label: "Услуги-украинский-язык",
        path: "content/ua-lang/services",
        fields: [...cityTemplate],
      },
      {
        name: "about-ru",
        label: "О нас-русский-язык",
        path: "content/ru-lang",
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
      {
        name: "about-ua",
        label: "О нас-украинский-язык",
        path: "content/ua-lang",
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
