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

function playSound() {
    const myAudio = new Audio("/snd/ice-dragon.mp3");
    if (typeof myAudio.loop === 'boolean') {
        myAudio.loop = true;
    } else {
        myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    myAudio.volume = 0.15;
    myAudio.play();
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//start the rand numbs
let randNumber = rand(1, 10);
let randNumber2 = rand(1, 10);
let randAction = '';
let dragonHp = 100;

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
        console.log('Good job!');
        playMagicAttack();
        dragonHp -= 10;
        if (dragonHp <= 0) {
            dragonHpElement.style.color = 'red';
            dragonHp = 0;
            alert('ŠAUNUOLĖ, DRAKONAS NUGALĖTAS!')
        }
        dragonHpElement.innerText = dragonHp;

    } else {
        console.log('Try again!');

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
