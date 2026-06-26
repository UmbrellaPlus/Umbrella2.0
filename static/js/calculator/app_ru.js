let questionsArray;
let questionId = 0;
let points = 0;

const buttonAnswer = document.getElementById("buttonAnswer");
buttonAnswer.innerHTML = "Ответить";

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
  if (questionId !== 9) {
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

      const results = document.createElement("div");
      results.innerHTML =
        "Низкий риск (от 0 до 7 баллов): Вероятно, у вас нет проблем с употреблением алкоголя. Продолжайте употреблять алкоголь умеренно или не употребляйте его совсем. <br/> <br/>" +
        "Средний риск (от 8 до 15 баллов): Вы можете иногда употреблять слишком много алкоголя. Это может подвергать опасности вас или окружающих. Постарайтесь сократить потребление алкоголя или полностью отказаться от него. <br/> <br/>" +
        "Высокий риск (от 16 до 19 баллов): Ваше употребление алкоголя может причинять вред, если этого еще не произошло. Важно сократить потребление алкоголя или полностью отказаться от него. Обратитесь к врачу за советом о том, как лучше всего это сделать. <br/> <br/>" +
        "Вероятная зависимость (20 баллов и более): Вероятно, ваше употребление алкоголя причиняет вред. Узнайте у врача о лекарствах и консультациях, которые могут помочь вам прекратить употребление алкоголя. Если у вас алкогольная зависимость, не прекращайте употребление алкоголя без помощи врача. <br/> <br/> <br/>" +
        "У вас " +
        points +
        " баллов";
      question.appendChild(results);
      buttonAnswer.style.visibility = "hidden";
    });
  }
});

fetchQuestions();
