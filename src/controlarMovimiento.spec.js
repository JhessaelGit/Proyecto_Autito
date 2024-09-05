import MobAuto from "./controlarMovimiento";
describe("Tamanio Superficie", () => {
  it("deberia Obtener la posicion final del auto que se salio de rango", () => {
    expect(MobAuto(6,6,1,1,"O","AIADAIA")).toEqual("El Autito Salio Fuera Del Rango");
  });
  it("deberia Obtener la posicion final del auto en 1,3N", () => {
    expect(MobAuto(5,5,1,2,"N","IAIAIAIAA")).toEqual([1,3,"N"]);
  });
  it("deberia Obtener la posicion final del auto 5,1N", () => {
    expect(MobAuto(5,5,3,3,"E","AADAADADDA")).toEqual([5,1,"E"]);
  });
  
});