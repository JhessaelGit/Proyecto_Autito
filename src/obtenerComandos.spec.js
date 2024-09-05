import ObtenerComandos from "./obtenerComandos";

describe("Comandos",()=>{
    it("Deberia devolver Los Comandos de la cadena ingresada",()=>{
        expect(ObtenerComandos("6,6/1,1O/AIADAIA")).toEqual(["A","I","A","D","A","I","A"]);
    })
})