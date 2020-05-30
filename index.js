//DOM
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const light01 = document.getElementById('light01');
const light02 = document.getElementById('light02');
const light03 = document.getElementById('light03');
const light04 = document.getElementById('light04');
const goBtn = document.getElementById('goBtn');
const chronoTime = document.getElementById('chronoTime');
const scoresDisp = document.getElementById('scores');
const goBtnText = document.getElementById('goBtnText');
const main = document.getElementById('main');
const playBtn = document.getElementById('playBtn');
const gameStart = document.getElementById('gameStart');

let counter = 5;
let timerStart;

playBtn.addEventListener('click', (_e) => {
    main.style.display = 'flex';
    gameStart.style.display = 'none';
});

const lightsAction = () => {
    if (counter === 4) {
        light01.style.background = "url('red.jpg')";
        light01.style.backgroundSize = 'cover';
    } else if (counter === 3) {
        light02.style.background = "url('red.jpg')";
        light02.style.backgroundSize = 'cover';
    } else if (counter === 2) {
        light03.style.background = "url('red.jpg')";
        light03.style.backgroundSize = 'cover';
    } else if (counter === 1) {
        light04.style.background = "url('red.jpg')";
        light04.style.backgroundSize = 'cover';
    } else if (counter === 0) {
        goBtnText.innerText = 'GO';
        light01.style.background = "url('green.jpg')";
        light02.style.background = "url('green.jpg')";
        light03.style.background = "url('green.jpg')";
        light04.style.background = "url('green.jpg')";
        light01.style.backgroundSize = 'cover';
        light02.style.backgroundSize = 'cover';
        light03.style.backgroundSize = 'cover';
        light04.style.backgroundSize = 'cover';
        goBtn.style.background = 'rgb(39, 202, 24)';
        goBtn.addEventListener(
            'mouseover',
            (e) => (goBtn.style.background = 'rgb(36, 180, 23)')
        );
        goBtn.addEventListener(
            'mouseout',
            (e) => (goBtn.style.background = 'rgb(39, 202, 24)')
        );

        timerStart = new Date(Date.now());
    }
};

const failed = () => {
    chronoTime.innerText = 'TOO SOON';
    goBtn.style.display = 'none';
};

//LISTENERS
startBtn.addEventListener('click', (_e) => {
    goBtn.style.display = 'flex';
    goBtn.style.background = 'orange';
    goBtn.addEventListener(
        'mouseover',
        (e) => (goBtn.style.background = 'rgb(230, 150, 3)')
    );
    goBtn.addEventListener(
        'mouseout',
        (e) => (goBtn.style.background = 'orange')
    );

    startBtn.style.visibility = 'hidden';

    const interval = setInterval(() => {
        counter = counter - 1;
        lightsAction();

        if (counter === 0) {
            clearInterval(interval);
            restartBtn.style.display = 'block';
        }
    }, 1000);
});

restartBtn.addEventListener('click', (_e) => {
    counter = 5;
    light01.style.background = "url('yellow.jpg')";
    light02.style.background = "url('yellow.jpg')";
    light03.style.background = "url('yellow.jpg')";
    light04.style.background = "url('yellow.jpg')";
    light01.style.backgroundSize = 'cover';
    light02.style.backgroundSize = 'cover';
    light03.style.backgroundSize = 'cover';
    light04.style.backgroundSize = 'cover';

    goBtn.style.display = 'none';
    goBtnText.innerText = 'GET READY';
    restartBtn.style.display = 'none';
    startBtn.style.visibility = 'visible';
});

goBtn.addEventListener('click', (_e) => {
    if (counter !== 0) {
        failed();
    } else {
        const totalTime = new Date(Date.now()) - timerStart;
        goBtn.style.display = 'none';

        const seconds = `0${new Date(totalTime).getSeconds()}`;
        const milliseconds = new Date(totalTime).getMilliseconds().toString();

        let milliStr;

        if (milliseconds < 10 && milliseconds > 0)
            milliStr = `000${milliseconds}`;
        if (milliseconds < 100 && milliseconds >= 10)
            milliStr = `00${milliseconds}`;
        if (milliseconds < 1000 && milliseconds >= 100)
            milliStr = `0${milliseconds}`;

        const score = document.createElement('span');
        chronoTime.innerHTML = seconds + ':' + milliStr;
        score.innerHTML = seconds + ':' + milliStr;
        scoresDisp.appendChild(score);
    }
});
