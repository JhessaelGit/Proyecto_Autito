function TamMatriz(Comandos) {
  let cont=0;
  let cont2=0;
  let salida=new Array(2);
  for(let i=0;i<Comandos.length;i++)
  {
    if(Comandos[i]==="/")
    {
      cont++;
    }
    if(cont===1 && Comandos[i]!="," && Comandos[i]!="/" )
    {
      salida[cont2]=Comandos[i];
      cont2++;
    }
  }
  return salida;
}

export default TamMatriz;
