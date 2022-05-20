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

document.getElementById('sikaku').addEventListener('mouseenter',function(){
    this.style.backgroundColor = "blue"
    // this.style.color = "white"
    // this.style.fontSize = "28px"
    // console.log("クリックされた！");
})
document.getElementById('sikaku').addEventListener('mouseleave',function(){
    this.style.backgroundColor = "red"
})
/*
document…html全体から
getElementById('sikaku')…idが'sikaku'の要素を探せ
addEventListener('click',function(){})…クリックしたらこの関数を実行せよ
addEventListener('イベントの種類','内容つまり関数')
*/

document.getElementById('sikaku').addEventListener('click',function(){
    this.style.backgroundColor = "green"
})
document.getElementById('sikaku').addEventListener('dblclick',function(){
    this.style.backgroundColor = "black"
})
