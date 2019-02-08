// 2019 02 08 Equalizer 객체 생성
var Equalizer = (function () {
    function Equalizer(parent, bgColor, size) {
        var obj = this; // 현재 상태의 객체 주소를 obj에 저장.

        // ★ template string의 사용법 (#1~2)

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

        // #3 template string 안 쓰고 하기
        var html = '<ul>';
        for (var i = 1; i <= 8; i++) html += '<li></li>';
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

        console.log(this.li[0]);
        console.log(this.li.eq(1));
        console.log(this.li.eq(1)[0]);

        // for (var i in this.li){
        //     console.log(i); // jQuery 객체가 무엇을 담고 있는지 보여준다.
        // }

        this.li.each(function (i) { // jQuery의 each method는 개수만큼 함수를 실행하는데 인자로 i를 가질 수 있다.
            $(this).css({
                "background-color": obj.bgColor,
                "width": "20%",
                "height": "20%",
                "left": (i * 20) + "%",
                "position": "absolute",
                "bottom": "0"
            });
            var li = $(this);
            var interval = setInterval(function () {
                li.css({
                    "height":(Math.floor(Math.random()*81+20))+"%"
                });
            }, 100);
        });


        // jQuery each문 쓰기 전 상태. li 전부에 적용한다. 위에 것은 각각 다르게 적용된다.
        // this.li.css({
        //     "background-color": this.bgColor,
        //     "width": "20%",
        //     "height": "20%",
        //     "position": "absolute",
        //     "bottom": "0"
        // });


        // 위에 문장을 자바스크립트로 표현한다면 다음과 같다.
        // this.li[0].style.backgroundColor = this.bgColor; >> 자바스크립트 형태, 속성들이 property형식으로 들어가 있음.


    }
    return Equalizer;
}());