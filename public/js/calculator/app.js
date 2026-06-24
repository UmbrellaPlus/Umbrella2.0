let questionsArray;
let questionId = 0;
let points = 0;

const buttonAnswer = document.getElementById("buttonAnswer");

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
      points = points + Number(option.children[0].value);

      options.forEach((id) => {
        document.getElementById(id).style.pointerEvents = "none";
      });
    });
  });
}

function removeElements() {
  const options = questionsArray[questionId].options;
  options.forEach((e) => {
    let option = document.getElementById(e);
    option.remove();
    console.log(option);
  });
}

buttonAnswer.addEventListener("click", () => {
  if (questionId !== 9) {
    removeElements();
    questionId++;
    setTimeout(300,renderTest())
  } else {
    return;
  }
});

fetchQuestions();
