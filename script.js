const ball = document.querySelector('.ball');
const startBtn = document.querySelector('#start-btn');
const resumeBtn = document.querySelector('#resume-btn');
const stopBtn = document.querySelector('#stop-btn');
let animationRunning = true;
let animationPaused = false;

function startBallAnimation() {
    ball.style.animation = `none`; 
    ball.offsetHeight; 
    ball.style.animation = `move-ball 8s linear infinite`;
    ball.style.animationPlayState = 'running';
    animationRunning = true;
    animationPaused = false;
    resumeBtn.disabled = true;
    stopBtn.disabled = false;
}

function pauseBallAnimation() {
    ball.style.animationPlayState = 'paused';
    animationRunning = false;
    animationPaused = true;
    startBtn.disabled = false;
    resumeBtn.disabled = false;
}

startBtn.addEventListener('click', () => {
    ball.style.left = '10px';  
    ball.style.top = '25px';   
    startBallAnimation();
    startBtn.disabled = true; 
});

resumeBtn.addEventListener('click', () => {
    if (animationPaused) {
        ball.style.animationPlayState = 'running';
        animationRunning = true;
        animationPaused = false;
        resumeBtn.disabled = true;
        stopBtn.disabled = false;
    }
});

stopBtn.addEventListener('click', () => {
    if (animationRunning) {
        pauseBallAnimation();
        resumeBtn.disabled = false;
        stopBtn.disabled = true;
    }
});
window.addEventListener('load', () => {
    startBallAnimation();
    startBtn.disabled = true; 
});
