let marker = document.querySelector('#marker');
let list = document.querySelectorAll('ul li');

// function moveIndicator(e) {
//     marker.style.left = e.parentElement.offSetLeft+'px';   

// }

list.forEach(link => {
    link.addEventListener('click', function(link){
        console.log(link)
        // marker.style.left = link.parentElement.offSetLeft+'px'
    })
} ) 