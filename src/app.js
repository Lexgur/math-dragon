const question = document.querySelector('[data-question]');
const X = document.querySelector('[data-x]');
const Y = document.querySelector('[data-y]');
const action = document.querySelector('[data-action]');
const answer = document.querySelector('[data-answer]');
const form = document.querySelector('form');
const magicAttackContainer = document.getElementById('magic-attack-container');
const magicAttack = document.getElementById('magic-attack');
const magicSound = document.getElementById('magic-sound');
const dragonHpElement = document.getElementById('dragon-hp');
const timer = document.querySelector('[data-timer]');
const playerHpElement = document.getElementById('player-hp')

let hasPlayedSound = false;
let timerActive = false;
let timerInterval;

function playSound() {
    if (!hasPlayedSound) { 
        var myAudio = new Audio("./snd/ice-dragon.mp3");
        myAudio.loop = true;
        myAudio.volume = 0.2;
        myAudio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
        hasPlayedSound = true; 
    }
}

function startTimer() {
    let secondsElapsed = 0;
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;
        timer.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//Zaidimo pagrindine logika
let randNumber = rand(1, 10);
let randNumber2 = rand(1, 10);
let randAction = '';
let dragonHp = 100;
let playerHp = 50;

X.innerText = randNumber;
Y.innerText = randNumber2;

if (Math.random() >= 0.5 || randNumber < randNumber2) {
    randAction = '+';
} else if (Math.random() > 0.5 || randNumber > randNumber2) {
    randAction = '-'
} else {
    randAction = '-'
}
action.innerText = randAction;

let correctAnswer;
if (randAction === '+') {
    correctAnswer = randNumber + randNumber2;
} else {
    correctAnswer = randNumber - randNumber2;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const userAnswer = parseInt(answer.value);

    if (userAnswer === correctAnswer) {
        if (!timerActive) {
            timerActive = true;
            startTimer();
        }
        playSound();
        playMagicAttack();
        dragonHp -= 10;
        if (dragonHp <= 0) {
            dragonHpElement.style.color = 'red';
            dragonHp = 0;
            clearInterval(timerInterval);
            alert('ŠAUNUOLĖ(-IS,), DRAKONAS NUGALĖTAS!')
        }
        dragonHpElement.innerText = dragonHp;

    } else if (userAnswer !== correctAnswer){
        if (!timerActive) {
            timerActive = true;
            startTimer();
        }
        playerHp -= 10;
        playSound();
        if (playerHp <= 0){
            playerHpElement.style.color = 'red';
            playerHp = 0;
            clearInterval(timerInterval);
            alert('NEPAVYKO, NAGI NEPASIDUOK!') 
        }  
        playerHpElement.innerText = playerHp;
        
    }
    randNumber = rand(1, 10);
    randNumber2 = rand(1, 10);
    X.innerText = randNumber;
    Y.innerText = randNumber2;

    if (Math.random() >= 0.5 || randNumber < randNumber2) {
        randAction = '+';
    } else if (Math.random() > 0.5 || randNumber > randNumber2) {
        randAction = '-'
    } else {
        randAction = '-'
    }
    action.innerText = randAction;

    if (randAction === '+') {
        correctAnswer = randNumber + randNumber2;
    } else {
        correctAnswer = randNumber - randNumber2;
    }
});

function playMagicAttack() {

    magicAttackContainer.style.display = 'block';
    magicSound.play();


    magicAttack.style.position = 'absolute';
    magicAttack.style.left = '50px';
    magicAttack.style.opacity = 1;


    let startTime = Date.now();
    let attackDistance = 1300;
    let speed = attackDistance / 2000;

    function animateMagicAttack() {
        let elapsedTime = Date.now() - startTime;
        let currentPosition = Math.min(elapsedTime * speed, attackDistance);

        magicAttack.style.left = currentPosition + 'px';

        if (elapsedTime < 2000) {
            requestAnimationFrame(animateMagicAttack);
        } else {
            magicAttackContainer.style.display = 'none';
        }
    }

    requestAnimationFrame(animateMagicAttack);
}
