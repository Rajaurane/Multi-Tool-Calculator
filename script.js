let timeLeft = 10;
let timerInterval;

// Start the timer
function startTimer() {
  const timerBar = document.getElementById("timer-bar");
  const timerText = document.getElementById("timer-text");

  timerInterval = setInterval(() => {
    timeLeft--;
    timerText.textContent = `Time left: ${timeLeft} seconds`;
    timerBar.style.width = `${(timeLeft / 10) * 100}%`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerText.textContent = "Time's up!";
      document.getElementById("result").textContent = "The correct answer is Mandarin Chinese.";
      disableOptions();
    }
  }, 1000);
}

// Disable options after time runs out or an answer is selected
function disableOptions() {
  const options = document.querySelectorAll(".option");
  options.forEach(option => {
    option.disabled = true;
    option.style.backgroundColor = "#ccc";
  });
}

// Check the selected answer
function checkAnswer(selectedOption) {
  clearInterval(timerInterval);
  disableOptions();

  if (selectedOption === "Mandarin Chinese") {
    document.getElementById("result").textContent = "Correct! Mandarin Chinese is considered one of the most difficult languages.";
  } else {
    document.getElementById("result").textContent = "Incorrect! The correct answer is Mandarin Chinese.";
  }
}

// Add event listeners to options
document.getElementById("option1").addEventListener("click", () => checkAnswer("Mandarin Chinese"));
document.getElementById("option2").addEventListener("click", () => checkAnswer("Arabic"));
document.getElementById("option3").addEventListener("click", () => checkAnswer("Hungarian"));
document.getElementById("option4").addEventListener("click", () => checkAnswer("Japanese"));

// Start the timer when the page loads
startTimer();