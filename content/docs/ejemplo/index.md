---
title: 'Ejemplo Shortcodes'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 4
summary: Uso de los Shortcodes para agregar contenido en el sitio de documentación.
---

<!-- Ejemplo Shortcodes -->

# Contenido Shortcodes

- [Iframe de Fusion 360](#agregar-iframe-de-fusion-360)
- [Agregar Video Local MP4](#agregar-video-local-mp4)
- [Galería Fotos Lightbox](#agregar-galería-fotos-lightbox)
- [Botón de Descarga](#agregar-botón-de-descarga)

<!-- Agregar Iframe de Fusion 360 -->
---

### Agregar Iframe de Fusion 360

{{< iframe-fusion >}}

##### Código `Iframe de Fusion 360` Markdown 

```
{{</* iframe-fusion */>}}
```

##### Código `Iframe de Fusion 360` HTML Shortcode 

```
<div>
    <iframe 
    src="https://myhub.autodesk360.com/ue2ce4e3a/shares/public/SH56a43QTfd62c1cd968edbffd1ceafd2764?mode=embed" 
    width="100%" 
    height="450" 
    allowfullscreen="true" 
    webkitallowfullscreen="true" 
    mozallowfullscreen="true"  
    frameborder="0">
    </iframe>    
</div>
```

[[Volver Arriba]](#contenido-shortcodes)

<!-- Agregar Video Local MP4 -->
---

### Agregar Video Local MP4

{{< video-local src="video.mp4" >}}

##### Código `Video Local MP4` Markdown 

```
{{</* video-local src="video.mp4" */>}}
```

##### Código `Video Local MP4` HTML Shortcode 

```
<div>
    <video 
    width="100%" 
    height="450" 
    autoplay muted loop controls preload>
    <source src="/{{ index .Params "src" }}"  type="video/mp4">
    </video>
</div>
```

[[Volver Arriba]](#contenido-shortcodes)
 
<!-- Agregar Galería Fotos Lightbox -->
---

### Agregar Galería Fotos Lightbox

{{< gallery dir="/img/galeria/" />}} {{< load-photoswipe >}}

##### Código `Galería Fotos Lightbox` Markdown 

```
{{</* gallery dir="/img/galeria/" />}} {{< load-photoswipe */>}}
```

[[Volver Arriba]](#contenido-shortcodes)

<!-- Agregar Botón de Descarga -->
---

### Agregar Botón de Descarga

{{< boton-descargar src="documento.pdf" >}}

##### Código `Botón de Descarga` Markdown 

```
{{</* boton-descargar src="documento.pdf" */>}}
```

##### Código `Botón de Descarga` HTML Shortcode 

```
<a class="face-button" href="/descargas/{{ index .Params "src" }}" download>
    <div class="face-primary">
        <span class="icon fa fa-cloud"></span>
        Descargar
    </div>
    <div class="face-secondary">
        <span class="icon fa fa-hdd-o"></span>
    </div>
</a>
```

[[Volver Arriba]](#contenido-shortcodes)
 
