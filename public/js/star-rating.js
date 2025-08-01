document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingDisplay = document.getElementById("rating");
  const ratingThanks = document.getElementById("rating-thanks");
  const ratingVotes = document.getElementById("rating-votes");
  let ratingLocked = false;

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      if (!ratingLocked) {
        let selectedRating = star.getAttribute("data-value");
        ratingDisplay.textContent = selectedRating;

        // Highlight the clicked star and previous stars
        stars.forEach((s) => {
          s.classList.remove("selected");
          if (s.getAttribute("data-value") <= selectedRating) {
            s.classList.add("selected");
          }
        });

        // Lock the rating after selection
        ratingLocked = true;
        ratingThanks.style.display = "block";
        let ratingVotesElement = parseInt(ratingVotes.textContent);
        ratingVotes.textContent = ratingVotesElement + 1;
      }
    });
  });
});
