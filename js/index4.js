const log = console.log;

function sendForm(){
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
    log(uid.value); // uid의 value를 출력해라.
   

    
}