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
function Avanzar(Direccion,posX,posY,tamX,tamY)
{
    let salidaXY=[posX,posY];
    switch(Direccion)
    {
        case "N":
        {
            salidaXY[1]=posY+1;
            break;
        }
        case "S":
        {
            salidaXY[1]=posY-1;

            break;
        }
        case "E":
        {
            salidaXY[0]=posX+1;

            break;
        }
        case "O":
        {
            salidaXY[0]=posX-1;

            break;
        }

    }
    if(salidaXY[0]<=tamX && salidaXY[0]>=0 && salidaXY[1]<=tamY && salidaXY[1]>=0)
    {
        return salidaXY;
    }
    else
    {
        return ["Fuera de rango",""];
    }
}
function MobAuto(tamX,tamY,posX,posY,Direccion,Comandos)
{
    let salidaXY=[];
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
            else if(Comandos[i]==="A")
            {
                salidaXY=Avanzar(Direccion,posX,posY,tamX,tamY)
                console.log("2XY: " + salidaXY +"  X: "+ posX + "  Y: "+ posY + " i: " + i + " Dir: " + Direccion);

                if(salidaXY[0]==="Fuera de rango")
                {
                    return "El Autito Salio Fuera Del Rango";
                }
                posX=salidaXY[0];
                posY=salidaXY[1];
            }
            console.log("XY: " + salidaXY +"  X: "+ posX + "  Y: "+ posY + " i: " + i + " Dir: " + Direccion);

        }
    }
    else
    {
        return "direccion Incorrecta";
    }
    salidaXY[2]=Direccion;
    return salidaXY;
}

export default MobAuto;
