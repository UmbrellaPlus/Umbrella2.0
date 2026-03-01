import { defineConfig } from "tinacms";
import { homePageNews } from "./fieldsReuse/homePageNews";
import { homePageTemplate } from "./fieldsReuse/homePageTemplate";
import { cityTemplate } from "./fieldsReuse/cityTemplate";
import { blogTemplate } from "./fieldsReuse/blogTemplate";
import { googleFeedbackTemplate } from "./fieldsReuse/googleFeedbackTemplate";
import { faq } from "./fieldsReuse/faq";
import celebration from "./fieldsReuse/celebration";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

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
      publicFolder: "assets",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      //CHOOSE THE CELEBRATION
      {
        name: "celebration",
        label: "Выбор праздника",
        path: "content/celebration",
        match: {
          include: "settings",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false,
          },
        },
        fields: [...celebration],
      }, //MAIN-PAGE
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
      //CITIES-RU
      {
        name: "filials_ru_odessa",
        label: "Ф-RU Одесса",
        path: "content/ru-lang/odessa",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_chernomorsk",
        label: "Ф-RU - Черноморск",
        path: "content/ru-lang/chornomorsk",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_kharkov",
        label: "Ф-RU Харьков",
        path: "content/ru-lang/kharkiv",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_chuguev",
        label: "Ф-RU - Чугуев",
        path: "content/ru-lang/chuguev",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_dnepr",
        label: "Ф-RU Днепр",
        path: "content/ru-lang/dnepr",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_kamianske",
        label: "Ф-RU - Каменское",
        path: "content/ru-lang/kamianske",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_kiev",
        label: "Ф-RU Киев",
        path: "content/ru-lang/kiev",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_lvov",
        label: "Ф-RU Львов",
        path: "content/ru-lang/lviv",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_cherkasy",
        label: "Ф-RU Черкассы",
        path: "content/ru-lang/cherkasy",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ru_zaporozie",
        label: "Ф-RU Запорожье",
        path: "content/ru-lang/zaporozie",
        fields: [...cityTemplate],
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
            create: false,
            delete: false,
          },
        },
      },
      //CITIES-UA
      {
        name: "filials_ua_odesa",
        label: "Ф-UA Одесса",
        path: "content/ua-lang/odesa",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_chornomorsk",
        label: "Ф-UA - Черноморск",
        path: "content/ua-lang/chornomorsk",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_kharkiv",
        label: "Ф-UA Харьков",
        path: "content/ua-lang/kharkiv",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_chuguev",
        label: "Ф-UA - Чугуев",
        path: "content/ua-lang/chuguev",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_dnepr",
        label: "Ф-UA Днепр",
        path: "content/ua-lang/dnepr",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_kamianske",
        label: "Ф-UA - Каменское",
        path: "content/ua-lang/kamianske",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_lviv",
        label: "Ф-UA Львов",
        path: "content/ua-lang/lviv",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_kiev",
        label: "Ф-UA Киев",
        path: "content/ua-lang/kiev",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_cherkasy",
        label: "Ф-UA Черкассы",
        path: "content/ua-lang/cherkasy",
        fields: [...cityTemplate],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua_zaporozie",
        label: "Ф-UA Запорожье",
        path: "content/ua-lang/zaporozie",
        fields: [...cityTemplate],
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
          exclude: "*",
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
          exclude: "*",
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
        label: "О нас и Сотрудничество, Политика Конф-RU",
        path: "content/ru-lang",
        match: {
          include: "{about-us,collaboration,privacy-policy}",
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
        label: "О нас и Сотрудничество, Политика Конф-UA",
        path: "content/ua-lang",
        match: {
          include: "{about-us,collaboration,privacy-policy}",
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
      //FAQRU
      {
        name: "faq_ru",
        label: "RU-FAQ",
        path: "content/ru-lang/faq",
        match: { exclude: "_index" },
        fields: [...faq],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      }, //FAQUA
      {
        name: "faq_ua",
        label: "UA-FAQ",
        path: "content/ua-lang/faq",
        match: { exclude: "_index" },
        fields: [...faq],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
    ],
  },
});
