//CAROUSEL FOR DOCTORS
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    speed: 200,
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
    speed: 200,
    gap: `10px`,
    perPage: 3,
    breakpoints: {
      1000: {
        perPage: 1,
      },
    },
  }).mount();
});
