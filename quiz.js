let ansFlag = true;

document.getElementById('answerA').addEventListener('click', function () {
    if (ansFlag) {
        this.textContent = "もう一声"
        this.style.color = "blue"
        ansFlag = false;
    }
})
document.getElementById('answerB').addEventListener('click', function () {
    if (ansFlag) {
        this.textContent = "おしい"
        this.style.color = "blue"
        ansFlag = false;
    }
})
document.getElementById('answerC').addEventListener('click', function () {
    if (ansFlag) {
        this.textContent = "天才"
        this.style.color = "red"
        ansFlag = false;
    }
})
document.getElementById('answerD').addEventListener('click', function () {
    if (ansFlag) {
        this.textContent = "それな"
        this.style.color = "blue"
        ansFlag = false;
    }
})
document.addEventListener("keydown", keyDown, true);

function keyDown(e) {
    if (e.keyCode == 32) {
        document.querySelector("h2").innerHTML = "問２：やっぱりうちの猫は？"

        document.getElementById('answerA').textContent = "ギガかわいい"
        document.getElementById('answerA').style.color = "black"

        document.getElementById('answerB').textContent = "世界一かわいい"
        document.getElementById('answerB').style.color = "black"

        document.getElementById('answerC').textContent = "神"
        document.getElementById('answerC').style.color = "black"

        document.getElementById('answerD').textContent = "言葉にできない"
        document.getElementById('answerD').style.color = "black"

        ansFlag = true;
    }
}

document.addEventListener("mousedown", mouseDown, true);

function mouseDown(event) {
    event.preventDefault();
    if(event.which == 1){
        console.log("左クリック");
    }
    if(event.which == 2){
        console.log("中クリック");
    }
    if(event.which == 3){
        console.log("右クリック");
    }
}

document.addEventListener("mouseup", mouseUp, true);

function mouseUp(event){
    if(event.which == 1){
        console.log("左クリック離された");
    }
    if(event.which == 2){
        console.log("中クリック離された");
    }
    if(event.which == 3){
        console.log("右クリック離された");
    }
}

window.addEventListener('contextmenu', function(e){
    e.preventDefault();
  });

  window.oncontextmenu = function(){
    return false;
  };

  window.onmousewheel = function(event){
	console.log(event.wheelDelta);
}