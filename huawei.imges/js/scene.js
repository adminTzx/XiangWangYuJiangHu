const cardBox = document.querySelector(".scene-box");
const firstLi = document.querySelector('.scene-box li:first-child');
const arrowIcons = document.querySelectorAll(' i');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstLi.clientWidth + 15;

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    cardBox.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  })
})

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = cardBox.scrollLeft;
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  cardBox.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}
cardBox.addEventListener("mousedown", dragStart);
cardBox.addEventListener("mousemove", dragging);
cardBox.addEventListener("mouseup", dragStop);