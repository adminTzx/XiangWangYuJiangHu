
window.onload = function(){
let count = 0 ;
//监听click事件
//jquery方法
$('.add').on('click', function () {
  let cart = $('.car');
  //点击后,向上获取父元素, 然后使用find寻找对应图片
  let getImg = $(this).parent('.bottom').parent('li').find('img').eq(0);
  if(getImg){
    //复制图片，确定位置
    var imgclone = getImg.clone().offset({
      top: getImg.offset().top,
      left: getImg.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({ //添加到body, 并且添加动画
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');

        //商品数量+1
        setTimeout(function () {
          count++;
          $(".car .number").text(count);
        }, 1500);
    
        //缩小图片
        imgclone.animate({
          'width': 0,
          'height': 0
        }, function () {
          $(this).detach()
        })

  }
})}