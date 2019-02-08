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


3. Animation 관련 method

- animate({}, 2000)                                     :
- fadeIn(1000), fadeOut(1000), fadeToggle(1000)         :
- show(1000), hide(1000), toggle(1000)                  :
- slideUp(1000), slideDown(1000), slideToggle(1000)     :

4. Dimensions
* https://www.w3schools.com/jquery/jquery_dimensions.asp 참고
** 얘네들을 html에서 가져오는 것이 힘들다.
- width() / innerWidth() / outerWidth(true)             : 내부 사이즈 / 패딩을 포함한 내부 사이즈 / 보더 및 마진을 포함한 사이즈
- height() / innerHeight() / outerHeight(true)          : 

- position();
- offset();
- scrollTop(); // 브라우저에서 보이지 않는 페이지의 윗부분 (스크롤 했을 시)

width는 그때그때 다르다.
box-sizing:content-box;     ==== content만
box-sizing:border-box;      ==== border까지 포함

- 실습 index6.js 참조

5. Ajax
- 실습 index7.js 참조
*/
