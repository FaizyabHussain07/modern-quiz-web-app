// ============= Quiz Questions Array =============
var quesArray = [
  // HTML
  {
    num: 1,
    question: "What does HTML stand for?",
    Option: {
      a: "HyperText Markup Language",
      b: "Hyper Transfer Markup Language",
      c: "HighText Machine Language",
      d: "Hyper Tool Markup Language",
    },
    answer: "HyperText Markup Language"
  },
  {
    num: 2,
    question: "Which tag is used to create a hyperlink in HTML?",
    Option: {
      a: "(link)",
      b: "(a)",
      c: "(href)",
      d: "(ref)",
    },
    answer: "(a)"
  },
  {
    num: 3,
    question: "Which tag is used to insert an image?",
    Option: {
      a: "(img)",
      b: "(image)",
      c: "(src)",
      d: "(pic)",
    },
    answer: "(img)"
  },
  {
    num: 4,
    question: "Which HTML tag is used to define a table row?",
    Option: {
      a: "(th)",
      b: "(td)",
      c: "(tr)",
      d: "(table)",
    },
    answer: "(tr)"
  },

  // CSS
  {
    num: 5,
    question: "CSS stands for",
    Option: {
      a: "Cascading Style Sheets",
      b: "Coded Style Sheets",
      c: "Creative Style System",
      d: "Cascading Styling System",
    },
    answer: "Cascading Style Sheets"
  },
  {
    num: 6,
    question: "Which CSS property is used to change text color?",
    Option: {
      a: "text-color",
      b: "font-color",
      c: "color",
      d: "text-style",
    },
    answer: "color"
  },
  {
    num: 7,
    question: "Which is the correct way to make text bold in CSS?",
    Option: {
      a: "font-weight: bold;",
      b: "text-style: bold;",
      c: "font-style: bold;",
      d: "style: bold;",
    },
    answer: "font-weight: bold;"
  },
  {
    num: 8,
    question: "Which property is used to change the background color?",
    Option: {
      a: "color",
      b: "bg-color",
      c: "background-color",
      d: "bg",
    },
    answer: "background-color"
  },
  {
    num: 9,
    question: "Which symbol is used for ID selector in CSS?",
    Option: {
      a: ".",
      b: "#",
      c: "$",
      d: "*",
    },
    answer: "#"
  },

  // JavaScript (simple)
  {
    num: 10,
    question: "Which keyword is used to declare a variable in JavaScript?",
    Option: {
      a: "var",
      b: "int",
      c: "string",
      d: "declare",
    },
    answer: "var"
  },
  {
    num: 11,
    question: "Which method is used to print something in console?",
    Option: {
      a: "console.write()",
      b: "console.print()",
      c: "console.log()",
      d: "log.console()",
    },
    answer: "console.log()"
  },
  {
    num: 12,
    question: "Which JavaScript symbol is used to comment a single line?",
    Option: {
      a: "/* */",
      b: "//",
      c: "#",
      d: "<>",
    },
    answer: "//"
  },
  {
    num: 13,
    question: "Which is used to create an alert box in JS?",
    Option: {
      a: "alert()",
      b: "prompt()",
      c: "confirm()",
      d: "message()",
    },
    answer: "alert()"
  },
  {
    num: 14,
    question: "JavaScript runs in ____",
    Option: {
      a: "Browser",
      b: "Server only",
      c: "Compiler only",
      d: "Database",
    },
    answer: "Browser"
  },
  {
    num: 15,
    question: "Which data type is NOT in JavaScript?",
    Option: {
      a: "String",
      b: "Boolean",
      c: "Integer",
      d: "Object",
    },
    answer: "Integer"
  }
]


// ============= DOM Element Selectors =============
// Main screen sections
var introScreen = document.querySelector(".intro-screen");    // Initial welcome screen
var mainContainer = document.querySelector(".container");     // Main container that holds everything
var userForm = document.querySelector(".formwrapper");       // Form for user details
var startScreen = document.querySelector(".start");          // Screen shown before quiz starts
var quizBody = document.querySelector(".quizbody");         // The actual quiz area
var resultBody = document.querySelector(".result");         // Results display area

