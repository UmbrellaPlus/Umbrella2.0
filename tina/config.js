import { defineConfig, FieldDescription } from "tinacms";
import { useTina } from 'tinacms/dist/react';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const homePageNews = [
  {
    type: "image",
    label: "Картинка на ПК версии",
    name: "imagepc",
  },
  {
    type: "image",
    label: "Картинка на мобильной версии",
    name: "imagephone",
  },
  {
    type: "string",
    label: "Ссылка после нажатия на картинку",
    name: "link",
  },
];

const homePageTemplate = [
  {
    type: "string",
    label: "Название вкладки в Гугле",
    name: "title",
    ui: {
      description:
        "С начала создания сайта название не менялось и его лучше не менять",
    },
  },
  { type: "string", label: "Заголовок на странице", name: "homeHeader" },
  { type: "string", label: "Первая строчка", name: "homeText1" },
  { type: "string", label: "Вторая строчка", name: "homeText2" },
  { type: "string", label: "Третья строчка", name: "homeText3" },
  {
    type: "image",
    label: "ПК версия картинки 1600x720. Шаблон (psd) есть в img/MAIN",
    name: "mainpc",
  },
  {
    type: "image",
    label: "Мобильная версия картинки 1280х1280. Шаблон (psd) есть в img/MAIN",
    name: "mainmob",
  },
  {
    type: "image",
    label: "Картинка справа от основного текста",
    name: "imageDoctor",
  },
  {
    type: "string",
    label: "Текст жирным под картинкой с основного текста",
    name: "doctorName",
  },
  {
    type: "string",
    label: "Обычный текст который идет далее",
    name: "doctorDescr",
  },
  {
    type: "rich-text",
    label: "Основной текст страницы",
    name: "body",
    isBody: true,
  },
];

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
        value: "vit",
        label: "Витамины",
      },
      {
        value: "detox",
        label: "Детокс после химии",
      },
      {
        value: "otravl",
        label: "Пищевое отравление",
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

const googleFeedbackTemplate = [
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
        "На странице Отзывы на сайте UmbrellaPlus нажимаешь -Написать отзыв о нас- . Затем в гугле нажимаешь на страничку компании и там переходишь в -Отзывы-. Потом переходишь на страницу пользователя нажав на ник пользователя который написал отзыв, потом правой кнопкой на аватар -Скопировать ссылку на картинку-",
    },
  },
  {
    type: "string",
    label: "Ссылка на пост",
    name: "link",
    ui: {
      description:
        "Можно найти внизу под отзывом нажав на значок Поделится (который с тремя кружечками), который находится справа от пальца. Нажимаешь на ссылку и потом -Скопировать ссылку-.",
    },
  },
  {
    type: "rich-text",
    label: "Текст отзыва",
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
      //CITIES-NEW
      {
        name: "filials_ru",
        label: "Филиалы-RU",
        path: "content/ru-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{cherkasy/**/*,chornomorsk/**/*,chuguev/**/*,dnepr/**/*,kamianske/**/*,kharkiv/**/*,kiev/**/*,lviv/**/*,odessa/**/*,zaporozie/**/*}",
          exclude:
            "{blog/**/*,directory/**/*,homepage/**/*,reviews/**/*,services/**/*,services-khymioterapiya/**/*,services-nark/**/*,services-otravlenie/**/*,services-vitamini/**/*,_index,about-us,collaboration,contacts}",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
      {
        name: "filials_ua",
        label: "Филиалы-UA",
        path: "content/ua-lang",
        fields: [...cityTemplate],
        match: {
          include:
            "{cherkasy/**/*,chornomorsk/**/*,chuguev/**/*,dnepr/**/*,kamianske/**/*,kharkiv/**/*,kiev/**/*,lviv/**/*,odesa/**/*,zaporozie/**/*}",
          exclude:
            "{blog/**/*,directory/**/*,homepage/**/*,reviews/**/*,services/**/*,services-khymioterapiya/**/*,services-nark/**/*,services-otravlenie/**/*,services-vitamini/**/*,_index,about-us,collaboration,contacts}",
        },
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
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
