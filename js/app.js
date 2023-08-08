// alert("hello world");
console.log(document.body.offsetWidth);
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const forth = document.querySelector(".forth");


menuBtn.onclick = (e) => {
    const toggleBtn = e.target;

    if(toggleBtn.classList.contains("open-btn")){
        openBtn.classList.add("hide");
        closeBtn.classList.remove("hide");
        menu.style.setProperty('display', 'block');
    }
    //  else if(window.innerWidth < 768){
    //     window.addEventListener("resize", () => {
    //         menu.style.setProperty('display', 'block');
    // })
    // }
    else {
        closeBtn.classList.add("hide");
        openBtn.classList.remove("hide");
        menu.style.setProperty('display', 'none');
    }
}
window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        menu.style.setProperty('display', 'block');
    } 
    else {
        menu.style.setProperty('display', 'none');
        closeBtn.classList.add("hide");
        openBtn.classList.remove("hide");
    }
})

function isScrolledIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var eq = first.clientHeight + window.innerHeight;
    var isVisible = (elemTop >= 0) && (elemBottom <= eq - 200);

    return isVisible;
}
window.addEventListener('scroll', function() {
    const firstImg = first.querySelector(".sect-img")
    const secondImg = second.querySelector(".sect-img")
    const thirdImg = third.querySelector(".sect-img")
    const forthImg = forth.querySelector(".banner-img")
    if (isScrolledIntoView(first)) {
        firstImg.style.transition = 'all 1s ease';
        firstImg.style.transform = 'translateX(0)';
    }
    if (isScrolledIntoView(second)) {
        console.log("viewed")
        secondImg.style.transition = 'all 1s ease';
        secondImg.style.transform = 'translateX(0)';
    }
    if (isScrolledIntoView(third)) {
        thirdImg.style.transition = 'all 1s ease';
        thirdImg.style.transform = 'translateX(0)';
    }
    if (isScrolledIntoView(forth)) {
        forthImg.style.transition = 'all 1s ease';
        forthImg.style.transform = 'translateY(0)';
    }
});


// scrollTrigger('.sect-img', {
//     rootMargin: '-200px',
//     cb: function(el){
//         console.log("viewed")
//         el.style.transform = 'translateX(0)'
//     }
// })

// scrollTrigger('.loader', {
//     rootMargin: '-200px',
//     cb: function(el){
//         el.innerText = 'Loading...'
//         setTimeout(() => {
//             el.innerText = 'Task Complete!'
//         }, 1000)
//     }
// })