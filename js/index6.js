console.log($(".box2").width()); // width는 getter setter 겸용
console.log($(".box2").innerWidth());
console.log($(".box2").outerWidth());
console.log($(".box2").outerWidth(true));
console.log($(".box2").position()); // 단위는 pixel
console.log($(".box2").offset());

var gap = [];
$(".page").each(function (i) {
    gap[i] = $(this).position().top;
});

console.log(gap);

$(".navs > li").click(function () {
    var n = $(this).data("page"); // data 중에 page를 가져와
    $("html, body").stop().animate({
        "scrollTop": gap[n] + "px"
    }, 750); // scrollTop은 css에 없는 명령 stop()을 해줘야 기존 animate가 정지 
    // $(".subs").not($(this).children(".subs")).stop().slideUp(300);
    // $(this).children(".subs").stop().slideToggle(300);
});

/* 
// hover - 한줄로 쓸때
$(".nav").hover(function () {}, function () {});

// hover 두줄로 쓸때
$(".nav").mouseover(function () {});
$(".nav").mousetouch(function () {}); // 최근에는 모바일 환경을 고려하여 mousetouch로
$(".nav").mouseleave(function () {}); */

/* 
$(".nav").hover(function () {
    // hover on
    $(".subs").stop().slideUp(300);
    $(this).children(".subs").stop().slideDown(300);
}, function () {
    // hover off
    $(".subs").stop().slideUp(300);
});
*/

$(".nav").hover(function () {
    // hover on
    $(".subs").stop().fadeOut(300);
    $(this).children(".subs").stop().fadeIn(300);
}, function () {
    // hover off
    $(".subs").stop().fadeOut(300);
});