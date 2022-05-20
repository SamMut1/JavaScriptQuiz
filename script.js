const quizData = [
  {
    question: "Welcome to the general knowledge quiz, please select the correct option to continue", 
    a: "Get me out of here",
    b: "Start Quiz",
    c: "Where am I?!",
    d: "Hi, my name's blob =]",
    correct: "b",
},
  {
      question: "Who is the current american president?", 
      a: "Barrack Obama",
      b: "Joe Budden",
      c: "Kamila Harris",
      d: "Joe Biden",
      correct: "d",
  },
  {
      question: "Which country recently left the european union?",
      a: "Russia",
      b: "United Kingdom",
      c: "Finland",
      d: "Belgium",
      correct: "b",
  },
  {
      question: "Which country has the 4TH highest GDP?",
      a: "Germany",
      b: "Japan",
      c: "USA",
      d: "China",
      correct: "a",
  },
  {
      question: "What year was the internet launched to the general public?",
      a: "1999",
      b: "1993",
      c: "1991",
      d: "none of the above",
      correct: "b",
  },
  {
    question: "What term referes to potential computer errors relating to the formatting and storage of calendar dates in and after the year 2000?",
    a: "Y2J",
    b: "2K Virus",
    c: "Millennium bug",
    d: "none of the above",
    correct: "c",
},


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = -1

loadQuiz()


function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}

/*even listeners for the submit button, quiz score calc, result header and /reload button. adding -1 to quiz data length discounts the first question from results/discounts 1 point from total score*/
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }

     currentQuiz++

     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>Well Done, you answered ${score}/${quizData.length -1} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})