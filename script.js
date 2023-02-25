const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const input = document.querySelector("input");
const pid = document.getElementById("pid");

console.log({ h1, p, parrafito, input, pid });

h1.innerHTML = "Patito <br> feo";
h1.innerText = "patito <br> feo";

h1.classList.add("rojo")

const img = document.createElement("img")
img.setAttribute("src", "https://phantom-marca.unidadeditorial.es/0461a93910cddc9ac00c7afc145fac1f/crop/92x0/1219x751/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/11/16734568244270.jpg");
console.log(img)

pid.innerHTML = "";

pid.appendChild(img);