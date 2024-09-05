import ObtenerComandos from "./obtenerComandos";
import PosicionInicial from "./obtenerPosicionInicial";
import TamMatriz from "./obtenerTamanioMatriz";
const Comandos = document.querySelector("#Comandos");
const form = document.querySelector("#superficie-form");
const divPosIncial = document.querySelector("#PosicionInicial-div");
const divComandos = document.querySelector("#Comandos-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const ValorComandos = Comandos.value;
  PosXY=PosicionInicial(ValorComandos);
  PosInicialX=Number(PosXY[0]);
  PosInicialY=Number(PosXY[1]);
  Direccion=PosXY[2];
  TamSuperficieXY=TamMatriz(ValorComandos);
  TamSuperficieX=Number(TamSuperficieXY[0]);
  TamSuperficieY=Number(TamSuperficieXY[1]);
  ComandosObtenidos=ObtenerComandos(ValorComandos);
  divPosIncial.innerHTML = "<p>Posicion Inicial: " + PosInicialX + "," + PosInicialY + " Direccion: " + Direccion  + "</p>";
  divComandos.innerHTML="<p>Comandos: " +ComandosObtenidos + "</p>"
});
