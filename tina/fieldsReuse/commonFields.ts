import { TinaField } from "tinacms";

export const homePageNews: TinaField[] = [
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

export const homePageTemplate: TinaField[] = [
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
    toolbarOverride: [
      "heading",
      "link",
      "quote",
      "ul",
      "ol",
      "bold",
      "italic",
      "code",
      "codeBlock",
      "mermaid",
      "table",
      "raw",
      "embed",
    ],
  },
];

export const cityTemplate: TinaField[] = [
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
      {
        value: "narkot",
        label: "Лечение наркомании",
      },
      {
        value: "lomka",
        label: "Лечение нарк ломки",
      },
    ],
  },
  {
    type: "rich-text",
    label: "Основной текст страницы",
    name: "body",
    isBody: true,
    toolbarOverride: [
      "heading",
      "link",
      "quote",
      "ul",
      "ol",
      "bold",
      "italic",
      "code",
      "codeBlock",
      "mermaid",
      "table",
      "raw",
      "embed",
    ],
  },
];

export const blogTemplate: TinaField[] = [
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
    toolbarOverride: [
      "heading",
      "link",
      "quote",
      "ul",
      "ol",
      "bold",
      "italic",
      "code",
      "codeBlock",
      "mermaid",
      "table",
      "raw",
      "embed",
    ],
  },
];


export const googleFeedbackTemplate: TinaField[]  = [
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
    toolbarOverride: [
      "heading",
      "link",
      "quote",
      "ul",
      "ol",
      "bold",
      "italic",
      "code",
      "codeBlock",
      "mermaid",
      "table",
      "raw",
      "embed",
    ],
  },
];

export default {homePageNews, homePageTemplate, cityTemplate, blogTemplate, googleFeedbackTemplate}