import PocicionInciial from "./optenerPocicionInicial";
const Comandos = document.querySelector("#Comandos");
const form = document.querySelector("#superficie-form");
const div = document.querySelector("#PocicionInicial-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const ValorComandos = first.value;
  PosXY=PocicionInciial(ValorComandos);
  PosInicialX=Number(PosXY[0]);
  PosInicialY=Number(PosXY[1]);
  Direccion=PosXY[2];
  div.innerHTML = "<p>La Pocicion Inicial Es: " + PosInicialX + "," + PosInicialY + " Direccion: " + Direccion  + "</p>";
});
