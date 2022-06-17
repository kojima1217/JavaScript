let ansFlag = true;
// var field = document.getElementById("canvas");
// field.width = 200;
// field.height = 200;

let rockFlag = false;

const answers = ["かわいい", "超かわいい", "テラかわいい", "マジかわいい"];
const answerIDs = ["answerA", "answerB", "answerC", "answerD"];
for (let i = 0; i < answerIDs.length; i++) {
    document.getElementById(answerIDs[i]).textContent = answers[i];
}

const makeQuiz = (nameID, text, color) => {
    // function mQ() {
    //     if (ansFlag) {
    //         nID.textContent = text;
    //         nID.style.color = color;
    //         rockFlag = true;
    //         ansFlag = false;
    //     }
    // }
    const nID = document.querySelector(nameID);
    const mQ = () => {
        if (ansFlag) {
            nID.textContent = text;
            nID.style.color = color;
            rockFlag = true;
            ansFlag = false;
        }
    }
    nID.addEventListener('click', mQ)
}

makeQuiz("#answerA", "もう一声", "blue");
makeQuiz("#answerB", "おしい", "blue");
makeQuiz("#answerC", "天才", "red");
makeQuiz("#answerD", "それな", "blue");


const jikangire = (nameID2) => {
    const nID2 = document.querySelector(nameID2);
    nID2.textContent = "時間切れ";
    nID2.color = "black";
}

setTimeout(() => {
    if (!rockFlag) {
        ansFlag = false;
        jikangire("#answerA");
        jikangire("#answerB");
        jikangire("#answerC");
        jikangire("#answerD");
    }
}, 5000);

// document.querySelector("#answerA").addEventListener('click', function () {
//     if (ansFlag) {
//         this.textContent = "もう一声"
//         this.style.color = "blue"
//         ansFlag = false;
//     }
// })
// document.getElementById('answerB').addEventListener('click', function () {
//     if (ansFlag) {
//         this.textContent = "おしい"
//         this.style.color = "blue"
//         ansFlag = false;
//     }
// })
// document.getElementById('answerC').addEventListener('click', function () {
//     if (ansFlag) {
//         this.textContent = "天才"
//         this.style.color = "red"
//         ansFlag = false;
//     }
// })
// document.getElementById('answerD').addEventListener('click', function () {
//     if (ansFlag) {
//         this.textContent = "それな"
//         this.style.color = "blue"
//         ansFlag = false;
//     }
// })
document.addEventListener("keydown", keyDown, true);

const ansA = document.getElementById('answerA');
const ansB = document.getElementById('answerB');
const ansC = document.getElementById('answerC');
const ansD = document.getElementById('answerD');

function keyDown(e) {
    if (e.keyCode == 32) {
        document.querySelector("h2").innerHTML = "問２：やっぱりうちの猫は？"

        ansA.textContent = "ギガかわいい"
        ansA.style.color = "black"

        ansB.textContent = "世界一かわいい"
        ansB.style.color = "black"

        ansC.textContent = "神"
        ansC.style.color = "black"

        ansD.textContent = "言葉にできない"
        ansD.style.color = "black"

        ansFlag = true;
    }
}

document.addEventListener("mousedown", mouseDown, true);

function mouseDown(event) {
    event.preventDefault();
    if (event.which == 1) {
        console.log("左クリック");
    }
    if (event.which == 2) {
        console.log("中クリック");
    }
    if (event.which == 3) {
        console.log("右クリック");
        flagA = false;
    }
}

document.addEventListener("mouseup", mouseUp, true);

function mouseUp(event) {
    if (event.which == 1) {
        console.log("左クリック離された");
    }
    if (event.which == 2) {
        console.log("中クリック離された");
    }
    if (event.which == 3) {
        console.log("右クリック離された");
    }
}

// window.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// window.oncontextmenu = function () {
//     return false;
// };
let i = 0;
window.onmousewheel = function (event) {
    //console.log(event.wheelDelta);

    if (event.wheelDelta > 0) {
        i--;
    } else {
        i++;
    }
    if (i > 3) {
        i = 0;
    }
    if (i < 0) {
        i = 3;
    }
    console.log(i);
}