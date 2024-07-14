const ball = document.querySelector('.ball');
const startBtn = document.querySelector('#start-btn');
const resumeBtn = document.querySelector('#resume-btn');
const stopBtn = document.querySelector('#stop-btn');
const scoreboard = document.querySelector('#score');
let animationRunning = false;
let animationPaused = false;
let score = 0;

function moveBall() {
    if (animationRunning) {
        ball.style.animation = 'move-ball 5s linear infinite';
      }
      
    
  }

startBtn.addEventListener('click', () => {
    
    ball.style.animation = 'move-ball 5s linear infinite';
    animationRunning = true;
    animationPaused = false;
    
    score = 0;
    scoreboard.textContent = ` ${score}`;
});

resumeBtn.addEventListener('click', () => {
    
    ball.style.animation = 'move-ball 5s linear infinite';
    animationRunning = true;
    animationPaused = false;
    
    score = 0;
    scoreboard.textContent = ` ${score}`;
    // animationRunning = true;
    // animationPaused = false;
});

stopBtn.addEventListener('click', () => {
    ball.style.animation = 'none';
   

});

// Update score when ball reaches the end of the maze
ball.addEventListener('animationiteration', () => {
    score++;
    scoreboard.textContent = `${score}`;
});