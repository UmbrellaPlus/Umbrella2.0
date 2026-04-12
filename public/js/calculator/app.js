console.log("starts");

let questionsArray;

// fetch questions
async function fetchQuestions() {
  try {
    const response = await fetch("/js/calculator/questionsRu.json");
    const data = await response.json();
    questionsArray = data;
  } catch (err) {
    console.log(err);
  }
}

function renderTest() {
  let question = document.getElementById("question");
  let option1 = document.getElementById("option1");
  let option2 = document.getElementById("option2");
  let option3 = document.getElementById("option3");
  let option4 = document.getElementById("option4");
  let option5 = document.getElementById("option5");
}

fetchQuestions();
renderTest();
