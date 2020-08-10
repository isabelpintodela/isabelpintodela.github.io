---
title: 'Encargo 2 - Mecanizado CNC'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 6
summary: Mecanizado CNC de la silla Fresia en Fusion 360.
---

# Mecanizado en CNC

Martes 21-07-2020
.

Es el proceso de corte de materiales mediante una máquina de control numérico por computadora. "Este consiste en un mecanismo de automatización mediante diversos comandos informáticos o softwares que dirigen cada una de las actividades de la máquina-herramienta y el mecanizado".
Parte importante de esto es entender que de la máquina nunca saldrán piezas perfectas y terminadas, sino que luego estas se deben trabajar.

![MecanizadoCNC](/img/encargo2img/32.jpg)

## Hisoria del mecanizado CNC
Surgió en el año 1940 gracias a los trabajos realizados por el ingeniero estadounidense John T. Parsons. 
En el año 1952, se creó por el MIT el primer prototipo de una máquina CNC de mecanizado.

Fuente: https://www.grumeber.com/mecanizado-que-es/ 

## Encargo
Para este encargo se trabajó con una silla de madera y se pidió hacer el mecanizado CNC en el programa Fusion 360 de sus partes. Dejaré una explicación para todas las piezas y otra para el asiento, ya que esta varía de manera mínima. 
A continuación les mostraré mediante un iframe el modelo a trabajar, y luego los pasos a seguir.
{{< iframe-fusion2 >}}

A continuación se muestran algunas planimetrías de la silla fresia:
![MecanizadoCNC](/img/encargo2img/dibsilla1.png)

## Proceso de mecanizado CNC piezas:
![MecanizadoCNC](/img/encargo2img/piezaslistas.jpg)

#### 1. Crear mi área de trabajo.
Con mi objeto ya modelado, primero debo:
- Definir la plancha en la cuál voy a trabajar, darle un tamaño, grosor y materialidad. Para hacer esto debo ir arriba en el lado izquierdo, y seleccionar *Sketch*, la cara en la que quiero trabajar, y el *rectángulo*
- Luego debo *extruir* este.

En este caso se trabajó con media plancha de teriado de 15 mm de grosor y de 1220 x 1220 mm.
{{< video-local src="/encargo2img/sketch.mp4" >}} 

#### 2. Definir las piezas a mecanizar.
- Con la herramienta *Move/Copy* que se ubica arriba al centro, debo separar todas las piezas de mi objeto (copiandolas -> *Create Copy*).
- Después debo alinearlas *("MODIFY-> ALIGN")* a la plancha de trabajo previamente definida y ubicarlas en ella.  Al alinear las piezas debo preocuparme que el rebaje de cada pieza quede hacia arriba, si no está de esta forma apreto *flip*.
{{< video-local src="/encargo2img/ubicpie.mp4" >}} 


#### 3. Configurar opciones de mecanizado.
- Debo ir arriba donde dice *Design -> Manufacture*. 
- Luego debo crear un nuevo *Set up*.
- Ahora debemos seleccionar el tipo de máquina (*Machine*) que queremos ocupar *Generic 3-Axis*.
![Mecanizado2.5D](/img/encargo3img/maq.jpg)
- Lo siguiente que se define es el *Stock -> Mode -> From solid*, seleccionamos la plancha que dibujamos).
- Después en *Model* definir las piezas que quiero cortar (las selecciono).
- Luego la *Orientation -> Select Z axis / Plane & X axis*, selecciono la cara de arriba de la plancha, el borde y finalmente el punto de origen de la máquina *Stock Point -> Box Point* que en este caso es el superior irqiuerdo.

Terminando esto le podemos dar al *Ok*.

#### 4. Determinar los tipos de corte.
- Definimos los tipos de corte a realizar, tenemos 3 opciones de operaciones: Estas se aplican dependiendo la forma de la pieza. Se puede aplicar tanto una, como dos, o las tres.

