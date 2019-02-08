/* 
--- jQuery를 바라보는 법 ---

<div class="div">
    <ul class="ul">
    <--prepend
        <li class="li">1</li>
        <li class="li">2</li>
        <li class="li">3</li>
        <li class="li">4</li>
    <--append
    </ul>
</div>


1. selector (선택자)
- $()
- $().children();   // 자식선택자
- $().find();       // 자손선택자
- $().next();
- $().prev();
- $().eq();         // 몇 번째 놈에게 무엇을 하겠다.    

- $(".div")
- $(".div").children(".ul");         // ul : 자식선택자
- $(".div").children(".li");         // undefined : 자식이 아니라 자손이기 때문에
- $(".div").find(".li");             // li : 자손선택자
- $(".li").eq(2)                     // <li class="li">3</li>
- $(".li").eq(2).next();             // <li class="li">4</li>
- $(".li").eq(2).prev();             // <li class="li">2</li>
- $(".li").eq(2).parent()            // <ul class="ul"></ul>
- $(".li").eq(2).parent().next();    // undefined
- $(".li").eq(2).parent().parent();  // <div class="div"></div>



$(".li").click(function(){
    var n = $(this).index(); // 이게 몇 번째 놈이다.
});

$(".li").each(function(i){ // i 는 index, for문 처럼 순차적으로 돈다.
    console.log(i);
});


2. DOM(Document Object Model)

var div = $(".div");
- $().append('<div></div>');
- $().append(div); // jQuery 객체 자체를 붙일 수도 있다.

거꾸로
- $('<div></div>').appendTo();
- $(div).appendTo();

DOM 관리 명령어
- append(), appendTo(), prepend(), prependTo() : Insert // 내용을 추가한다.
- html() : Update // 내용을 교체한다.
    ex) $(".div").html('<div></div>') : innerHTML과 같다. => <div class="div"><div></div></div>
- empty() : Delete // 내용을 삭제한다.
    ex) $(".div").empty() => <div class="div"></div>
- remove() : Delete 인데 // 객체 자체를 삭제한다.
    ex) $(".div").remove() => .div 자체를 삭제한다.
- clone() : 복제
    ex) var ul = $(".ul").clone(); : ul을 복사
        $(".div").append(ul); : ul을 붙여넣기


3. Animation 관련
- 실습 index6.js 참조

4. Ajax
- 실습 index7.js 참조
*/
