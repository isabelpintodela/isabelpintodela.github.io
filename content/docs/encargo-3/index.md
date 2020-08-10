---
title: 'Encargo 3 - Mecanizado 2.5D'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 6
summary: Mecanizado 2.5D de la silla Fresia en Fusion 360.
---

# Mecanizado 2.5D
Martes 28-07-2020
.

Es el proceso para darle forma a las piezas y fabricarlas. Es un proceso de desbaste por distintas profundidades utilizando el respaldo de la silla Fresia.

![Mecanizado2.5D](/img/encargo3img/resplisto.jpg)


## Encargo
Este encargo está vinculado con el anterior, ya que se sigue trabajando la silla fresia, pero en este caso, su **respaldo**, donde se pidió hacer el mecanizado 2.5D de este en el programa Fusion 360. 
A continuación les mostraré mediante un iframe el modelo a trabajar, y luego los pasos a seguir.
{{< iframe-fusion3 >}}

## Proceso de mecanizado 2.5D respaldo:

#### 1. Alinear mi pieza y acercarla al origen.
Con mi objeto ya modelado, primero debo:
- Separar mi pieza de la silla (en este caso el respaldo) y llevarla a un nuevo archivo.
- Abrir mi nuevo archivo.
- Luego debo alinearla con un plano de trabajo, y que esté ortogonal a este. *MODIFY->ALIGN*
- Para finalmente moverla y posiscionarla lo más cercana al origen posible.

Estos pasos son muy recomendados, ya que uno debe partir trabajando de forma ordenada y limpia para poder tener un proceso ameno.

#### 2. Crear mi área de trabajo.
Con mi objeto ya modelado, primero debo:
- Definir la plancha en la cuál voy a trabajar, darle un tamaño y grosor. Para hacer esto debo ir arriba en el lado izquierdo, y seleccionar *Sketch*, la cara (el plano) en la que quiero trabajar, y el *rectángulo*
- Luego debo *extruir* este.
![Mecanizado2.5D](/img/encargo3img/pr.jpg)

En este caso se trabajó con una plancha sin medidas, es decir, la extrusión fue al ojo, preocupandonos que esta cubiera todo el respaldo y se pasara por todos los lados que se tienen. Para mayor comodidad puedo poner este cuerpo un poco más transparente, bajandole su *OPACITY CONTROL*. Este efecto se puede apreciar en la foto de arriba.

#### 3. Configurar opciones de mecanizado.
- Debo ir arriba donde dice *Design -> Manufacture*. 
- Luego debo crear un nuevo *Set up*.
- Ahora debemos seleccionar el tipo de máquina (*Machine*) que queremos ocupar *Generic 3-Axis* la fresadora.
![Mecanizado2.5D](/img/encargo3img/maq.jpg)
- Lo siguiente que se define es el *Stock -> Mode -> From solid*, seleccionamos la plancha (el sólido) que modelamos.
- Luego la *Orientation -> Select Z axis / Plane & X axis*, selecciono la cara de arriba de la plancha, el borde y finalmente el punto de origen de la máquina *Stock Point -> Box Point* que en este caso es el superior de adelante, irqiuerdo.
- Después en *Model* definir las piezas que quiero trabajar (las selecciono), que en este caso es el respaldo.

Terminando esto tenemos nuestro set up listo y le podemos dar al *Ok*.

#### 4. Optimizar el mecanizado.
- Debo ir arriba donde dice *Manufacture -> Design*. 
- Vamos a hacer un nuevo *Sketch* en la cara superior de nuestra "plancha". Para esto seleccionamos esa cara y vamos a *CREATE* -> *Project* -> *Proyect* y le hago click al respaldo. Con esto me hace un rectángulo perfecto de mi área de interés, el cual se verá en la siguiente fotografía y ahora tenemos, el bloque, el área de mecanizado, y la pieza.
![Mecanizado2.5D](/img/encargo3img/skar.jpg)
- Ahora volvemos al espacio de de manufactura; *Design -> Manufacture*.

#### 5. Determinar las operaciones de mecanizado.
Definimos los tipos de operaciones a realizar, tenemos 3 opciones de operaciones. Las que dependen unas de otras y deben ser realizadas en orden.

######   5.1 Adaptative Clearing
Limpieza o desbaste adaptativo, ¿Qué significa esto? Que vamos a remover material de mi pieza para optimizar o acelerar el proceso de obtencion de la superficie. 

- Me pide la máquina a utilizar que es la misma que las veces anteriores.
- Luego me pide la fresa la cual debo seleccionar la misma que las veces anteriores, pero debo ir a editarla, ya que vamos a necesitar que esta sea un poco más larga que las veces anteriores.

