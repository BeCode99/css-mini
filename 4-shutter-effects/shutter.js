let valueShutter = document.querySelector('.valueShutter');
let filterLeftTop = document.querySelector('.filterLeftTop')
let filterRightTop = document.querySelector('.filterRightTop')
let filterRightBottom = document.querySelector('.filterRightBottom')
let filterLeftBottom = document.querySelector('.filterLeftBottom')
function changeValue(value) {
    valueShutter.innerHTML = value;
    filterLeftTop.style.width = value/2 + "%";
    filterRightTop.style.height = value/2 + "%";
    filterRightBottom.style.width = value/2 + "%";
    filterLeftBottom.style.height = value/2 + "%";
    
}