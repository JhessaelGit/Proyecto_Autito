import ObtenerComandos from "./obtenerComandos";

describe("Comandos",()=>{
    it("Deberia devolver Los Comandos de la cadena ingresada AIADAIA ",()=>{
        expect(ObtenerComandos("6,6/1,1O/AIADAIA")).toEqual(["A","I","A","D","A","I","A"]);
    });
    it("Deberia devolver Los Comandos de la cadena ingresada IAIAIAIAA",()=>{
        expect(ObtenerComandos("5,5/1,2N/IAIAIAIAA")).toEqual(["I","A","I","A","I","A","I","A","A"]);
    });
    it("Deberia devolver Los Comandos de la cadena ingresada AADAADADDA",()=>{
        expect(ObtenerComandos("5,5/3,3E/AADAADADDA")).toEqual(["A","A","D","A","A","D","A","D","D","A"]);
    })
})