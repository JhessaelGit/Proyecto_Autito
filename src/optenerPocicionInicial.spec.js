import PocicionInciial from "./optenerPocicionInicial";

describe("Pocicion Inicial",()=>{
    it("Deberia devolver La pocicio Inicial de la cadena ingresada",()=>{
        expect(PocicionInciial("6,6/1,1O/AIADAIA")).toEqual(["1","1","O"]);
    })
})