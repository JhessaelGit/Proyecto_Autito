import OptenerComandos from "./optenerComandos";

describe("Comandos",()=>{
    it("Deberia devolver Los Comandos de la cadena ingresada",()=>{
        expect(OptenerComandos("6,6/1,1O/AIADAIA")).toEqual(["A","I","A","D","A","I","A"]);
    })
})