// 1. Show Initial Form
function showForm() {
  // Hide intro screen
  introScreen.style.display = "none";
  // show main container using flex layout
  if (mainContainer) mainContainer.style.display = "flex";
  // Animate form entrance with fade-in and slide-up effect
  userForm.style.opacity = "0";
  userForm.style.transform = "translateY(20px)";
  setTimeout(() => {
    userForm.style.transition = "all 0.5s ease";
    userForm.style.opacity = "1";
    userForm.style.transform = "translateY(0)";
  }, 100);
}

// Form input fields
var inpName = document.getElementById("inp_name");          // User's name input
var inpEmail = document.getElementById("inp_email");        // User's email input
var inpRoll = document.getElementById("inp_roll");          // User's roll number input
var inpInst = document.getElementById("inp-inst");          // User's institute input


// Demo Data for registration form

function fillDemoData() {
  document.getElementById('inp_name').value = 'User';
  document.getElementById('inp_email').value = 'User@gmail.com';
  document.getElementById('inp_roll').value = '46537';
  document.getElementById('inp-inst').value = 'SMIT';
}


// Quiz elements
var Ques = document.getElementById("ques");                 // Question text display
var Opt = document.getElementById("opt").children;          // Answer options (as list items)
var btn3 = document.getElementById("nextBtn");              // Next question button

// Statistics elements
var ttlq = document.getElementById("ttlq");                // Total questions display
var ttl = document.querySelector("#ttl");                  // Total score
var ra = document.querySelector("#ra");                    // Right answers
var wa = document.querySelector("#wa");                    // Wrong answers
var perc = document.querySelector("#perc");               // Percentage
var define = document.querySelector(".define");           // Pass/Fail message

// Result display elements
var resName = document.getElementById("res-name");        // Display user's name in result
var resEmail = document.getElementById("res-email");      // Display user's email in result
var resRoll = document.getElementById("res-roll");        // Display user's roll number in result
var resInst = document.getElementById("res-inst");        // Display user's institute in result

// Progress elements
var circularProgress = document.querySelector(".circular-progress");  // Circular progress indicator
var progressValue = document.querySelector(".progress-value");        // Progress percentage value



// ============= Quiz State Variables =============
var totalQus = quesArray.length;     // Total number of questions
var corrAns = 0;                     // Counter for correct answers
var wrngAns = 0;                     // Counter for wrong answers
var counter = 0;                     // Current question counter
var quizOrder = [];                  // Array to hold randomized questions
var timePerQuestion = 10;            // Time allowed per question (in seconds)
var timerInterval = null;            // Holds the timer interval
var timeLeft = 0;                    // Remaining time for current question
var answered = false;                // Flag to track if current question is answered
var quizStartTime = null;            // When the quiz started
var quizEndTime = null;              // When the quiz ended

// ============= Core Quiz Functions =============

// 2. Start Quiz Setup
function startQuiz() {
  // Validate all fields are filled
  if (!inpName.value || !inpEmail.value || !inpRoll.value || !inpInst.value) {
    alert("Please fill all fields");
    return
  }

  // Hide form and show start screen
  userForm.style.display = "none";
  if (startScreen) startScreen.style.display = "flex";

  // Update displayed user information
  var paraNameEl = document.getElementById("para-name");
  var paraEmailEl = document.getElementById("para-email");
  var paraRollEl = document.getElementById("para-roll");
  if (paraNameEl) paraNameEl.innerText = inpName.value;
  if (paraEmailEl) paraEmailEl.innerText = inpEmail.value;
  if (paraRollEl) paraRollEl.innerText = inpRoll.value;

  // Update total questions display
  if (ttlq) ttlq.innerHTML = totalQus;
}

// 3. Begin Actual Quiz
function beginQuiz() {
  // Get and set time per question
  var sel = document.getElementById('time-select');
  if (sel) timePerQuestion = parseInt(sel.value, 10) || timePerQuestion;

  // Record start time
  quizStartTime = new Date();

  // Set up display
  if (mainContainer) mainContainer.style.display = "flex";
  if (userForm) userForm.style.display = "none";
  if (startScreen) startScreen.style.display = "none";

  // Create randomized question order using Fisher-Yates shuffle
  quizOrder = quesArray.slice();
  for (var i = quizOrder.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = quizOrder[i];
    quizOrder[i] = quizOrder[j];
    quizOrder[j] = tmp;
  }

  // Reset counters
  totalQus = quizOrder.length;
  counter = 0;
  corrAns = 0;
  wrngAns = 0;

  // Update display and start
  if (ttlq) ttlq.innerHTML = totalQus;
  if (quizBody) quizBody.style.display = 'flex';
  loadQuestion();
}

