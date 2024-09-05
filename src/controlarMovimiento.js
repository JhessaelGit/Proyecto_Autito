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
            if(comando==="I")
            {
                return "O";
            }
            break;
        }
        case "S":
        {
            if(comando==="D")
            {
                return "O";
            }
            if(comando==="I")
            {
                return "E";
            }

            break;
        }
        case "E":
        {
            if(comando==="D")
            {
                return "S";
            }
            if(comando==="I")
            {
                return "N";
            }

            break;
        }
        case "O":
        {
            if(comando==="D")
            {
                return "N";
            }
            if(comando==="I")
            {
                return "S";
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
                Direccion=girar(Direccion,Comandos[i]);
            }
            else if(Comandos[i]==="I")
            {
                Direccion=girar(Direccion,Comandos[i]);
            }
        }
    }
    else
    {
        return "direccion Incorrecta";
    }

}

export default MobAuto;