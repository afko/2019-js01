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




// 2019 02 08
var Equalizer = (function () {
    function Equalizer(parent, bgColor, size) {
        var obj = this; // 현재 상태의 객체 주소를 obj에 저장.

        // ★ template string의 사용법

        // #1 - template string 안에 html 태그를 넣을 수 있다.
        /* 
        var html = `
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        `; // template string- ES6문법

        // #2 - for문 쓰기가 용이하고, template string 안에서는 $표시가 javascript 표시가 된다.
        var html = `<ul>`;
        
        for(var i=1; i<=5; i++){
            html += `<div>${i}번</div>`;
        }
        html += '</ul>';
        */

        // #3 template string 안 쓰고.
        var html = '<ul id="music">';
        for (var i = 1; i <= 5; i++) html += '<li></li>';
        html += '</ul>';


        this.parent = $(parent); // 함수 안에서 만들어진 변수들은 함수 안에서만, 함수를 벗어날 수 없다. 따라서, this.parent를 통해 전역변수로 선언해준다.
        this.bgColor = bgColor; // 카멜 표기법
        this.size = size;

        // 현재 여기서 this는 객체(Equalizer)를 얘기하는 것이지만, 다음과 같이 쓰인다면 window가 this가 된다.
        /*   $(window).click(function(){

             })
        */

        // 생성
        this.parent.append(html);
        this.ul = this.parent.children("ul");
        this.li = this.ul.children("li");

        // css

        this.ul.css({
            "width": this.size + "px",
            "height": this.size + "px",
            "position": "relative",
        });
        this.li.css({
            "background-color": this.bgColor,
            "width": "20%",
            "height": "20%",
            "position":"absolute",
            "bottom":"0"
        });
        // 위에 문장을 자바스크립트로 표현한다면 다음과 같다.
        // this.li[0].style.backgroundColor = this.bgColor; >> 자바스크립트 형태, 속성들이 property형식으로 들어가 있음.


    }
    return Equalizer;
}());



// 생성자에서 인자를 받겠다 ↓
var eq = new Equalizer($(".eq"), "#f90", 200) // >> 이런식으로 정보를 보내면 만들어 주겠다.