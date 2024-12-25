// 手风琴效果
document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.shoushan li');

    accordionItems.forEach(function (item) {

        item.addEventListener('click', function () {
    
            accordionItems.forEach(function (otherItem) {
                // if (otherItem !== item) {
                    otherItem.classList.remove('active');
                // }
            });

            item.classList.add('active');

        });
    });
});


//回到顶部
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("backToTopBtn");

    window.onscroll = function () {
        if ( document.documentElement.scrollTop > 1000) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}