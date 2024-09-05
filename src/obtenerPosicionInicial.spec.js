import PosicionInicial from "./obtenerPosicionInicial";

describe("Posicion Inicial",()=>{
    it("Deberia devolver La posicion Inicial de la cadena ingresada",()=>{
        expect(PosicionInicial("6,6/1,1O/AIADAIA")).toEqual(["1","1","O"]);
    })
})