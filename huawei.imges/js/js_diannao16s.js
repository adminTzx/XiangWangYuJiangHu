document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("backToTopBtn");
    const s = document.querySelector('.s3_2_1');
    const triggerOffset = s.offsetTop;

    window.onscroll = function () {
        // 回到顶部按钮显示
        if (document.documentElement.scrollTop > 1200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }

        // 变化大小逻辑
        if (window.scrollY > 3200) {
            var scrolled = window.scrollY - 3200;
            var newSize_x = 100 + scrolled * 1;
            var newSize_y = 100 + scrolled * 0.5;

            if (window.scrollY > 4500) {
                newSize_y = 484 + (scrolled - 1320) * 0.5;
                newSize_y = Math.min(newSize_y, 563);
                s.style.height = newSize_y + 'px';
            } else {
                newSize_x = Math.min(newSize_x, 841);
                newSize_y = Math.min(newSize_y, 484);
                s.style.width = newSize_x + 'px';
                s.style.height = newSize_y + 'px';
            }
        }
    };
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
