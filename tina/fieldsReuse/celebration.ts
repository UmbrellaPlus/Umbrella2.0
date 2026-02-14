import { TinaField } from "tinacms";

export const celebration: TinaField[] = [
  {
    type: "string",
    name: "celebration",
    label: "Какой сейчас праздник?",
    description:
      "Главная страница RU и UA: изменение верхней фотографии. Не забудь внести изменения в Слайдер на главной странице",
    options: [
      {
        value: "default",
        label: "Ничего не празднуем",
      },
      {
        value: "new-year",
        label: "Новый год",
      },
      { value: "valentine", label: "День святого Валентина" },
      // { value: "easter", label: "Пасха" },
      { value: "womand", label: "8 Марта" },
      // {value: "independance", label: "День Независимости"}
    ],
  },
];

export default celebration;
