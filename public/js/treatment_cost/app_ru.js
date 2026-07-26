let questionsArray;
let questionId = 0;
let points = 0;

const buttonAnswer = document.getElementById("buttonAnswer");
buttonAnswer.innerHTML = "Ответить";

// fetch questions
async function fetchQuestions() {
  try {
    const response = await fetch("/js/treatment_cost/questionsRu.json");
    const data = await response.json();
    questionsArray = data;
    renderTest();
  } catch (err) {
    console.log(err);
  }
}

function renderTest() {
  let question = document.getElementById("question");
  let answers = document.getElementById("answers");

  question.innerHTML = questionsArray[questionId].question;

  const options = questionsArray[questionId].options;

  options.forEach((e, index) => {
    const optContainer = document.createElement("div");
    const optCircle = document.createElement("input");
    const optLabel = document.createElement("label");
    optCircle.type = "radio";
    optCircle.name = "answer";
    optCircle.value = index;
    optLabel.textContent = e;
    optContainer.id = e;
    optContainer.appendChild(optCircle);
    optContainer.appendChild(optLabel);
    answers.appendChild(optContainer);
  });

  checkRadio();
}

function checkRadio() {
  const options = questionsArray[questionId].options;

  options.forEach((e) => {
    let option = document.getElementById(e);

    option.addEventListener("click", () => {
      option.children[0].checked = true;
      buttonAnswer.style.visibility = "visible";
    });
  });
}

function registrateAnswer() {
  const options = questionsArray[questionId].options;

  let i = 0;

  options.forEach((e) => {
    let option = document.getElementById(e);
    if (option.children[0].checked) {
      points = points + Number(option.children[0].value);
    } else {
      i++;
    }
  });
  if (i == 5) {
    window.alert("Нужно выбрать ответ");
    console.log(i);
    return false;
  }
  return true;
}

function removeElements() {
  const options = questionsArray[questionId].options;
  options.forEach((e) => {
    let option = document.getElementById(e);
    option.remove();
  });
}

function moveProgressbar() {
  let prosent = document.getElementById("prosent");
  let progressBar = document.getElementById("progressBar");

  let progress = Math.floor(((questionId + 1) / 10) * 100);
  prosent.textContent = progress;

  progressBar.value = progress;
}

buttonAnswer.addEventListener("click", () => {
  if (questionId !== 3) {
    if (!registrateAnswer()) {
      return;
    }
    removeElements();
    moveProgressbar();
    questionId++;
    console.log(points);
    setTimeout(300, renderTest());
  } else {
    moveProgressbar();
    buttonAnswer.innerHTML = "Закончить тестирование";
    buttonAnswer.addEventListener("click", () => {
      let question = document.getElementById("question");
      let answers = document.getElementById("answers");

      question.innerHTML = "";
      answers.innerHTML = "";

      let price;

      if (points < 5){
        price = 1000
      } else if (points <10){
        price = 1500
      } else {
        price = 2000
      }

      const results = document.createElement("div");
      results.innerHTML = price;
      question.appendChild(results);
      buttonAnswer.style.visibility = "hidden";
    });
  }
});

fetchQuestions();
