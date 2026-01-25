import { TinaField } from "tinacms";

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

export default homePageTemplate