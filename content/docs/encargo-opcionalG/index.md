---
title: 'Encargo Bonus Grasshopper'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 11
summary: Mecanizado con archivo de Grasshopper.
---

# Mecanizado con archivo de Grasshopper
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold6.jpg)
Martes 28-07-2020
.

## Encargo
Este encargo similar al anterior, ya que tenemos que trabajar un mecanizado, pero en este caso, de un modelo de Grasshopper en el programa Fusion 360. 
A continuación les mostraré mediante un iframe el modelo a trabajar, y luego los pasos a seguir.
{{< iframe-fusion4 >}}

## Planimetrías
Acá les dejaré unas planimetrías del molde con sus respectivas dimensiones.

![MecanizadoBGrasshopper](/img/encargoBgrasshopper/planimetriasf.png)


## Proceso de mecanizado 
Los pasos a seguir para este modelo son muy parecidos a los del respaldo de la silla Fresia, además se agrega un 2D Contour(operación que se utilizó en el encargo nro 2 que correspondía a las demás piezas de la silla). Cómo ya hemos realizado estos pasos en ejercicios anteriores, no le daré tanto enfasis a las explicaciones específicas de qué es cada cosa y cómo se hace, sino que me centraré más en las imagenes y videos explicativos.

#### 1. Alinear mi pieza y acercarla al origen.
Este paso ya viene listo, por lo que se puede omitir.

#### 2. Crear mi área de trabajo.
Debo crear mi sketch y extruirlo. En este caso lo hice pegado desde la base del molde.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/planchagras.jpg)

#### 3. Configurar opciones de mecanizado.
Crear mi Setup y personalizarlo.
La máquina a utilizar es la misma que hemos visto en los ejecicios anteriores. *Generic 3-Axis*.
Estos pasos son exactamente igual a lo que hemos hecho en ejercicios anteriores.

#### 4. Optimizar el mecanizado.
Debo crear un sketch de proyección en la cara superior de mi plancha, para obtener como resultado el área en la cual se hará el mecanizado.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/sketch2.jpg)

#### 5. Determinar las operaciones de mecanizado.
Definimos los tipos de operaciones a realizar.

######   5.1 Adaptative Clearing
Acá utilizamos la Fresa de punta plana que se muestra en la foto a continuación (flat end mill). Esta es la que ocupamos para las primeras piezas de la silla fresia, la que no tenía edición alguna. Por otra parte debemos configuar esta acción como siempre lo hacemos.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/fresaplanasel.jpg)

Al configurar esta operación primero se muestra la trayectoria a realizar y luego se hace la simulación, mostraré estas dos respectivamente en una foto y  un video.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/trayadap.jpg)
{{< video-local src="/encargoBgrasshopper/vadapgras.mp4" >}} 

Luego, así es como vemos la pieza trabajando en la vida real.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/1.jpg)

######   5.2 Parallel
Acá utilizamos la Fresa de punta redonda que se muestra en la foto a continuación (ball end mill). Por otra parte debemos configuar esta acción como siempre lo hacemos.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/fresaredgras.jpg)

Al configurar esta operación primero se muestran las trayectorias a realizar y luego se hace la simulación, mostraré estas dos respectivamente en dos fotos y dos video. Como esta operación se hace en los dos sentidos serán dos fotos de trayectoria las que se muestran y dos videos.

Trayectoria y simulación 1.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/trayparalel1grass.jpg)
{{< video-local src="/encargoBgrasshopper/vparalel1gras.mp4" >}}

Trayectoria y simulación 2.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/trayparalel2grass.jpg)
{{< video-local src="/encargoBgrasshopper/vparalel2gras.mp4" >}} 

Proceso pieza en vida real.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold2.jpg)

Es relevante entender que los pasos 5.1 y 5.2 se realizan en orden, uno va primero que el otro.

######   5.3 2D Contour
Acá utilizamos la Fresa de punta plana que se muestra en la foto a continuación (flat end mill). Esta es la que ocupamos para las primeras piezas de la silla fresia, la que no tenía edición alguna. Por otra parte debemos configuar esta acción como siempre lo hacemos.
![MecanizadoBGrasshopper](/img/encargoBgrasshopper/fresaplanasel.jpg)
.

Abajo les dejo una simulación de la trayectoria de 2D contour, donde deben recordar que es muy importante el uso de los **TABS** que se muestra con un acercamiento al final del video.
{{< video-local src="/encargoBgrasshopper/v2dcontourgras.mp4" >}} 
###### Y con estos pasos ya tenemos nuestra pieza mecanizada, si quieres encontrar y entender bien los pasos puedes revisar el post del Encargo N° 3.

## Fresando el molde.
{{< video-local src="/encargoBgrasshopper/molding.mp4" >}} 

## Pieza mecanizada en la vida real.
En esta sección les adjuntaré unas fotos de como podriamos encontras la pieza en vida real.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold5.jpg)

Una vez obtenido el modelo desde la CNC, este se lija y se le agrega una capa de aceite para facilitar la extracción de la silicona.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold8.jpg)

Se confecciona una caja abierta para incorporar la silicona y que esta quede en el lugar deseado.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold7.jpg)

Luego de 24 horas de reposo se remueve la caja.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold9.jpg)

En este caso se realizó el positivo del molde con yeso, material que demora aproximadamente una hora en fraguar.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold10.jpg)

Al final del proceso tenemos el molde de madera (positivo), el molde de silicona (negativo) y la pieza final en yeso (positivo).
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold11.jpg)

Ejemplos de otros moldes.
![MecanizadoBGrasshopperMolde](/img/encargoBgrasshopper/mold12.jpg)





{{< gallery dir="img/encargoBgrasshopper/"/ >}} {{< load-photoswipe>}}


[[Volver Arriba]](#top)





