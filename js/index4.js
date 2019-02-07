/* 
Method와 Property를 구분하는 것으로 프로그래밍을 시작한다고 할 수 있다.

○ Method(동작)
    alert("문자열");
    focus();
    submit();
    if() 
    for()

○ Property
    value, length
    // js 문법
    var val = obj.value : 값을 받아온다.
    obj.value = 10 : 값을 대입한다.
    
    // jQuery 문법
    var val = $(obj).val() : 값을 가져온다.
    $(obj).val(10); : 값을 대입한다.
 */

const log = console.log;

function sendForm() {
    var f = document.join_form; // form은 굳이 id로 접근하지 않는다. id로 접근하려면 getElementById로 해야함. name으로 접근하자.

    var uid = f.uid;
    var pw1 = f.pw1;
    var pw2 = f.pw2;
    var uname = f.uname;
    var email1 = f.email1;
    var email2 = f.email2;
    var tel1 = f.tel1;
    var tel2 = f.tel2;
    var tel3 = f.tel3;
    var sex = f.sex;
    var favorite = f.favorite;
    var mystory = f.mystory;

    // log(f);
    // log(uid.value); // uid의 value를 출력해라.


    // 빈 값 체크
    if (uid.value == "") { // null은 빈 객체라는 의미에 가깝다.
        alert("아이디를 입력하세요");
        uid.focus();
        return; // 함수가 return을 만나면 종결
    }

    // 길이 확인
    if (uid.value.length < 8) {
        alert("아이디는 8글자 이상이어야 합니다.");
        uid.focus();
        return;
    }

    // PW 처리
    if (pw1.value == "") {
        alert("패스워드를 입력하세요.");
        pw1.focus();
        return;
    }

    if (pw1.value.length < 8) {
        alert("패스워드는 8자 이상입니다.");
        pw1.focus();
        return;
    }

    if (pw2.value == "") {
        alert("패스워드를 한 번 더 입력하세요.");
        pw2.focus();
        return;
    }

    if (pw2.value.length < 8) {
        alert("패스워드는 8자 이상입니다.");
        pw2.focus();
        return;
    }

    if (pw1.value != pw2.value) {
        alert("패스워드는 동일해야합니다.");
        pw1.value = "";
        pw2.value = "";
        pw1.focus();
        return;
    }

    // 이름
    if (uname.value == "") {
        alert("이름을 입력하세요.");
        uname.focus();
        return;
    }

    // 이메일 체크
    if (email1.value == "") {
        alert("이메일을 입력하세요.");
        email1.focus();
        return;
    }

    if (email2.value == "") {
        alert("이메일 도메인을 입력하세요.");
        email2.focus();
        return;
    }

    f.submit();
};

// document.getElementById("email3") : ES5 문법
// document.querySelector("#email3") : ES6 문법, jQuery와 같다.

// jQuery $("select[name='email3']").on("change", function()){}

$("#email3").on("change", function () {
    // this.value;      -- 자바스크립트, 자바스크립트 문법을 써야한다.
    // $(this).val();   -- jQuery, jQuery 문법을 써야한다. 
    // 자바스크립트와 jQuery를 마음대로 드나들 수 있어야 한다.
    // log(document.join_form.email2);

    $("input[name='email2']").val($("#email3").val()); // 값을 바꿀때는 val() 안에.
    // document.join_form.email2.value = document.join_form.email3.value; -- javascript 버전
    // document.querySelector("input[name='email2']").value = document.querySelector("#email3").value; -- ES6 버전

    if ($("#email#".val() == "")) {
        $("input[name='email2']").focus();
    }

});


// 숫자만 입력

$(".number").on("keyup", function(){
    log($(this).val());

    var exp = /^[0-9]*$/
    var val = $(this).val();

    if(!exp.test(val)){
        log("숫자를 입력하세요.")
        $(this).val(val.replace(exp,''));
    };
});


/* var regexp = /^[0-9]*$/

v = $(this).val();

if( !regexp.test(v) ) {

	alert("숫자만 입력하세요");

	$(this).val(v.replace(regexp,''));

}; */
