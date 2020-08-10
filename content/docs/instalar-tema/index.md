---
title: 'Instalar Tema'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 2
summary: Tutorial de intalación del tema utilizando el Framework Hugo.
---

<!-- Contenido del Post -->

## Crear un nuevo sitio Hugo

```
hugo new site misitio
```

Esto creará un nuevo sitio de Hugo en la carpeta `misitio`.

## Instalar sitio Hugo

Copie o clone con git el sitio en la carpeta carpeta `misitio`.

## Ejecutar Hugo

Para el desarrollo de manera local, ejecute el servidor incorporado con Hugo utilizando la terminal de comandos.

```
hugo server
```
Ahora ingresa a [`localhost:1313`](http://localhost:1313) en la barra de URL de su navegador.

Después de editar el contenido y generar el sitio web, obtenga el compilado de archivos web a través del siguiente comando en la terminal. Este comando generará una carpeta `public` al interior de la carpeta del sitio web.

```
hugo
```

