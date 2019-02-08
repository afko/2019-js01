console.log(    $(".box2").width()          ); // width는 getter setter 겸용
console.log(    $(".box2").innerWidth()     );
console.log(    $(".box2").outerWidth()     );
console.log(    $(".box2").outerWidth(true) );
console.log(    $(".box2").position()       ); // 단위는 pixel
console.log(    $(".box2").offset()         );

var gap = [];
$(".page").each(function(i){
    gap[i] = $(this).position().top;
});

console.log(gap);

$(".navs > li").click(function(){
    var n = $(this).data("page"); // data 중에 page를 가져와
    $("html, body").stop().animate({"scrollTop": gap[n]+"px"}, 750); // scrollTop은 css에 없는 명령 stop()을 해줘야 기존 animate가 정지
    
});