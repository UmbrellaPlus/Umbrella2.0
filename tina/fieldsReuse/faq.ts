import { TinaField } from "tinacms";


export const faq: TinaField[]  = [
  {
    type: "string",
    label: "Вопрос",
    name: "question",
  },
  {
    type: "rich-text",
    label: "Текст вопроса",
    name: "body",
    isBody: true,
    toolbarOverride: [
      "link",
      "quote",
      "ul",
      "ol",
      "bold",
      "italic",
      "raw",
      "embed",
    ],
  },
];

export default faq