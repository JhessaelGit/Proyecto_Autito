import MobAuto from "./controlarMovimiento";

describe("Movimiento del auto", () => {
  it("deberia obtener el movimiento del auto", () => {
    expect(MobAuto(6,6,2,1,"F","AIADAIA")).toEqual("direccion incorrecta");
  });
});
