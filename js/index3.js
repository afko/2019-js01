const log = console.log;

// log($("#box-wrap"));

// 반복문
/* for(초기값; 조건; 증가값;){
    반복할 구문
} */

// i = i + 1;


$("#bt-ok").click(function(){
    for (var i = 1, sum = 0; i <= 100; i++) {
        $("#box-wrap").append('<div> '+ i +' </div>'); // 이미지를 넣으면 이미지가, 상품명을 넣으면 상품명이 들어간다.
        $("#box-wrap").prepend('<div> '+ i +' </div>'); // 앞에다 붙여라. 기존에
    };
});

// #1

/* for (var i = 1, sum = 0; i <= 100; i++) {
    // sum += i; // sum = sum + i;
}; */
// log(sum);