import TamMatriz from "./obtenerTamanioMatriz";

describe("Tamanio Superficie", () => {
  it("deberia Obtener El tamanio de la superfice donde estara el autito 6,6", () => {
    expect(TamMatriz("6,6/1,1O/AIADAIA")).toEqual(["6","6"]);
  });
  it("deberia Obtener El tamanio de la superfice donde estara el autito de la primera superficie 5,5", () => {
    expect(TamMatriz("5,5/3,3E/AADAADADDA")).toEqual(["5","5"]);
  });
  it("deberia Obtener El tamanio de la superfice donde estara el autito de la segunda superficie 5,5", () => {
    expect(TamMatriz("5,5/1,2N/IAIAIAIAA")).toEqual(["5","5"]);
  })
});
