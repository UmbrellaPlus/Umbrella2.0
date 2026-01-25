import { defineConfig } from "tinacms";
import { homePageNews, homePageTemplate, cityTemplate, blogTemplate, googleFeedbackTemplate } from "./fieldsReuse/commonFields";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

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
      mediaRoot: "img",
      publicFolder: "assets",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      //MAIN-PAGE-NEWS
      {
        name: "homepagenews_ru",
        label: "Слайдер на главной странице - RU",
        path: "content/ru-lang/homepage",
        match: {
          exclude: "_index",
        },
        fields: [...homePageNews],
        ui: { allowedActions: { createNestedFolder: false } },
      },
      {
        name: "homepagenews_ua",
        label: "Слайдер на главной странице - UA",
        path: "content/ua-lang/homepage",
        match: {
          exclude: "_index",
        },
        fields: [...homePageNews],
        ui: { allowedActions: { createNestedFolder: false } },
      },
      //MAIN-PAGE
      {
        name: "home_ru",
        label: "Главная страница-RU",
        path: "content/ru-lang",
        match: {
          include: "_index",
        },
        fields: [...homePageTemplate],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false,
          },
        },
      },
      {
        name: "home_ua",
        label: "Главная страница-UA",
        path: "content/ua-lang",
        match: {
          include: "_index",
        },
        fields: [...homePageTemplate],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false,
          },
        },
      },
      //CITIES-RU
      {
        name: "filials_ru_odessa",
        label: "Ф-RU Одесская обл.",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include: "{chornomorsk/**/*,odessa/**/*}",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_kharkov",
        label: "Ф-RU Харьковская обл.",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include: "{chuguev/**/*,kharkiv/**/*}",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_dnepr",
        label: "Ф-RU Днепровская обл.",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include: "{dnepr/**/*,kamianske/**/*}",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_kiev",
        label: "Ф-RU Киевская обл.",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include: "kiev/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_lvov",
        label: "Ф-RU Львовская обл.",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include: "lviv/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_cherkasy",
        label: "Ф-RU Черкасская обл.",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include: "cherkasy/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_zaporozie",
        label: "Ф-RU Запорожская обл.",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include: "zaporozie/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      //COUNTRIES-RU
      {
        name: "filials_ru_azerbaidjan",
        label: "Ф-RU ДРУГИЕ СТРАНЫ",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{azerbaidjan-baky/**/*,gruziya-tbilisi/**/*,kazahstan-almaty/**/*,moldova-kishinev/**/*,polsha-varsava/**/*}",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      //CITIES-UA
      {
        name: "filials_ua_odesa",
        label: "Ф-UA Одесская обл",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include: "{chornomorsk/**/*,odesa/**/*}",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_kharkiv",
        label: "Ф-UA Харьковская обл.",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include: "{chuguev/**/*,kharkiv/**/*}",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_dnepr",
        label: "Ф-UA Днепровская обл.",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include: "{dnepr/**/*,kamianske/**/*}",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_lviv",
        label: "Ф-UA Львовская обл.",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include: "lviv/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_kiev",
        label: "Ф-UA Киевская обл.",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include: "kiev/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_cherkasy",
        label: "Ф-UA Черкасская обл.",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include: "cherkasy/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_zaporozie",
        label: "Ф-UA Запорожская обл.",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include: "zaporozie/**/*",
          exclude: "*",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      //COUNTRIES UA
      //BLOG
      {
        name: "blog_ru",
        label: "Блог-RU",
        path: "content/ru-lang/blog",
        fields: [...blogTemplate],
        match: {
          exclude: "_index",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "blog_ua",
        label: "Блог-UA",
        path: "content/ua-lang/blog",
        fields: [...blogTemplate],
        match: {
          exclude: "_index",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      //SERVICES-NEW
      {
        name: "services_ru",
        label: "Услуги-RU",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{services/**/*,services-khymioterapiya/**/*,services-nark/**/*,services-otravlenie/**/*,services-vitamini/**/*}",
          exclude:
            "{blog/**/*,cherkasy/**/*,chornomorsk/**/*,chuguev/**/*,dnepr/**/*,kamianske/**/*,kharkiv/**/*,kiev/**/*,lviv/**/*,odessa/**/*,zaporozie/**/*,directory/**/*,reviews/**/*,_index,about-us,collaboration,contacts}",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "services_ua",
        label: "Услуги-UA",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{services/**/*,services-khimioterapiya/**/*,services-nark/**/*,services-otryenya/**/*,services-vitaminy/**/*}",
          exclude:
            "{blog/**/*,cherkasy/**/*,chornomorsk/**/*,chuguev/**/*,dnepr/**/*,kamianske/**/*,kharkiv/**/*,kiev/**/*,lviv/**/*,odessa/**/*,zaporozie/**/*,directory/**/*,reviews/**/*,_index,about-us,collaboration,contacts}",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      //DOVIDNYK
      // {
      //   name: "directory_ru",
      //   label: "Справочник-RU",
      //   path: "content/ru-lang/directory",
      //   fields: [...cityTemplate],
      // },
      // {
      //   name: "directory_ua",
      //   label: "Справочник-UA",
      //   path: "content/ua-lang/directory",
      //   fields: [...cityTemplate],
      // },
      //GOOGLE-OTZIVY-INDEX
      {
        name: "googleReviewsRate",
        label: "Google-Rating:Колл+Оцен",
        path: "content/shared/reviewsGoogle",
        match: { include: "_index" },
        format: "md",
        fields: [
          {
            type: "string",
            label: "Колличество отзывов (напр 52)",
            name: "reviewsAmt",
          },
          {
            type: "string",
            label: "Оценка (напр 4.8)",
            name: "reviewsRate",
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false,
          },
        },
      },
      //GOOGLE-OTZIVY
      {
        name: "googleReviews",
        label: "Google-Rating:Отзывы",
        path: "content/shared/reviewsGoogle",
        match: { exclude: "_index" },
        fields: [...googleFeedbackTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      //LOCAL-OTZIVY
      {
        name: "localReviews",
        label: "Локальные-отзывы",
        path: "content/shared/reviewsLocal",
        match: {
          exclude: "**/_index",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
        fields: [
          {
            type: "string",
            label: "Автор",
            name: "Title",
          },
          {
            type: "rich-text",
            label: "Текст",
            name: "body",
            isBody: true,
          },
        ],
        defaultItem: () => {
          return {
            Title: "Анонимно",
          };
        },
      },
      //O NAS I SOTRYDNICHESTVO
      {
        name: "menuPages_ru",
        label: "О нас и Сотрудничество-RU",
        path: "content/ru-lang",
        match: {
          include: "{about-us,collaboration}",
        },
        fields: [
          {
            type: "rich-text",
            label: "Текст",
            name: "body",
            isBody: true,
          },
        ],
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false,
          },
        },
      },
      {
        name: "menuPages_ua",
        label: "О нас и Сотрудничество-UA",
        path: "content/ua-lang",
        match: {
          include: "{about-us,collaboration}",
        },
        fields: [
          {
            type: "rich-text",
            label: "Текст",
            name: "body",
            isBody: true,
          },
        ],
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false,
          },
        },
      },
    ],
  },
});