// 4. Load Question
function loadQuestion() {
  // Set up display
  if (quizBody) quizBody.style.display = "flex";
  if (startScreen) startScreen.style.display = "none";

  // Get current question
  var q = quizOrder[counter];

  // Display question and options
  Ques.innerHTML = q.question;
  Opt[0].innerHTML = q.Option.a;
  Opt[1].innerHTML = q.Option.b;
  Opt[2].innerHTML = q.Option.c;
  Opt[3].innerHTML = q.Option.d;

  // Update question number
  document.querySelector(".numb").innerHTML = counter + 1;

  // Scroll question into view
  try {
    if (quizBody && quizBody.scrollIntoView) {
      quizBody.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } catch (e) { }

  // Reset options state
  answered = false;
  for (var li of Opt) {
    li.classList.remove("correctAns", "wrongAns", "disableli");
    li.removeAttribute('disabled');
    li.setAttribute("onclick", "selectOpt(this)");
  }

  // Reset next button
  if (btn3) {
    btn3.style.display = "none";
    btn3.classList.remove('primary');
  }

  // Start timer
  clearInterval(timerInterval);
  timeLeft = timePerQuestion;
  var timerEl = document.getElementById('timer');
  var ringEl = document.getElementById('timer-ring');

  // Set initial timer display
  if (timerEl) timerEl.innerText = formatTime(timeLeft);
  if (ringEl) ringEl.style.background = "conic-gradient(var(--accent) 360deg, #2b3946 0deg)";

  // Start countdown
  timerInterval = setInterval(function () {
    timeLeft--;
    if (timerEl) timerEl.innerText = formatTime(timeLeft);

    // Update timer ring
    if (ringEl) {
      var ratio = Math.max(0, timeLeft) / timePerQuestion;
      var deg = Math.round(ratio * 360);
      ringEl.style.background = "conic-gradient(var(--accent) " + deg + "deg, #2b3946 0deg)";
    }

    // Check if time's up
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) handleTimeout();
    }
  }, 1000);
}

// 5. Handle Time Out
function handleTimeout() {
  if (answered) return; // Prevent double counting

  answered = true;
  wrngAns++;

  // Update timer ring
  var ringEl = document.getElementById('timer-ring');
  if (ringEl) ringEl.style.background = "conic-gradient(var(--accent) 0deg, #2b3946 0deg)";

  // Show correct answer
  for (var li of Opt) {
    if (li.innerHTML === quizOrder[counter].answer) {
      li.classList.add('correctAns');
    }
    li.classList.add('disableli');
  }

  // Show time's up message
  var timerEl = document.getElementById('timer');
  if (timerEl) timerEl.innerHTML = "Time's up!";

  // Auto-advance to next question
  setTimeout(() => {
    nextQuestion();
  }, 1500);
}

// 6. Handle Option Selection
function selectOpt(ele) {
  if (answered) return; // prevent double answers

  answered = true;
  clearInterval(timerInterval);

  // Update timer ring
  var ringEl = document.getElementById('timer-ring');
  if (ringEl) {
    var ratioNow = Math.max(0, timeLeft) / timePerQuestion;
    ringEl.style.background = "conic-gradient(var(--accent) " + Math.round(ratioNow * 360) + "deg, #2b3946 0deg)";
  }

  // Check answer and update display
  if (ele.innerHTML === quizOrder[counter].answer) {
    ele.classList.add("correctAns");
    corrAns++;
  } else {
    ele.classList.add("wrongAns");
    wrngAns++;
    // Show correct answer
    for (var li of Opt) {
      if (li.innerHTML === quizOrder[counter].answer) {
        li.classList.add("correctAns");
      }
    }
  }

  // Disable all options
  for (var li of Opt) {
    li.classList.add("disableli");
  }

  // Show next button
  if (btn3) {
    btn3.style.display = "block";
    btn3.classList.add('primary');
  }
}

