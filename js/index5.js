/* 

var : ES5 변수선언
let : ES6 변수선언

JAVA는 변수 재선언이 안됨
객체를 해보자

객체에는 member와 method
객체는 다 담을 수 있어 

*/

const log = console.log;
// 객체 선언
var Man = {
    weight: 75,
    height: 175,
    name: "홍길동",
    sex: "M", // member 변수들(property) 선언
    run: function () {
        log("뛴다.");
    }, // method 선언

    eat: function () {
        log("먹는다.");
    }
};

log(Man.name);
Man.run();

(function b() {
    log("B!");
}()); // 즉시 실행 함수 알아두자. 괄호로 실행할 수 있음.


// instance 화 시키는 것.
var Human = (function () {
    function Human(_name) {
        this.name = _name;
    } // constructor

    Human.prototype.eat = function (food) { // eat은 함수원형을 지정하는 변수, 객체의 method를 만들때 prototype을 써줘야한다.
        log(this.name + "이(가) " + food + "을(를) 먹습니다.");
    }
    return Human;
}()); // 즉시 실행 함수 형태

/*
 # ES6 문법

class Human{
    constructor(){
    }
}
 */

var hong = new Human("홍길동");
log(hong);
log(hong.name);
hong.eat("양꼬치");
// 생성자 >> 객체가 만들어질 때 최초로 실행되어지는 함수.

var gilsun = new Human("홍길순");
log(gilsun);
log(gilsun.name);
gilsun.eat("회");


// #2
// jQuery를 쓰는 가장 큰 이유는, 애니메이션 효과를 주기가 정말 편해서.
/* 
jQuery를 쓰는 이유
1. 선택자가 편하다.
2. animate, fadeIn, fadeOut, slideDown, slideUp, hide, show >> 자바스크립트로 구현하기 정말 불편, jQuery는 다 만들어져 있다.


*/

// 첫번째 애니메이션 - 같이 펼쳐짐

/* $("#box1").click(function(){
    $(this).animate({"width":"100%", "height":"100%"}, 2000, "linear", function(){}); // (자바스크립트 객체, int, 문자열, 함수)
}); */


// 두번째 애니메이션 - 가로로 펼쳐진 후, 세로로 펼쳐짐
$("#box1").click(function () {
    $(this).animate({
        "width": "100%"
    }, 2000, function () { // JSON 문법
        $(this).animate({
            "height": "100%"
        }, 1000);
    }); // (자바스크립트 객체, int, 문자열, 함수)
});

/* var n = 0;
var interval = window.setInterval(function(){
    // log(n++);
}, 500); */

$("#music > li").each(function () {
    // var per = 20;
    // var per = Math.floor(Math.random()*100); // (0 ~ 1 의 값을 갖는 난수가 발생.)*100, floor>소숫점 버리기
    var li = $(this);
    var interval = setInterval(function () {
        var per = Math.floor(Math.random() * 70 + 30);
        li.css({
            "height": (per) + "%"
        }); // css method라는게 있어서 편하다, 마음대로 바꿔줄 수 있음.
    }, 123);

}); // each가 jQuery에서 중요함. 여러개 각각에게 함수를 실행.


// 생성자에서 인자를 받겠다 ↓
var eq = new Equalizer($(".eq"), "#f82", 200); // >> 이런식으로 정보를 보내면 만들어 주겠다.
var eq = new Equalizer($(".eq2"), "#38f", 500); 



/* 
Math.floor(90.6);       // 90 : 소수점 이하 버림
Math.ceil(90.2);        // 91 : 소수점 이하 올림
Math.round(90.2);       // 90 : 반올림
Math.random();          // 0 ~ 1 의 난수 발생
*/
console.log(Math.random());