
let childArray;

// 计算点击了几次
let currentIndex = 1;  
const count=3;

document.addEventListener('DOMContentLoaded', function () {
   let left=document.querySelector(".button_left");
   let right=document.querySelector(".button_right");
   let box_left=document.querySelector(".inter_box .left");

      // 获取 .inter_box 元素
      const interBox = document.querySelector('.inter_box');


      // 获取子元素
     const childElements = interBox.children;

      //将元素以数组存储
       childArray = Array.from(childElements);
   
   //右按钮点击事件
    right.addEventListener("click", () => {
        // console.log(currentIndex)
        if(currentIndex<=2){
            ++currentIndex;
            for (let i = 0; i < 6; i++) {
                let currentElement = childArray[i];
                //  if(currentIndex==1&&i==0)    currentElement.style.left =(parseInt(currentElement.style.left) )-350+'px';
                // console.log(currentElement);
                currentElement.style.left =(parseInt(currentElement.style.left) || 0)-350+'px';
            }
        }
    });

    // 左按钮点击事件
    left.addEventListener("click", () => {
        // console.log(currentIndex)
            if(currentIndex>1){
               --currentIndex;
               for (let i = 0; i < 6; i++) {
                 let currentElement = childArray[i];
                 currentElement.style.left =(parseInt(currentElement.style.left) || 0)+350+"px";
             }
          }
       
    });

});


