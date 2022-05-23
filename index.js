let val = "hello";
console.log(val);

val = "こんにちは";
console.log(val);

const valA = "world";
// val2 = "世界"; constは定数 変更できない
console.log(valA);

// let break = "エラー"; 予約文字は使えない p49

let person_name = "スネークケース";//htmlで使う
let personName = "キャメルケース";//jsではこれが主流
let PersonName = "パスカルケース";//あまり使わない


//関数
function sum(val1,val2){
    return val1 + val2;
}
let result = sum(10,20);
console.log(result);

function multiply(val3,val4){
    return val3 * val4;
}
console.log(multiply(7,9));
console.log(multiply(-11,9));

//引数がない関数
function test(){
    console.log("表示される");
    return "テスト";//リターンがなくても動く
}
console.log(test());
test()

let count = 0;

document.getElementById('sikaku').addEventListener('mouseenter',function(){
    // this.style.backgroundColor = "blue"
    // this.textContent = "青色の四角形"

    // this.style.color = "white"
    // this.style.fontSize = "28px"
    // console.log("クリックされた！");
})
document.getElementById('sikaku').addEventListener('mouseleave',function(){
    // this.style.backgroundColor = "red"
    // count = 0;
    // this.textContent = "赤色の四角形"
})
/*
document…html全体から
getElementById('sikaku')…idが'sikaku'の要素を探せ
addEventListener('click',function(){})…クリックしたらこの関数を実行せよ
addEventListener('イベントの種類','内容つまり関数')
*/

document.getElementById('sikaku').addEventListener('click',function(){

    //textContent には、文字（テキスト）が入る
    //console.log(this.textContent);

    // if(count === 0){
    //     this.style.backgroundColor = "green"
    // }else if(count === 1){
    //     this.style.backgroundColor = "yellow"
    // }else if(count === 2){
    //     this.style.backgroundColor = "cyan"
    // }else if(count === 3){
    //     this.style.backgroundColor = "pink"
    // }

    // if(count % 4 === 0){
    //     this.style.backgroundColor = "green"
    //     this.textContent = "緑色の四角形"
    // }else if(count % 4 === 1){
    //     this.style.backgroundColor = "yellow"
    //     this.textContent = "黄色の四角形"
    // }else if(count % 4 === 2){
    //     this.style.backgroundColor = "cyan"
    //     this.textContent = "シアンの四角形"
    // }else if(count % 4 === 3){
    //     this.style.backgroundColor = "pink"
    //     this.textContent = "ピンクの四角形"
    // }

    if(count % 2 === 0){
            this.textContent = "〇"
            this.style.color = "red"
            this.style.fontSize = "60px"
            this.style.padding = "10px"
        }else if(count % 2 === 1){
            this.textContent = "×"
            this.style.color = "blue"
            this.style.fontSize = "60px"
            this.style.padding = "10px"
        }
    console.log(count);

    ++count;
})
document.getElementById('sikaku').addEventListener('dblclick',function(){
    //this.style.backgroundColor = "black"
})

document.addEventListener("keydown",keyDown,true);

function keyDown(e){
    if(e.keyCode == 32){
        console.log("通過");
    }
}

