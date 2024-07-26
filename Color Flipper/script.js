const btn = document.getElementById("button");

const textcolor = document.getElementById("textColor");

const body = document.getElementById("body");

textcolor.textContent = " Yellow";

function changingBackgroundColor(newColor) {
    body.style.backgroundColor = newColor;
    textcolor.textContent = newColor.charAt(0).toUpperCase() + newColor.slice(1);
}

document.querySelectorAll(".dropdown-content a").forEach(item =>{
    item.addEventListener("click", event => {
        const newColor = item.getAttribute("data-color");
        changingBackgroundColor(newColor);
    })
})