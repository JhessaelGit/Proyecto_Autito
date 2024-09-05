import TamMatriz from "./obtenerTamanioMatriz";

describe("Tamanio Superficie", () => {
  it("deberia Obtener El tamanio de la superfice donde estara el autito", () => {
    expect(TamMatriz("6,6/1,1O/AIADAIA")).toEqual(["6","6"]);
  });
});
