// 배열 - array

// 숫자 6개를 변수에 저장한다고 가정하자.
var num1 = 10;
var num2 = 14;
var num3 = 16;
var num4 = 25;
var num5 = 34;
var num6 = 44;

// 위 처럼 하면 귀찮다;

// #1 new Array(); 를 활용하여 배열 만들기
var array = new Array();
array[0] = 10;
array[1] = 14;
array[2] = 16;
array[3] = 25;
array[4] = 34;
array[5] = 44;

// #2 생성할때부터 대괄호를 활용하여 배열 만들기
var array2 = [10, 14, 16, 25, 34, 44];

// #3 객체를 활용할 때 초기에 선언할 수 있다.
var array3 = new Array(10, 14, 16, 25, 34, 44);

// ★ 배열에 함수도 넣을 수 있다.
var arrayFunc = new Array(10, 16, function () {}, 22, 24, 32);

// 배열의 장점: 순서가 있다. >> 반복문 즉 일괄작업이 가능하다.
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 배열을 쓰게 되면 for문을 다음과 같이 쓸 수 있다.
for (var i in array) {
    console.log(array[i]);
}

for (var i = 0; i < 1; i++) {
    $("#boxes").append('<div id="box' + i + '">' + i + '</div>'); // jQuery method는 return값이 있다.
}
//jQuery는 return값으로 append 앞의 객체를 반환한다. 여기서는 #boxes.


var box = [];
for (var i = 0; i < 6; i++) {
    box[i] = $('<div id="box' + i + '">' + i + '</div>').appendTo("#boxes"); // div id box를 return하고 싶을때는 appendTo를 활용해서 위치를 바꾸자.
}

box[5].css({
    "width": "100px",
    "height": "100px",
    "font-size": "50px"
});

/* box.each(function(){

}); */

for (var i in box) {
    box[i].click(function () {
        $(this).css({
            "width": "100px",
            "height": "100px",
            "font-size": i + "px"
        })
    });
}


for (var i = 0; i < 100; i++) {
    $("#boxes").append('<div class="box">' + i + '</div>');
}

$(".box").click(function(){ // 이 클래스에 해당되는 모든 애들에게 click 이벤트를 준다는 것.
    $(this).css({
        "width": "100px",
        "height": "100px",
        "font-size": "20px"
    });
});



// void 형 (공허한,, return값이 void형인) - return값이 없는 함수
function a() {
    console.log("Hi! a ");
}

// return - return값이 있는 함수
function b() {
    console.log("Hi! b");
    return "OK";
}

console.log(a());
console.log(b());