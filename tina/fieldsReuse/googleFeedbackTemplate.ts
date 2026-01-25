import { TinaField } from "tinacms";


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

export default googleFeedbackTemplate