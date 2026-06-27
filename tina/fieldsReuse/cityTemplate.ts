import { TinaField } from "tinacms";

export const cityTemplate: TinaField[] = [
  {
    type: "datetime",
    label: "Дата создания статьи",
    name: "date",
    ui: {
      description: "Автоматически ставиться при создании статьи",
    },
  },
  {
    type: "datetime",
    label: "Дата последнего изменения статьи",
    name: "lastmod",
    ui: {
      description: "Автоматически обновляется, когда сохраняешь статью",
    },
  },
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
    type: "string",
    name: "expert",
    label: "Статья проверена экспертом",
    description:
      "Кто проверил статью: Стас, Костя или Ольга",
    options: [
      {
        value: "olga",
        label: "Ольга",
      },
      {
        value: "kostya",
        label: "Константин",
      },      {
        value: "stas",
        label: "Станислав",
      },
    ],
  },
  {
    type: "string",
    label: "Название интересной статьи",
    name: "interestingArticleName",
    ui: {
      description: "Например: Корсаковский синдром",
    },
  },
  {
    type: "string",
    label: "Ссылка на интересную статью",
    name: "interestingArticleLink",
    ui: {
      description:
        "Например: https://umbrella-plus.com.ua/blog/korsakivskyi-syndrom/",
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

export default cityTemplate;
