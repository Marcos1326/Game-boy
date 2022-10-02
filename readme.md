# Gameboy


This is a simple project that shows the exterior interface of a video console.

<img src="/imagenes%20Gameboy/Gameboy.png" height="400">

<hr>

## Information about the console

It is currently in a very early version of what may become the final product. At the moment we can visualize the Gameboy and we can turn it on and off by pressing the on/off button

The version is 1.0


<img src="/imagenes%20Gameboy/boton.PNG" height="100">

<hr>

The on/off mechanism is based on a simple command made in javascript, it shows how the console is "turned on or off"

>Script

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

<img src="/imagenes%20Gameboy/Gameboygift.gif" height="300">

<hr>

## References

This project is based on an old Japanese gameboy classic released in 1989. It is done in a more animated than realistic style.

>Here we can see the two versions

<img src="/imagenes%20Gameboy/Gameboy_on.PNG" height="400">
<img src="/imagenes%20Gameboy/Gameboyclassic.jpg" height="400">

<hr>

## Languages ​​used

Different languages ​​have been used in this project: HTML, CSS and JavaScript
