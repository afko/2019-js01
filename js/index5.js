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