######   4.1 2D Contour Interior
Esta operación se usa para el interior de cada pieza.
- Nos acercamos a cada pieza y seleccionamos el vector inferior del calado de cada una. En palabras más simples se podría decir que son los hoyitos de dentro de la pieza.
- Elijo el tipo de fresa (que nos la pide automáticamente), en este caso es con diámetro de "6 mm". Hay que tener en cuenta que una fresa de 6 mm no puede perforar una placa de 15 mm de una sola pasada. Es por esto que debemos ir a *Passes -> Múltiples depths -> 3mm*. Esto es para cortar por niveles y no dañar la fresa o plancha.

Si quiero ver la simulación que aparece a continuación voy a *Set Up -> 2D Contour -> Click derecho -> Simulate* 
{{< video-local src="/encargo2img/c-dentro-pata.mp4" >}} 

######   4.2 2D Pocket
Esta operación se usa para los rebajes de la pieza, por lo que es esta cara de cada pieza la que debo seleccionar. Acá ya tenemos la fresa seleccionada anteriormente y debemos hacer lo mismo que en el paso anterior con los "Pases".
{{< video-local src="/encargo2img/c-pocket-pata.mp4" >}} 

######   4.3 2D Contour Exterior 
Para finalizar, tengo que cortar los bordes de fuera de cada pieza. 
- Se repiten los mismos pasos que en el primer contour. Pero acá debemos que tener ojo, porque no podemos dejar la pieza suelta, ya que saldría volando, entonces además debemos:
- Usar los **Tabs** que son pequeñas áreas donde la fresa no va a generar mecanizado, pasa por arriba con un salto y deja sin cortar. Estos los agregamos en *Geometría -> tab*, ahí podemos definir su porte y la distancia entre estos según el material lo requiera.
{{< video-local src="/encargo2img/c-fuera-pata.mp4" >}} 

Aquí abajo les dejo una foto de los **TABS** para que logren entender visualmente que es.
![Mecanizado2.5D](/img/encargo2img/tabs.jpg)

###### Y con estos pasos ya tenemos nuestra pieza mecanizada. Claramente estos pasos hay que repetirlos en todas las piezas, abajo les dejo un video resumen del mecanizado aplicado a todas las piezas restantes al mismo tiempo.
{{< video-local src="/encargo2img/resumen-mec-piezas.mp4" >}} 

## Proceso de mecanizado CNC asiento:

Aca veremos el tema de generar flexibilidad del material en base a recortes.

En un principio, los pasos son los mismos que para las piezas anteriores:
- Creo mi área de trabajo (sketch), aquí es donde encuentro la única diferencia que es que el grosor de la plancha es de 9 mm y no de 15mm como para las otras piezas de la silla
- Luego ubico mi pieza sobre esta extrusión
- Configuramos las opciones de mecanizado en *DESIGN -> MANUFACTURE*
- Finalmente determino qué operaciones voy a realizar.

Definir los cortes a realizar.

- En primer lugar, debo hacer un *2D Contour* (para el exterior de la pieza).
{{< video-local src="/encargo2img/asiento-contour.mp4" >}} 

- Luego de esto, aparece un paso nuevo,  debo ir a *2D Trace*
Debo seleccionar las líneas que recorren el asiento, con esto le decimos a la fresa que pase por ese vector y que simplemente con una pasada le de el espesor. Es una trayectoria de trazo que dice que la fresa va a recorrer la línea que yo dibujé. En los *Pases* debo pinchar *Stock to leave* (que se refiere a que me deje material en la base por qué no quiero recortarlo completo) y le damos 4.5 mm, así llega hasta la mitad de la altura que le dimos en un principio. Lo que tenemos como resultado aquí es un material que se flexibiliza.
{{< video-local src="/encargo2img/asiento-trace.mp4" >}} 

## Piezas trabajadas en la vida real:
![MecanizadoCNC](/img/encargo2img/13.jpg)
![MecanizadoCNC](/img/encargo2img/34.jpg)
![MecanizadoCNC](/img/encargo2img/9.jpg)

## Dato Curioso:
¿Sabías por qué están estas "orejas" presentes en el modelo de la silla?
![MecanizadoCNC](/img/encargo2img/orejasilla.png)
La razón de esto, es por que la fresa al cortar dentro del material no es capaz de hacer ángulos rectos.
![MecanizadoCNC](/img/encargo2img/27.jpg)

{{< gallery dir="img/encargo2img/"/ >}} {{< load-photoswipe>}}

[[Volver Arriba]](#top)





