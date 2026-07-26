let questionsArray;
let questionId = 0;
let points = 0;

const buttonAnswer = document.getElementById("buttonAnswer");
buttonAnswer.innerHTML = "Ответить";

// fetch questions
async function fetchQuestions() {
  try {
    const response = await fetch("/js/treatment-cost/questionsRu.json");
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

  if (questionId<1) {
    options.forEach((e) => {
      let option = document.getElementById(e);
      if (option.children[0].checked) {
        points = points + Number(option.children[0].value);
      } else {
        i++;
      }
    });
  }
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

  let progress = Math.floor(((questionId + 1) / 3) * 100);
  prosent.textContent = progress;

  progressBar.value = progress;
}

buttonAnswer.addEventListener("click", () => {
  if (questionId !== 2) {
    if (!registrateAnswer()) {
      return;
    }
    removeElements();
    moveProgressbar();
    questionId++;
    setTimeout(300, renderTest());
    console.log(points);
  } else {
    moveProgressbar();
    buttonAnswer.innerHTML = "Узнать стоимость";
    buttonAnswer.addEventListener("click", () => {
      let question = document.getElementById("question");
      let answers = document.getElementById("answers");
      let price;

      question.innerHTML = "";
      answers.innerHTML = "";

      console.log(points)

      if ((points == 0)) {
        price = 2199;
      } else if ((points == 1)) {
        price = 2199;
      } else if ((points == 2)) {
        price = 2199;
      } else if ((points == 3)) {
        price = 2599;
      } else {
        price = 6000;
      }

      const results = document.createElement("div");
      results.innerHTML = "Стоимость услуги от " + price + " гривен <br/>" + "Заказать услугу можно позвонив по номеру телефона<br/> " + '<a href="tel:+380687972782" style="color: navy; cursor: pointer">+380 (68) 797 27 82</a><br/>' + '<a href="tel:+3805002169" style="color: navy; cursor: pointer">+380 (50) 021 69 57</a>';
      question.appendChild(results);
      buttonAnswer.style.visibility = "hidden";
    });
  }
});

fetchQuestions();
