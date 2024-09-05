function ObtenerComandos(Comandos)
{
    let cont=0;
    let salida=[];
    for(let i=0;i<Comandos.length;i++)
    {
    if(Comandos[i]==="/")
    {
        cont++;
    }
    if(cont===2 && Comandos[i]!="," && Comandos[i]!="/" )
    {
        salida.push(Comandos[i]);
    }
    }
    return salida;
}
export default ObtenerComandos;