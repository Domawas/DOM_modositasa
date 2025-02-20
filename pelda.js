console.log("Jóreggelt");
/* 1. fogdd meg a baloldali aside elemet */
let balElem = document.getElementById("bal");
console.log(balElem);
//masodik megoldas
let balElem2 = document.querySelector("#bal");
console.log(balElem2);
//harmadik
let balElem3 = document.querySelectorAll("#bal");
console.log(balElem3);
//beleirás
balElem2.innerHTML = "<p>tegnap megsuletett az unokam</p>";
balElem3[0].innerHTML = "<p>Szerda van</p>";

/* 2. fogdd meg a tartalom elemet és irj bele */
let tartalomElem = document.getElementsByClassName("tartalom");
console.log(tartalomElem);
tartalomElem[0].innerHTML = "Képernyő";
//masodik megoldas
let tartalomElem2 = document.querySelector(".tartalom");
console.log(tartalomElem2);
//harmadik
let tartalomElem3 = document.querySelectorAll(".tartalom");
console.log(tartalomElem3);
//negyedik
/* let tartalomElem4=document.querySelectorAll("article div")
console.log(tartalomElem4) */

/* fogdd meg a footert és ird bele a neved */
let footerElem = document.querySelector("footer");
footerElem.innerHTML = "Nagy Dominik";

/* 3. Ha rákatrtintunk a gombra az input elem tartalmat irja ki a 3.tartalom divbe ugy hogy Szia Jenő */
/* elso lepes: megfogjuk az elemeket */
let tartalomElem4 = document.querySelectorAll("article div");
let inputElem4 = document.getElementById("nev");  
let buttomElem = document.querySelector("article button");

/* ráteszem a gombra az esemenykezelot */
buttomElem.addEventListener("click", udvozles);

function udvozles() {
  let nev = inputElem4.value;
  tartalomElem4[2].innerHTML = `Szia ${nev} !`; //+= vel is lehet
}
