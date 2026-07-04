import { TinaField } from "tinacms";

export const blogTemplate: TinaField[] = [
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
        "Автоматически ставиться при создании статьи. Нужно для сортировки в актуальных новостях и на странице блога. +отображается в самой статье",
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
    type: "string",
    name: "expert",
    label: "Статья проверена экспертом",
    description: "Кто проверил статью: Стас, Костя или Ольга",
    options: [
      {
        value: "olga",
        label: "Ольга",
      },
      {
        value: "kostya",
        label: "Константин",
      },
      {
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

export default blogTemplate;
