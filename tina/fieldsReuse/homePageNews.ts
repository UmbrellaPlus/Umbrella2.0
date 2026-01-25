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

export default homePageNews