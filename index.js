//DOM
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const light01 = document.getElementById('light01');
const light02 = document.getElementById('light02');
const light03 = document.getElementById('light03');
const light04 = document.getElementById('light04');
const goBtn = document.getElementById('goBtn');
const chronoTime = document.getElementById('chronoTime');

let counter = 6;
let timerStart;

const lightsAction = () => {
    if (counter === 5) {
        console.log('Race is starting');
    } else if (counter === 4) {
        light01.style.background = 'red';
    } else if (counter === 3) {
        light02.style.background = 'red';
    } else if (counter === 2) {
        light03.style.background = 'red';
    } else if (counter === 1) {
        light04.style.background = 'red';
    } else if (counter === 0) {
        light01.style.background = 'rgb(30, 230, 30)';
        light02.style.background = 'rgb(30, 230, 30)';
        light03.style.background = 'rgb(30, 230, 30)';
        light04.style.background = 'rgb(30, 230, 30)';
        goBtn.style.background = 'red';

        console.log('Start timer');
        timerStart = new Date(Date.now());
    }
};

const failed = () => {
    chronoTime.innerText = 'TOO SOON!';
    goBtn.style.display = 'none';
};

//LISTENERS
startBtn.addEventListener('click', (e) => {
    const interval = setInterval(() => {
        counter = counter - 1;
        lightsAction();
        startBtn.style.display = 'none';

        if (counter === 0) {
            clearInterval(interval);
            restartBtn.style.display = 'block';
        }
    }, 1000);
});

restartBtn.addEventListener('click', (e) => {
    counter = 5;
    light01.style.background = 'rgba(49, 49, 49, 0.747)';
    light02.style.background = 'rgba(49, 49, 49, 0.747)';
    light03.style.background = 'rgba(49, 49, 49, 0.747)';
    light04.style.background = 'rgba(49, 49, 49, 0.747)';
    goBtn.style.background = 'grey';
    goBtn.style.display = 'flex';
    restartBtn.style.display = 'none';
    startBtn.style.display = 'block';
});

goBtn.addEventListener('click', (e) => {
    if (counter !== 0) {
        failed();
    } else {
        const totalTime = new Date(Date.now()) - timerStart;
        console.log('Stopped timer');
        chronoTime.innerHTML = totalTime;
    }

    //Setear segundos y millisegundops (getMilli y getSeconds)
});
