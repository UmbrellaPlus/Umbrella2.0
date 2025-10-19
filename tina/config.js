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
    ],
  },
  {
    type: "rich-text",
    label: "Основной текст страницы",
    name: "body",
    isBody: true,
  },
];

const blogTemplate = [
  {
    type: "string",
    label: "Название вкладки в Гугле",
    name: "tabTitle",
    ui: {
      description:
        "Например: 3 способа выхода из запоя на дому | Umbrella Plus",
    },
  },
  {
    type: "string",
    label: "Заголовок страницы",
    name: "title",
    ui: {
      description: "Например: 3 способа выхода из запоя на дому",
    },
  },
  {
    type: "string",
    label: "Описание под заголовком",
    name: "description",
    ui: {
      description:
        "Например: Благодаря нашим советам вы успешно выйдите из запоя с первой попытки",
      component: "textarea",
    },
  },
  {
    type: "datetime",
    label: "Дата добавления",
    name: "date",
    ui: {
      description:
        "Выбери дату. Нужно для сортировки в актуальных новостях и на странице блога. +отображается в самой статье",
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
      description: "Например: 2295",
    },
  },
  {
    type: "rich-text",
    label: "Основной текст страницы",
    name: "body",
    isBody: true,
  },
];

const feedbackTemplate = [
  {
    type: "string",
    label: "Ник пользователя написавшего отзыв",
    name: "Title",
  },
  {
    type: "string",
    label: "Ссылка на картинку",
    name: "img",
    ui: {
      description:
        "Переходишь на страницу пользователя, который написал отзыв, потом правой кнопкой на аватар- Скопировать ссылку на картинку",
    },
  },
  {
    type: "string",
    label: "Ссылка на пост",
    name: "link",
    ui: {
      description:
        "Можно найти внизу под отзывом нажав на значок, справа от пальца. Нажимаешь на ссылку, чтобы скопировать.",
    },
  },
  {
    type: "rich-text",
    label: "Текст отзыва",
    name: "body",
    isBody: true,
  },
  {
    type: "string",
    label: "Колличество отзывов (напр 52)",
    name: "reviewsAmt",
    ui: {
      description:
        "ТОЛЬКО ДЛЯ СТРАНИЦЫ _index в отзывах. В других оставлять пустыми",
    },
  },
  {
    type: "string",
    label: "Оценка (напр 4.8)",
    name: "reviewsRate",
    ui: {
      description:
        "ТОЛЬКО ДЛЯ СТРАНИЦЫ _index в отзывах. В других оставлять пустыми",
    },
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
      //CITIES
      {
        name: "odessa_ru",
        label: "Одесса-RU",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{vizov-narkologa-od,vivod-iz-zapoya,vivod-iz-zapoya-na-domu-odessa,vivod-iz-zapoia-od,vivod-iz-zapoia-na-domy-od,podshivka-ot-alkogolya-odessa,podshivka-ot-alkogolia-od,poshivka-ot-alc,pivnoy-alkogolism,lechenie-pivnogo-alkogolizma-od,lechenie-jenskogo-alkogolizma,lechenie-alkogolizma-odessa,lechenie-alkogolizma-od,lechenie-alc,kodirovka-ukolom-espiral,kodirovka-ukolom-disulfiram,kodirovka-ot-alkogolia-ykolom-esperal-od,kodirovka-ot-alkogolia-od,kodirovka-ot-alkogolia-ykol-disylfiram-od,kodirovanie-ukolom,kodirovanie-po-dovjenko-od,kodirovanie-dovgenko,kapelnitsya-ot-alc,kapelnitsya-ot-alc-na-domu-odessa,kapelnica-ot-alkogolizma-na-domy-od,kapelnica-ot-alkogolia-od,genskiy-alc}",
        },
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
        name: "odessa_ua",
        label: "Одесса-UA",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{kapelnica-ot-alkogolia-na-domu-od-ua,kapelnica-ot-alkogolia-od-ua,kodirovanie-po-dovjenko-od-ua,kodirovka-ot-alkogolia-od-ua,kodirovka-ot-alkogolia-ykol-disylfiram-od-ua,kodirovka-ot-alkogolia-ykolom-esperal-od-ua,lechenie-alc,lechenie-alkogolizma-od-ua,lechenie-jenskogo-alkogolizma-od-ua,lechenie-pivnogo-alkogolizma-od-ua,podshivka-ot-alkogolia-od-ua,vivod-iz-zapoia-na-domu-od-us,vivod-iz-zapoia-na-domy-od-ua,vivod-iz-zapoia-od-ua,vizov-narkologa-od-ua}",
        },
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
        name: "kiev_ru",
        label: "Киев-RU",
        path: "content/ru-lang/kiev",
        fields: [...cityTemplate],
      },
      {
        name: "kiev_ua",
        label: "Киев-UA",
        path: "content/ua-lang/kiev",
        fields: [...cityTemplate],
      },
      {
        name: "kharkiv_ru",
        label: "Харьков-RU",
        path: "content/ru-lang/kharkiv",
        fields: [...cityTemplate],
      },
      {
        name: "kharkiv_ua",
        label: "Харьков-UA",
        path: "content/ua-lang/kharkiv",
        fields: [...cityTemplate],
      },
      {
        name: "lviv_ru",
        label: "Львов-RU",
        path: "content/ru-lang/lviv",
        fields: [...cityTemplate],
      },
      {
        name: "lviv_ua",
        label: "Львов-UA",
        path: "content/ua-lang/lviv",
        fields: [...cityTemplate],
      },
      {
        name: "dnepr_ru",
        label: "Днепр-RU",
        path: "content/ru-lang/dnepr",
        fields: [...cityTemplate],
      },
      {
        name: "dnepr_ua",
        label: "Днепр-UA",
        path: "content/ua-lang/dnepr",
        fields: [...cityTemplate],
      },
      {
        name: "zaporozje_ru",
        label: "Запорожье-RU",
        path: "content/ru-lang/zaporozie",
        fields: [...cityTemplate],
      },
      {
        name: "zaporozje_ua",
        label: "Запорожье-UA",
        path: "content/ua-lang/zaporozie",
        fields: [...cityTemplate],
      },
      {
        name: "chornomorsk_ru",
        label: "Черноморск-RU",
        path: "content/ru-lang/chornomorsk",
        fields: [...cityTemplate],
      },
      {
        name: "chornomorsk_ua",
        label: "Черноморск-UA",
        path: "content/ua-lang/chornomorsk",
        fields: [...cityTemplate],
      },
      {
        name: "kamianske_ru",
        label: "Каменское-RU",
        path: "content/ru-lang/kamianske",
        fields: [...cityTemplate],
      },
      {
        name: "kamianske_ua",
        label: "Каменское-UA",
        path: "content/ua-lang/kamianske",
        fields: [...cityTemplate],
      },
      //BLOG
      {
        name: "blog_ru",
        label: "Блог-RU",
        path: "content/ru-lang/blog",
        fields: [...blogTemplate],
      },
      {
        name: "blog_ua",
        label: "Блог-UA",
        path: "content/ua-lang/blog",
        fields: [...blogTemplate],
      },
      //SERVICES
      {
        name: "lech_alc_ru",
        label: "Услуги-Лечение-алкоголизма-RU",
        path: "content/ru-lang/services",
        fields: [...cityTemplate],
      },
      {
        name: "lech_nark_ru",
        label: "Услуги-Лечение-накромании-RU",
        path: "content/ru-lang/services-nark",
        fields: [...cityTemplate],
      },
      {
        name: "khymioterapiya_ru",
        label: "Услуги-Детоксикация-после-химиотерапии-RU",
        path: "content/ru-lang/services-khymioterapiya",
        fields: [...cityTemplate],
      },
      {
        name: "otravlenie_ru",
        label: "Услуги-Капельницы-при-отравлении-RU",
        path: "content/ru-lang/services-otravlenie",
        fields: [...cityTemplate],
      },
      {
        name: "vitamini_ru",
        label: "Услуги-Витаминные-Капельницы-RU",
        path: "content/ru-lang/services-vitamini",
        fields: [...cityTemplate],
      },
      {
        name: "lech_alc_ua",
        label: "Услуги-Лечение-алкоголзима-UA",
        path: "content/ua-lang/services",
        fields: [...cityTemplate],
      },
      {
        name: "lech_nark_ua",
        label: "Услуги-Лечение-наркомании-UA",
        path: "content/ua-lang/services-nark",
        fields: [...cityTemplate],
      },
      {
        name: "khimioterapiya_ua",
        label: "Услуги-Детоксикая-после-химиотерапии-UA",
        path: "content/ua-lang/services-khimioterapiya",
        fields: [...cityTemplate],
      },
      {
        name: "otryenya_ua",
        label: "Услуги-Капельница-при-пищевом-отравлении-UA",
        path: "content/ua-lang/services-otryenya",
        fields: [...cityTemplate],
      },
      {
        name: "vitaminy_ua",
        label: "Услуги-Витаминные-капельницы-UA",
        path: "content/ua-lang/services-vitaminy",
        fields: [...cityTemplate],
      },
      //DOVIDNYK
      {
        name: "directory_ru",
        label: "Справочник-RU",
        path: "content/ru-lang/directory",
        fields: [...cityTemplate],
      },
      {
        name: "directory_ua",
        label: "Справочник-UA",
        path: "content/ua-lang/directory",
        fields: [...cityTemplate],
      },
      //OTZIVY
      {
        name: "reviews_ru",
        label: "Отзывы-RU",
        path: "content/ru-lang/reviews",
        fields: [...feedbackTemplate],
      },
      {
        name: "reviews_ua",
        label: "Отзывы-UA",
        path: "content/ua-lang/reviews",
        fields: [...feedbackTemplate],
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
      },
    ],
  },
});
