
document.addEventListener('DOMContentLoaded', () => {

   
const questions = [
  {
    question: "Хто більший?",
    answers: [
      { name: "1", image: "https://preview.redd.it/compiling-all-the-information-on-the-d-rex-v0-4p3kxy5t0cfe1.jpeg?auto=webp&s=4a793e45d2f327e7ce02e5679a7f395beaae7af3" },
      { name: "2", image: "https://prodigits.co.uk/thumbs/wallpapers/p2/movies/12/e56c31d612338162.jpg" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMoHY-RSXBp33CbkBaxGvSIqrGBFbs__DYO4II06Ptg&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO16lfKOF3W33A6ur_zj4Vifgzwrb-nEW7xIg1E0THQ&s=10" }
    ],
    correct: "1",
    info: "Правильно"
  },
  {
    question: "Яка картинка індораптора?",
    answers: [
      { name: "1", image: "https://preview.redd.it/do-you-like-blu-as-a-velociraptor-v0-37utpxkjtdif1.jpeg?auto=webp&s=71faa7d75e541a712ee23685596fdb8c12d0be19" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjM-FWVNfVgz0-Cwe0QBnj8WYea_gbpVGpDQxaVLnJUk6MsF71bW2d0No&s=10" },
      { name: "3", image: "https://i.pinimg.com/474x/ed/3f/44/ed3f44ef1f632f1048518c9cb4dd0cd2.jpg" },
      { name: "4", image: "https://media.istockphoto.com/id/633687646/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%BE%D1%82%D0%BE%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B0%D1%80%D1%85%D0%B5%D0%BE%D0%BF%D1%82%D0%B5%D1%80%D0%B8%D0%BA%D1%81-%D0%B4%D0%B8%D0%BD%D0%BE%D0%B7%D0%B0%D0%B2%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=zGUu5hQPKWA-D9XiyA1fd5kb5QukyiQE-xf-HuYFBKw=" }
    ],
    correct: "3",
    info: "Правильно"
  },
  {
    question: "Чим керують індораптором?",
    answers: [
      { name: "1", image: "https://img.magnific.com/free-psd/elegant-black-gold-luxury-rollerball-pen_84443-65689.jpg?semt=ais_hybrid&w=740&q=80" },
      { name: "2", image: "https://zbroia.safari.ua/media/products/5becd7f8-c0bc-4ff3-baa6-2269a32ee069.webp" },
      { name: "3", image: "https://cdn.27.ua/sc--media--prod/default/13/3e/cd/133ecdfb-1553-4095-94f6-973ebcea7935.jpg" },
      { name: "4", image: "https://militarist.ua/upload/resize_cache/iblock/22f/1000_1000_2/tpkphx3v5madg2798tqobfwjbd549j78.jpg" }
    ],
    correct: "3",
    info: "Правильно"
  },
  {
    question: "Який динозавр втік здопомогою здібності контролюваня своєї температури?",
    answers: [
     { name: "1", image: "https://preview.redd.it/compiling-all-the-information-on-the-d-rex-v0-4p3kxy5t0cfe1.jpeg?auto=webp&s=4a793e45d2f327e7ce02e5679a7f395beaae7af3" },
      { name: "2", image: "https://prodigits.co.uk/thumbs/wallpapers/p2/movies/12/e56c31d612338162.jpg" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMoHY-RSXBp33CbkBaxGvSIqrGBFbs__DYO4II06Ptg&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO16lfKOF3W33A6ur_zj4Vifgzwrb-nEW7xIg1E0THQ&s=10" }
    ],
    correct: "2",
    info: "Правильно"
  },
  {
    question: "Хто з них тренував рапторів?",
    answers: [
      { name: "1", image: "https://www.okino.ua/media/var/news/2016/02/12/bryce_dallas_howard.jpg" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4l96zM40AcYaapqpbJIMDZyzzYXsNBtx7VGf7Zqm2Q&s=10" },
      { name: "3", image: "https://hromadske.ua/static/content/thumbs/1200x1200/8/de/qngbhq---c1x1x50px50p--46d3c179b2b1ad6022dceff7fb901de8.jpg" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v9DAE1v4jboR3fhkEHGPAyYTYPbSMlQJnRsiI4VkxswClasEGmRH59U&s=10" }
    ],
    correct: "2",
    info: "Правильно"
  },
  {
    question: "Хто фінансував та затвердив створення Індомінуса Рекса?",
    answers: [
      { name: "1", image: "https://images.kinorium.com/movie/cast/1447406/w150_880829.jpg?1658920910" },
      { name: "2", image: "https://images.kinorium.com/persona/150/352.jpg?20231107123206" },
      { name: "3", image: "https://preview.redd.it/what-are-your-honest-opinions-on-dr-henry-wu-v0-ib3kzhugtr2f1.jpeg?auto=webp&s=3c19f55b1db0068e22cb24e59ef145ccef03dbec" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3niUYMkV0rdmUf9IJdjzELHHRFkRY6u6gMrHIUteGb3uWLo7fAIYxGHvu&s=10" }
    ],
    correct: "4",
    info: "Правильно"
  },
    {
    question: "Який базовий теропод лежить в основі геному Дистортус Рекса (D-Rex)?",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NK2gVWVmfJD4GP8-sE5TuarfYciD8MvjK7c8acssUK-ztY6LRekfutE&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT89x-4i_L2oZEZxcRCKz6Jb1k5SywlkW_bHe_Xo4RcyOr_KzodfDcs9z&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO16lfKOF3W33A6ur_zj4Vifgzwrb-nEW7xIg1E0THQ&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuT1qArXSyVN08lvWz9SVMYC1v4b60j_ZEEnitE1Wu728XpjNQxDWzaL0&s=10" }
    ],
    correct: "3",
    info: "Правильно"
  },
  {
    question: "Хто особисто проводив маніпуляції з вживлення наночіпа новонародженому Індомінусу?",
    answers: [
      { name: "1", image: "https://www.okino.ua/media/var/news/2016/02/12/bryce_dallas_howard.jpg" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4l96zM40AcYaapqpbJIMDZyzzYXsNBtx7VGf7Zqm2Q&s=10" },
      { name: "3", image: "https://preview.redd.it/what-are-your-honest-opinions-on-dr-henry-wu-v0-ib3kzhugtr2f1.jpeg?auto=webp&s=3c19f55b1db0068e22cb24e59ef145ccef03dbec" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3niUYMkV0rdmUf9IJdjzELHHRFkRY6u6gMrHIUteGb3uWLo7fAIYxGHvu&s=10" }
    ],
    correct: "3",
    info: "Правильно"
  },
  {
    question: "Хто знайшов ключ і відкрив таємні archives лабораторії у маєтку Локвуда?",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4l96zM40AcYaapqpbJIMDZyzzYXsNBtx7VGf7Zqm2Q&s=10" },
      { name: "2", image: "https://preview.redd.it/is-maisie-lockwood-the-most-hated-jurassic-park-character-v0-ddq9488cr7ve1.jpeg?auto=webp&s=bd78c5a4f82fe0188f5d7414673da4a7047b6106" },
      { name: "3", image: "https://www.okino.ua/media/var/news/2016/02/12/bryce_dallas_howard.jpg" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3niUYMkV0rdmUf9IJdjzELHHRFkRY6u6gMrHIUteGb3uWLo7fAIYxGHvu&s=10" }
    ],
    correct: "2",
    info: "Правильно"
  },
{
    question: "Який динозавр вбив рапторку Ехо під час нічного бунту на Ісла-Нублар?",
    answers: [
      { name: "1", image: "https://preview.redd.it/compiling-all-the-information-on-the-d-rex-v0-4p3kxy5t0cfe1.jpeg?auto=webp&s=4a793e45d2f327e7ce02e5679a7f395beaae7af3" },
      { name: "2", image: "https://prodigits.co.uk/thumbs/wallpapers/p2/movies/12/e56c31d612338162.jpg" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMoHY-RSXBp33CbkBaxGvSIqrGBFbs__DYO4II06Ptg&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO16lfKOF3W33A6ur_zj4Vifgzwrb-nEW7xIg1E0THQ&s=10" }
    ],
    correct: "2",
    info: "Правильно"
  },
  {
    question: "Хто працював за головним операційним пультом під час першої втечі гібрида?",
    answers: [
      { name: "1", image: " data:image/jpeg;base64,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" },
      { name: "2", image: "https://www.okino.ua/media/var/news/2016/02/12/bryce_dallas_howard.jpg" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4l96zM40AcYaapqpbJIMDZyzzYXsNBtx7VGf7Zqm2Q&s=10" },
      { name: "4", image: "https://hromadske.ua/static/content/thumbs/1200x1200/8/de/qngbhq---c1x1x50px50p--46d3c179b2b1ad6022dceff7fb901de8.jpg" }
      
    ],
    correct: "1",
    info: "Правильно"
  },
 {
    question: "Який вид завроподів став першою масовою жертвою Індомінуса «заради спорту»?",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NK2gVWVmfJD4GP8-sE5TuarfYciD8MvjK7c8acssUK-ztY6LRekfutE&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT89x-4i_L2oZEZxcRCKz6Jb1k5SywlkW_bHe_Xo4RcyOr_KzodfDcs9z&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO16lfKOF3W33A6ur_zj4Vifgzwrb-nEW7xIg1E0THQ&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuT1qArXSyVN08lvWz9SVMYC1v4b60j_ZEEnitE1Wu728XpjNQxDWzaL0&s=10" }
    ],
    correct: "2",
    info: "Правильно"
  },
  {
    question: "Хто відключив системи життєзабезпечення у трюмі під час транспортування Блю?",
    answers: [
       { name: "1", image: "https://www.okino.ua/media/var/news/2016/02/12/bryce_dallas_howard.jpg" },
      { name: "2", image: "data:image/jpeg;base64,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" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4l96zM40AcYaapqpbJIMDZyzzYXsNBtx7VGf7Zqm2Q&s=10" },
      { name: "4", image: "https://preview.redd.it/what-are-your-honest-opinions-on-dr-henry-wu-v0-ib3kzhugtr2f1.jpeg?auto=webp&s=3c19f55b1db0068e22cb24e59ef145ccef03dbec" },
    ],
    correct: "2",
    info: "Правильно"
  },
  {
    question: "Який хижак б'ється з предком Рексі у доісторичному пролозі третього фільму?",
    answers: [
  { name: "1", image: "https://preview.redd.it/compiling-all-the-information-on-the-d-rex-v0-4p3kxy5t0cfe1.jpeg?auto=webp&s=4a793e45d2f327e7ce02e5679a7f395beaae7af3" },
      { name: "2", image: "https://prodigits.co.uk/thumbs/wallpapers/p2/movies/12/e56c31d612338162.jpg" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMoHY-RSXBp33CbkBaxGvSIqrGBFbs__DYO4II06Ptg&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJamn2NOqr5_zfxRGg7rql-c55yvxAsQPf-0F7cT2rRYWnRqhUHx8cmugT&s=10" },
     
    ],
    correct: "3",
    info: "Правильно"
  },
  {
    question: "Хто випустив динозаврів на материк, рятуючи від отруєння ціанідом?",
    answers: [
     { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4l96zM40AcYaapqpbJIMDZyzzYXsNBtx7VGf7Zqm2Q&s=10" },
      { name: "2", image: "https://preview.redd.it/is-maisie-lockwood-the-most-hated-jurassic-park-character-v0-ddq9488cr7ve1.jpeg?auto=webp&s=bd78c5a4f82fe0188f5d7414673da4a7047b6106" },
      { name: "3", image: "https://www.okino.ua/media/var/news/2016/02/12/bryce_dallas_howard.jpg" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3niUYMkV0rdmUf9IJdjzELHHRFkRY6u6gMrHIUteGb3uWLo7fAIYxGHvu&s=10" }
    ],
    correct: "2",
    info: "Правильно"
  }
 
];

let current = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const gameEl = document.getElementById("game");
const resultEl = document.getElementById("result");

function showQuestion() {
  answered = false;

  const q = questions[current];

  document.getElementById("number").textContent =
    `Раунд ${current + 1} із ${questions.length}🦖`;

  document.getElementById("score").textContent =
    `🦖 ${score} Dino`;

  document.getElementById("progress-bar").style.width =
    `${(current / questions.length) * 100}%`;

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.hidden = true;

  // Перемішуємо відповіді
  const shuffled = [...q.answers];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  shuffled.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer";

    const img = document.createElement("img");
    img.src = answer.image;
    img.alt = answer.name;
    img.loading = "lazy";

    img.onerror = () => {
      img.onerror = null;
      img.src = "https://placehold.co/400x250/211d3b/ffffff?text=Image";
    };

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = answer.name;

    btn.append(img, label);

    btn.addEventListener("click", () => {
      checkAnswer(btn, answer);
    });

    answersEl.appendChild(btn);
  });
}

function checkAnswer(button, answer) {
  if (answered) return;
  answered = true;

  const q = questions[current];

  answersEl.querySelectorAll(".answer").forEach(btn => {
    btn.disabled = true;

    const label = btn.querySelector(".label").textContent;

    if (label === q.correct) {
      btn.classList.add("correct");
    }
  });

  if (answer.name === q.correct) {
    score++;
    feedbackEl.textContent = `✅ Правильно! ${q.info}`;
    feedbackEl.style.color = "#4ade80";
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent =
      `❌ Правильна відповідь: ${q.correct}. ${q.info}`;
    feedbackEl.style.color = "#f87171";
  }

  document.getElementById("score").textContent =
    `🦖  ${score} Dino`;

  nextBtn.textContent =
    current === questions.length - 1
      ? "Побачити результат 🏆"
      : "Наступне запитання ➜";

  nextBtn.hidden = false;
}

function showResult() {
  gameEl.hidden = true;
  resultEl.hidden = false;

  document.getElementById("progress-bar").style.width = "100%";

  document.getElementById("final-score").textContent =
    `${score} із ${questions.length} балів`;

  const message = document.getElementById("message");

  if (score === questions.length) {
    message.textContent = "🔥 Неймовірно! Ти справжній IT-експерт!";
  } else if (score >= 4) {
    message.textContent = "🎉 Чудовий результат! Ти добре знаєш IT!";
  } else {
    message.textContent = "💻 Гарна спроба! Спробуй ще раз!";
  }
}

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    showResult();
  }
});

document.getElementById("restart").addEventListener("click", () => {
  current = 0;
  score = 0;
  gameEl.hidden = false;
  resultEl.hidden = true;
  showQuestion();
});

showQuestion();


    
    
});