// 7. Move to Next Question
function nextQuestion() {
  clearInterval(timerInterval);
  counter++;
  if (counter < quizOrder.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// 8. Show Quiz Results
function showResult() {
  // Record end time and update display
  quizEndTime = new Date();
  quizBody.style.display = "none";
  resultBody.style.display = "flex";

  // Update statistics
  document.querySelector('#stat-questions .stat-value').innerHTML = totalQus;
  document.querySelector('#stat-correct .stat-value').innerHTML = corrAns;
  document.querySelector('#stat-wrong .stat-value').innerHTML = wrngAns;

  // Calculate and display percentage
  var percentage = Math.round((corrAns / totalQus) * 100);
  document.querySelector('#stat-score .stat-value').innerHTML = percentage + '%';

  // Show pass/fail message
  if (percentage < 60) {
    define.innerHTML = `<i class="ri-emotion-sad-line"></i> Sorry, you failed! Try Again!`;
    define.classList.add("fail-para");
  } else {
    define.innerHTML = `<i class="ri-emotion-laugh-line"></i> Congrats — You Passed!`;
    define.classList.add("pass-para");
  }

  // Update user information display
  document.getElementById('info-name').textContent = inpName.value;
  document.getElementById('info-email').textContent = inpEmail.value;
  document.getElementById('info-roll').textContent = inpRoll.value;
  document.getElementById('info-inst').textContent = inpInst.value;

  // Update completion time
  var finishedTime = new Date().toLocaleString();
  document.getElementById('finished-at').textContent = finishedTime;

  // Animate progress circle
  animateProgress(percentage);

  // Calculate and display time spent
  updateTimeSpent();
}

// 9. Progress Animation
function animateProgress(percentage) {
  var progressStart = 0;
  var progressEnd = percentage <= 0 ? 1 : percentage;

  var speed = 100;
  var progress = setInterval(function () {
    progressStart++;

    // Update circular progress
    progressValue.textContent = progressStart + "%";
    circularProgress.style.background = "conic-gradient(#4caf50 " +
      (progressStart * 3.6) + "deg, rgba(255,255,255,0.03) 0deg)";

    // Update progress bar
    var progressBar = document.querySelector('.progress-bar-fill');
    var progressBarText = document.querySelector('.progress-bar-text');
    if (progressBar) {
      progressBar.style.width = progressStart + '%';
      progressBarText.textContent = progressStart + '%';
    }

    if (progressStart >= progressEnd) {
      clearInterval(progress);
    }
  }, speed);
}

// 10. Update Time Information
function updateTimeSpent() {
  // Calculate total time spent
  var timeDiff = (quizEndTime - quizStartTime) / 1000;
  var minutes = Math.floor(timeDiff / 60);
  var seconds = Math.floor(timeDiff % 60);

  // Format times
  var timeSpent = minutes + " minutes " + seconds + " seconds";
  var completionTime = quizEndTime.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  // Update displays
  var finishedEl = document.getElementById('finished-at');
  var timeSpentEl = document.getElementById('time-spent');
  if (finishedEl) finishedEl.textContent = completionTime;
  if (timeSpentEl) timeSpentEl.textContent = timeSpent;
}

// helpers
function formatTime(sec) {
  var s = sec % 60;
  var m = Math.floor(sec / 60);
  return (m > 0 ? m + ':' : '') + (s < 10 ? '0' + s : s);
}

function skipQuestion() {
  if (answered) return;
  clearInterval(timerInterval);

  // Only add to skipped if not already answered
  if (!answeredQuestions.has(counter)) {
    skippedQuestions.push({
      index: counter,
      question: quizOrder[counter]
    });
  }

  // Don't count as wrong answer when skipping
  answered = true;
  for (var li of Opt) {
    li.classList.add('disableli');
  }

  // Update question number display to show it's skipped
  var quesNumEl = document.querySelector(".numb");
  if (quesNumEl) {
    quesNumEl.innerHTML = (counter + 1) + " <span style='color:var(--warning)'>(Skipped)</span>";
  }

  // Move to next question automatically after 1 second
  setTimeout(() => {
    nextQuestion();
  }, 1000);
}

// 11. Restart Quiz
function restartQuiz() {
  // Reset display
  resultBody.style.display = 'none';
  userForm.style.display = 'flex';

  // Reset counters
  counter = 0;
  corrAns = 0;
  wrngAns = 0;
  clearInterval(timerInterval);
}

// 12. Helper Function: Format Time
function formatTime(sec) {
  var s = sec % 60;
  var m = Math.floor(sec / 60);
  return (m > 0 ? m + ':' : '') + (s < 10 ? '0' + s : s);
}