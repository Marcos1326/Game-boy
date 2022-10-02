var boton = document.getElementById("boton"),
    encendido = document.getElementById("encendido"),
    pantalla = document.getElementById("pantalla"),
    contador=0

    function cambio()

    {   if(contador==0)
        {
            encendido.classList.add("rojo");
            contador=1;

        }

        if(contador==1)
        {
            pantalla.classList.add("blanca");
            contador=2;


        }

        else{
            encendido.classList.remove("rojo");
            pantalla.classList.remove("blanca");
            contador=0
        }

    }



    boton.addEventListener("click",cambio,true)