const getId = document.getElementById("title");

const title = document.querySelector("#title");

// console.log(title);

// console.log(getId);
// getId.innerHTML = "Hi! From JS";
// getId.style.color = "black";
// document.title = 'i onw you now';
// console.dir(getId);


function handleResize() {
    console.log("I have been resized");
    console.log();
}

// function handleResize(event) {
//     console.log(event);
// }
window.addEventListener("resize", handleResize);


// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = getId.style.color;
//     if (currentColor === BASE_COLOR) {
//         getId.style.color = OTHER_COLOR;
//     } else {
//         getId.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     getId.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
//     // mouseenter는 마우스가 in할 때 작동함. 
// }

// getId.addEventListener("click", handleClick);


const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);  
       
    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS); 
    // }

    title.classList.toggle(CLICKED_CLASS);
    
}

function init() {
    title.addEventListener("click", handleClick);
}
init();

