function girar(direccion,comando)
{
    switch(direccion)
    {
        case "N":
        {
            if(comando==="D")
            {
                return "E";
            }
            
            break;
        }
        case "S":
        {
            if(comando==="D")
            {
                return "O";
            }
            

            break;
        }
        case "E":
        {
            if(comando==="D")
            {
                return "S";
            }
            

            break;
        }
        case "O":
        {
            if(comando==="D")
            {
                return "N";
            }
            
            break;
        }
    }
}
function MobAuto(tamX,tamY,posX,posY,Direccion,Comandos)
{
    if(Direccion==="N" || Direccion==="S" || Direccion==="E" || Direccion==="O")
    {
        for(let i=0;i<Comandos.length;i++)
        {
            if(Comandos[i]==="D")
            {
                Direccion=girar(Direccion,comando[i]);
            }
        }
    }
    else
    {
        return "direccion Incorrecta";
    }

}

export default MobAuto;
