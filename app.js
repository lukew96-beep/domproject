const container = document.getElementById('container');
const container2 = document.querySelector("section");
const second = document.getElementsByClassName('second');
const third = document.querySelector("ol .third")
container.innerText = "Hello!";
const footer = document.querySelector(".footer");
footer.className += " main";
footer.classList.remove("main");
let newLi = document.createElement("li");
newLi.innerText = "four";
let list = document.querySelector("ul");
list.appendChild(newLi);
let liInsideOl = document.querySelectorAll("ol li");
for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].getElementsByClassName.backgroundColor = "green";
};
footer.remove();