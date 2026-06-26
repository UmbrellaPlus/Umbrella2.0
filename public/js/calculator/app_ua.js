let questionsArray;
let questionId = 0;
let points = 0;

const buttonAnswer = document.getElementById("buttonAnswer");
buttonAnswer.innerHTML = "Відповісти";

// fetch questions
async function fetchQuestions() {
  try {
    const response = await fetch("/js/calculator/questionsUa.json");
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
    window.alert("Потрібно обрати відповідь");
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
    buttonAnswer.innerHTML = "Завершити";
    buttonAnswer.addEventListener("click", () => {
      let question = document.getElementById("question");
      let answers = document.getElementById("answers");

      question.innerHTML = "";
      answers.innerHTML = "";

      const results = document.createElement("div");
      results.innerHTML =
        "Низький ризик (від 0 до 7 балів): Ймовірно, у вас немає проблем із вживанням алкоголю. Продовжуйте вживати алкоголь помірно або не вживайте його зовсім. <br/> <br/>" +
        "Середній ризик (від 8 до 15 балів): Ви можете іноді вживати надто багато алкоголю. Це може становити небезпеку для вас або оточуючих. Спробуйте скоротити споживання алкоголю або повністю відмовитися від нього. <br/> <br/>" +
        "Високий ризик (від 16 до 19 балів): Ваше вживання алкоголю може завдати шкоди, якщо цього ще не сталося. Важливо скоротити споживання алкоголю або повністю відмовитися від нього. Зверніться до лікаря за порадою щодо того, як найкраще це зробити. <br/> <br/>" +
        "Ймовірна залежність (20 балів і більше): Ймовірно, ваше вживання алкоголю завдає шкоди. Дізнайтеся у лікаря про ліки та консультації, які можуть допомогти вам припинити вживання алкоголю. Якщо у вас алкогольна залежність, не припиняйте вживати алкоголь без допомоги лікаря. <br/> <br/> <br/>" +
        "У вас " +
        points +
        " балів";
      question.appendChild(results);
      buttonAnswer.style.visibility = "hidden";
    });
  }
});

fetchQuestions();