EDITAR FRESA: Darle botón derecho a la que estamos ocupando y poner *copy tool*, para no distorcionar la que ya tenemos, ahora vamos a editar esta, le ponemos un nombre y en *Cutter -> Length Below Holder ->40mm* Acá lo que hicimos fue ampliar la medida al doble, al lado derecho podemos ver como se edita el modelo de la fresa a tiempo real. 
![Mecanizado2.5D](/img/encargo3img/frpled.jpg)

 - Vamos a ir a la *Geometry -> Machining Boundary -> Selection*, y esta vez selecionamos el nuevo Sketch que realizamos, para que así mecanice solo dentro de este espacio.
 - Luego en *Model*, seleccionamos el respaldo.
 - Finalmente debo ir a *Passes -> Optimal Load -> 3mm* . Esto hace referencia a cuanto material vamos a estár cortando, no puede ser todo de una vez si no que tiene que ir por etapas.
 
 Ahora estamos listos para ir a *Ok*. 
 
 Con esto se comienza a generar la operación, la que demora más que las que realizamos en el encargo anterior de mecanizado CNC, ya que es una trayectoria de desbaste que es compuesta por muchos tool path. Se calcula la trayectoria, primero hace un área de limpieza donde remueve el material de manera plana en el eje z, y luego debería bajar un plano más. Al igual que los perfilados esto se va haciendo por capas. Lo que finalmente queremos lograr es que de este gran bloque que tenemos, podamos remover todo el material de una manera bruta, sin una terminación muy prolija.
 El resultado de esto son varias trayectorias, donde la fresa en un principio entra con forma de elipse al material para disminuir el estres que tiene esta al momento de entrar en un material que esta completo. Esto se aplica más bien a los metales, pero no es malo aplicarlo a la madera por la razón recién descrita.

Se adjunta un video donde podemos ver esta primera trayectoria creada, de desbaste o limpieza.
{{< video-local src="/encargo3img/adaptative1.mp4" >}} 

######   5.2 Parallel
Esto es una terminación paralela o parallel finishing.
- Los primeros pasos son los mismos que en la operación anterior. La máquina es la misma.
- Pero es aquí donde debo cambiar la fresa a una de punta redonda *ball and mill* porque esta da unas mejores terminaciones a esta acción, pero con las mismas características de la anterior, también debo duplicarla y editarla para dejar su *Length Below Holder en 40mm*
![Mecanizado2.5D](/img/encargo3img/fresaredondaedit.jpg)
 Para una superficie de este orden no es estrictamente necesario una fresa de punta redonda, sobre todo para madera porque podemos lijar, pero los tallados  de punta redonda quedan mucho mejor en caso de superficies más complejas u otros materiales.

- Ahora en *GEOMETRY* también son los mismos pasos y en *Model* seleccionamos el respaldo. 

Con esto listo damos *Ok* y esperamos que me genere la trayectoria.

Si se dan cuenta la fresa aca esta recorriendo la superficie para darle una terminación mucho más continua.

Es importante entender que debemos simular estos dos pasos al mismo tiempo, para que se hagan en orden.
Se adjunta un video de la simulación de la parte de esta acción, ya que arriba se puede ver el primer paso. Se puede apreciar que la fresa está recorriendo la superficie continamente. La Router está mecanizando en los dos ejes simultáneamente, en el plano frontal la fresa está bajando.
{{< video-local src="/encargo3img/paralelunouno.mp4" >}} 

Luego de hacer la terminación paralela en un ángulo, lo correcto luego de esto sería hacerla en el ángulo perpendicular.

- Es por esto que voy a mi "capa" de Parallel, voy a duplicar la operación, luego entro a editar, voy a los *Passes -> Pass Direction -> 90° y en Stepover -> 2 (mientras más pequeño sea esto, más alta es la resolución)*

Voy a dar *Ok* y podemos ver dos grillas,como se muestra en la siguiente imagen.
![Mecanizado2.5D](/img/encargo3img/dostraypar.jpg)

Luego, aquí abajo podemos ver la acción de *Parallel* en el otro sentido.
{{< video-local src="/encargo3img/paralelunodos.mp4" >}} 

###### Con estos pasos listos deberíamos ir a simular todos juntos, para que se hagan en orden. El resultado de la simulación es la suma de los tres videos que vieron recién. Aquí tenemos lista la mecanización de la parte de arriba del respaldo.

### Parte de abajo respaldo.
Aquí los pasos son los mismos que se mostraron anteriormente, dejaré abajo las simulaciones de dicho proceso, cabe destacar que en Fusion 360 se ralizaron los mismos pasos pero vistos desde abajo y no de arriba como antes.

Adaptative
{{< video-local src="/encargo3img/adaptativedos.mp4" >}} 

Parallel en los dos sentidos.
{{< video-local src="/encargo3img/paraleldos1.mp4" >}} 
{{< video-local src="/encargo3img/paraleldos2.mp4" >}} 

Es importante entender que en el mundo físico, lo que se debería ocurrir, es que al yo hacer y tener lista mi zona o parte de arriba, luego debo retirarla de la máquina, darla vuelta y realizar el mismo proceso por el otro lado.

### Partes laterales.
Estas se trabajan luego de tener los otros dos lados del respaldo (frontal y trasero) terminados, se retira el cuerpo de la máquina y se procesan a mano, se lijan.
![Mecanizado2.5D](/img/encargo3img/18.jpg)

###### Y con estos pasos ya tenemos nuestra pieza, es decir el respaldo, mecanizada.

## Piezas mecanizadas en la vida real.
![Mecanizado2.5D](/img/encargo3img/19.jpg)
![Mecanizado2.5D](/img/encargo3img/24.jpg)
![Mecanizado2.5D](/img/encargo3img/res.jpg)
![Mecanizado2.5D](/img/encargo3img/25.jpg)
{{< gallery dir="img/encargo3img/"/ >}} {{< load-photoswipe>}}


[[Volver Arriba]](#top)





