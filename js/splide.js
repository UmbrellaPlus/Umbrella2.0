//CAROUSEL FOR HOME PAGE

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#homepage_carousel", {
    type: "loop",
    speed: 800,
    perPage: 1,
    autoplay: "play",
  }).mount();
});

//CAROUSEL FOR DOCTORS
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#doctors-carousel", {
    type: "loop",
    speed: 800,
    start: (number = 1),
    perPage: 4,
    breakpoints: {
      1280: {
        perPage: 2,
      },
      1640: {
        perPage: 3,
      },
      1920: {
        perPage: 4,
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
    perPage: 3,
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

//CAROUSEL FOR GOOGLE REVIEWS

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#google-carousel", {
    type: "loop",
    speed: 800,
    gap: `10px`,
    perPage: 3,
    breakpoints: {
      640: {
        perPage: 1,
      },
      1280: {
        perPage: 2,
      },
      1640: {
        perPage: 3,
      },
      1920: {
        perPage: 4,
      },
    },
  }).mount();
});

//CAROUSEL FOR LATEST NEWS
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#latest-news", {
    type: "loop",
    speed: 800,
    gap: `10px`,
    perPage: 3,
    breakpoints: {
      640: {
        perPage: 1,
      },
      1280: {
        perPage: 2,
      },
      1640: {
        perPage: 3,
      },
    },
  }).mount();
});
