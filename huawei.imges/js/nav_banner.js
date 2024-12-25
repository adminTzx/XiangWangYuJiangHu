let index = 0;
let pointsBox = document.querySelector(".points")
let banners = document.querySelectorAll(".banner");
for (let i = 0; i < banners.length; i++) {
  let p = document.createElement('p')
  pointsBox.appendChild(p)
  p.style.background = '#ccc';
  p.style.width = '10px'
  p.style.height = '10px'
}
let points = document.querySelectorAll('.points p')

const initBanber = () => {
  for (let i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";
    points[i].style.background = 'gray';
    points[i].style.width = '10px'
    points[i].style.height = '10px'
  }
  index++;
  if (index > banners.length) {
    index = 1
  }
  points[index - 1].style.background = 'white';
  points[index - 1].style.width = '20px'
  banners[index - 1].style.display = "block";
}
let timer = null;
points.forEach((item, i) => {
  item.onclick = function () {
    index = i
    initBanber();
  }
});
const initInterval = () => {
  timer = setInterval(() => {
    initBanber()
  }, 3000);
}
pointsBox.addEventListener('mouseover', function () {
  clearInterval(timer)
})
pointsBox.addEventListener('mouseout', function () {
  initInterval()
})
initBanber();
initInterval();