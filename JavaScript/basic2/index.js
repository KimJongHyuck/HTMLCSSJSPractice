const getId = document.getElementById("title");

const title = document.querySelector("#title");

console.log(title);

console.log(getId);
getId.innerHTML = "Hi! From JS";
getId.style.color = "black";
document.title = 'i onw you now';
console.dir(getId);


function handleResize() {
    console.log("I have been resized");
    console.log();
}

// function handleResize(event) {
//     console.log(event);
// }

window.addEventListener("resize", handleResize);

function handleClick() {
    getId.style.color = "red";
}


getId.addEventListener("click", handleClick);