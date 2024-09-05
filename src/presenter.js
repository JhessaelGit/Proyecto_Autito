import OptenerComandos from "./optenerComandos";
import PocicionInciial from "./optenerPocicionInicial";
import TamMatriz from "./optenerTamanioMatriz";
const Comandos = document.querySelector("#Comandos");
const form = document.querySelector("#superficie-form");
const divPosIncial = document.querySelector("#PocicionInicial-div");
const divComandos = document.querySelector("#Comandos-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const ValorComandos = Comandos.value;
  PosXY=PocicionInciial(ValorComandos);
  PosInicialX=Number(PosXY[0]);
  PosInicialY=Number(PosXY[1]);
  Direccion=PosXY[2];
  TamSuperficieXY=TamMatriz(ValorComandos);
  TamSuperficieX=Number(TamSuperficieXY[0]);
  TamSuperficieY=Number(TamSuperficieXY[1]);
  ComandosOptenidos=OptenerComandos(ValorComandos);
  divPosIncial.innerHTML = "<p>Pocicion Inicial: " + PosInicialX + "," + PosInicialY + " Direccion: " + Direccion  + "</p>";
  divComandos.innerHTML="<p>Comandos: " +ComandosOptenidos + "</p>"
});
