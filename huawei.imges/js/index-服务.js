document.addEventListener("DOMContentLoaded", function() {
let left = document.querySelector(".botton-left");
    let right = document.querySelector(".botton-right");
    let m = document.querySelectorAll(".m");
    let imges = document.querySelector(".box");

    let time;
    let index = 0;

    function position() {
        imges.style.left = (index * -100) + "%";
    }

    function add() {
        if (index >= m.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }

    function dec() {
        if (index < 1) {
            index = m.length - 1;
        } else {
            index--;
        }
    }

    function timer() {
        time = setInterval(() => {
            index++;
            dec();
            add();
            position();
        }, 3000)
    }

    left.addEventListener("click", () => {
        dec();
        position();
        //用于停止 setInterval() 方法执行的函数代码
        clearInterval(time);
        timer();
    })
    right.addEventListener("click", () => {
        add();
        position();
        clearInterval(time);
        timer();
    })

    for (let i = 0; i < m.length; i++) {
        m[i].addEventListener("click", () => {
            index = i;
            position();
            clearInterval(time);
            timer();
        })
    }
    timer();
});