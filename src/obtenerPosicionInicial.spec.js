import PosicionInicial from "./obtenerPocicionInicial";

describe("Posicion Inicial",()=>{
    it("Deberia devolver La posicion Inicial de la cadena ingresada 1,1,O",()=>{
        expect(PosicionInicial("6,6/1,1O/AIADAIA")).toEqual(["1","1","O"]);
    });
    it("Deberia devolver La posicion Inicial de la cadena ingresada 3,3,E",()=>{
        expect(PosicionInicial("5,5/3,3E/AADAADADDA")).toEqual(["3","3","E"]);
    });
    it("Deberia devolver La posicion Inicial de la cadena ingresada 1,2,N",()=>{
        expect(PosicionInicial("5,5/1,2N/IAIAIAIAA")).toEqual(["1","2","N"]);
    })
})