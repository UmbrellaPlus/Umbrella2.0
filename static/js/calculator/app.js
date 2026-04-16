let questionsArray;
let questionId = 0;
let points;

const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");

// fetch questions
async function fetchQuestions() {
  try {
    const response = await fetch("/js/calculator/questionsRu.json");
    const data = await response.json();
    questionsArray = data;
    renderTest();
  } catch (err) {
    console.log(err);
  }
}

function renderTest() {
  let question = document.getElementById("question");
  let answer1 = document.getElementById("answer1");
  let answer2 = document.getElementById("answer2");
  let answer3 = document.getElementById("answer3");
  let answer4 = document.getElementById("answer4");
  let answer5 = document.getElementById("answer5");
  let option1 = document.getElementById("option1");
  let option2 = document.getElementById("option2");
  let option3 = document.getElementById("option3");
  let option4 = document.getElementById("option4");
  let option5 = document.getElementById("option5");

  question.innerHTML = "";
  question.innerHTML = questionsArray[questionId].question;
  answer1.innerHTML = "";
  answer1.innerHTML = questionsArray[questionId].option1;
  answer2.innerHTML = "";
  answer2.innerHTML = questionsArray[questionId].option2;
  answer3.innerHTML = "";
  answer3.innerHTML = questionsArray[questionId].option3;
  answer4.innerHTML = "";
  answer4.innerHTML = questionsArray[questionId].option4;
  answer5.innerHTML = "";
  answer5.innerHTML = questionsArray[questionId].option5;
  console.log(questionId)
}

buttonNext.addEventListener("click", () => {
  if (questionId !== 9) {
    questionId++;
    renderTest();
  } else {
    return;
  }
});
buttonPrev.addEventListener("click", () => {
  if (questionId !== 0) {
    questionId--;
    renderTest();
  }
  return;
});

fetchQuestions();
