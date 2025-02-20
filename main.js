/* fogjuk meg a p taget es ha rakattintunk, tegye at a jobboldali asideba */

/* 1. megfogjuk az elemeket */
let pElem = document.querySelector("article > p:nth-child(1)");
let jobbElem = document.querySelector("#jobb");

/* eseménykezelő megírása */
pElem.addEventListener("mouseover", feltesz);
pElem.addEventListener("click", athelyez);

/* áthelyezés */
function athelyez(event) {
  /* event.target az az elem amelyik kivaltotta az esemenyt */
  jobbElem.appendChild(event.target);
}

function feltesz() {
  pElem.classList.add("szegely");
}
