
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
        if(currentIndex<=3){
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

window.onload = function(){
    let card = document.querySelector('.cardBox ul')
    let cardBox = document.querySelector('.cardBox')
    let items = document.querySelectorAll(".item")
    let leftBtn = document.querySelector(".left_lunbo")
    let rightBtn = document.querySelector(".right_lunbo")
    let points = document.querySelectorAll(".pointBox li")
    let index = 0
    items.forEach((item, index) => {
      let translateX = index * 1200
      item.style.left = `${translateX}px`
    })
    let timer = null
    points[index].style.background = 'white'
    points[index].style.width = '16px'
    points[index].style.borderRadius = '5px'
    const initInterval = () => {
      timer = setInterval(() => {
        index++
        let pointIndex = index;
        points[pointIndex].style.background = 'white'
        points[pointIndex].style.width = '16px'
        points[pointIndex].style.borderRadius = '5px'
        if (pointIndex == 0) {
          points[3].style.background = 'gray'
          points[3].style.width = '8px'
        } else {
          points[pointIndex - 1].style.background = 'gray'
          points[pointIndex - 1].style.width = '8px'
        }
    
    
        let translateX = -index * 1200
        card.style.transform = `translateX(${translateX}px)`
        if (index >= 3) {
          index = -1
        }
      }, 3000);
    }
    
    initInterval()
    cardBox.addEventListener("mouseover", () => {
      clearInterval(timer)
    })
    
    cardBox.addEventListener("mouseout", () => {
      initInterval()
    })
    // btn.addEventListener("mouseout", () => {
    //   initInterval()
    // })
    leftBtn.onclick = function () {
      if (timer) {
        clearInterval(timer)
      }
      if (index <= 0) {
        index = 4
      }
      index--
      let translateX = -index * 1200
      card.style.transform = `translateX(${translateX}px)`
    }
    rightBtn.onclick = function () {
      if (timer) {
        clearInterval(timer)
      }
      index++
      let translateX = -index * 1200
      card.style.transform = `translateX(${translateX}px)`
      if (index >= 3) {
        index = -1
      }
    }
    points.forEach((item, i) => {
      item.onclick = () => {
        points.forEach(element => {
          element.style.background = 'gray'
          element.style.width = '8px'
          element.style.borderRadius = '50%'
        });
        item.style.background = 'white'
        item.style.width = '16px'
        item.style.borderRadius = '5px'
        index = i;
        let translateX = -index * 1200
        card.style.transform = `translateX(${translateX}px)`
      }
    })
}


