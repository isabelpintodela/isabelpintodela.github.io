---
title: 'Configuración'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 3
summary: Tutorial de configuración básica del menú y otros elementos del tema.
---

<!-- Contenido del Post -->

## Highlighting de Código

Este tema utiliza el resaltado de código incorporado que se incluye con Hugo. https://gohugo.io/content-management/syntax-highlighting/

Puede insertar fragmentos de código en cualquier Markdown utilizando la sintaxis de highlighting, es decir:

````
```
insertar código acá
```
````

Puede especificar el lenguaje de programación agregando una declaración después de los backticks

````
```html
insertar código acá
```
````

### Opciones de resaltado de código 

Las opciones de resaltado de código se configuran en `config.toml`

```toml
pygmentsCodeFences = true
pygmentsCodefencesGuessSyntax = true
pygmentsUseClasses = true
```

## Menú principal

Configure el menú principal editando el `config.toml`

```toml
[[menu.main]]
    name = "Inicio"
    url = "/"
    weight = 1

[[menu.main]]
    name = "Documentación"
    url = "/docs/"
    weight = 2
```
