//CAROUSEL FOR DOCTORS
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    speed: 800,
    perPage: 2,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});

//CAROUSEL FOR REVIEWS

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#card-carousel", {
    type: "loop",
    speed: 800,
    gap: `10px`,
    perPage: 3,
    breakpoints: {
      1000: {
        perPage: 1,
      },
    },
  }).mount();
});

//CAROUSEL FOR CITIES

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#cities-carousel", {
    type: "loop",
    speed: 800,
    gap: `10px`,
    perPage: 2,
    breakpoints: {
      1000: {
        perPage: 1,
      },
    },
  }).mount();
});

//CAROUSEL FOR PARTNERS

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#partners-carousel", {
    type: "loop",
    autoplay: "play",
    perPage: 3,
    arrows: false,
    pagination: false,
    breakpoints: {
      500: {
        perPage: 1,
      },
      1000: {
        perPage: 2,
      },
    },
  }).mount();
});
