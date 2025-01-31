/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var question = document.querySelector('[data-question]');
var X = document.querySelector('[data-x]');
var Y = document.querySelector('[data-y]');
var action = document.querySelector('[data-action]');
var answer = document.querySelector('[data-answer]');
var form = document.querySelector('form');
var magicAttackContainer = document.getElementById('magic-attack-container');
var magicAttack = document.getElementById('magic-attack');
var magicSound = document.getElementById('magic-sound');
var dragonHpElement = document.getElementById('dragon-hp');
function rand(min, max) {
  var minCeiled = Math.ceil(min);
  var maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//start the rand numbs
var randNumber = rand(1, 10);
var randNumber2 = rand(1, 10);
var randAction = '';
var dragonHp = 100;
X.innerText = randNumber;
Y.innerText = randNumber2;
if (Math.random() >= 0.5 || randNumber < randNumber2) {
  randAction = '+';
} else if (Math.random() > 0.5 || randNumber > randNumber2) {
  randAction = '-';
} else {
  randAction = '-';
}
action.innerText = randAction;
var correctAnswer;
if (randAction === '+') {
  correctAnswer = randNumber + randNumber2;
} else {
  correctAnswer = randNumber - randNumber2;
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var userAnswer = parseInt(answer.value);
  if (userAnswer === correctAnswer) {
    console.log('Good job!');
    playMagicAttack();
    dragonHp -= 10;
    if (dragonHp <= 0) {
      dragonHpElement.classList.add('dead');
    dragonHp = 0;
    alert('ŠAUNUOLĖ(-IS), DRAKONAS NUGALĖTAS!');
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
    randAction = '-';
  } else {
    randAction = '-';
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
  var startTime = Date.now();
  var attackDistance = 1300;
  var speed = attackDistance / 2000;
  function animateMagicAttack() {
    var elapsedTime = Date.now() - startTime;
    var currentPosition = Math.min(elapsedTime * speed, attackDistance);
    magicAttack.style.left = currentPosition + 'px';
    if (elapsedTime < 2000) {
      requestAnimationFrame(animateMagicAttack);
    } else {
      magicAttackContainer.style.display = 'none';
    }
  }
  requestAnimationFrame(animateMagicAttack);
}

window.addEventListener("load", playSound);

function playSound() {
  var myAudio = document.getElementById("background-sound");
  myAudio.src = "./snd/ice-dragon.mp3"; 
  if (typeof myAudio.loop === 'boolean') {
    myAudio.loop = true; 
  } else {
    myAudio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }
  myAudio.volume = 0.2; 
  myAudio.play(); 
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcart"] = self["webpackChunkcart"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;