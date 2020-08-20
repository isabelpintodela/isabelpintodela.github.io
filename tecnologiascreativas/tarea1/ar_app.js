//declarar las variables de nuestra app. 
// Se porían declarar para abajo todas pero para acortar codigo se hace así, se agrupan las relacionadas
var scene, camera, renderer, clock, deltaTime, totalTime;

var arToolkitSource, arToolkitContext;

var mesh1, mesh2; // ACA DECLARAMOS NUESTROS OBJETOS PARA AGREGARLOS

var markerRoot1; //Es un punto de origen en el ambiente 3d dde nosotros queremos colocar nuestros objetos

var RhinoMesh, RhinoMesh2, RhimoMesh3, RhimoMesh4, RhimoMesh5, RhimoMesh6;

init(); // llamado de la funcion principal que se encarga de hacer casi  todo en la app
animate(); // Nos permite recalcular como los objetos se localizan en pantalla 

function init() {
    ////////////////////////////////////////////////////////
    //THREE Setup
    ///////////////////////////////////////////////////////
    // crear nuestra escena -  OBJETO.
    scene = new THREE.Scene(); //  crea un objeto escena.

    //////////////////////////////////////////////////////
    //LUCES
    //////////////////////////////////////////////////////

    let light = new THREE.PointLight(0xffffff, 1, 100); //creo nueva luz blanca
    light.position.set(0, 4, 4); //indico la posicion de la luz EN EL VIDEO PONE 0 en el último 4
    light.castShadow = true; //activo la capacidad de generar sombras.
    scene.add(light); //agrego la luz a mi escena 

    let lightSphere = new THREE.Mesh( // Esfera de luz
        new THREE.SphereGeometry(0.1), //Tamaño pequeño
        new THREE.MeshBasicMaterial({ 
            color: 0xffffff, // Este es un color blanco
            transparent: true, // Decimos que es transparente
            opacity: 0.8 // Le damos opacidad
        })
    );

    lightSphere.position.copy(light); // Estamos creando una pantalla de lampara. 
    // Estamos copiando la esfera a donde tenemos el objeto
    scene.add(lightSphere);

    //creamos luces 
    let ambientLight = new THREE.AmbientLight(0xcccccc); //creo las luz 0.5?? ESO ESTÁ EN EL VIDEO DE CLASE 7 pro luego NO lo pone
    scene.add(ambientLight); //agrego la luz a mi escena. 

    camera = new THREE.Camera(); //creo objeto camara 
    scene.add(camera); // agrego camara a la escena

    //permite mostrar las cosas en 3d en la pantalla
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true // permite generar transparencias para que las cosas se vean sin fondo
    });

    renderer.setClearColor(new THREE.Color('lightgrey'), 0);
    renderer.setSize(640, 480); // Esto es para la definicion
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';

    renderer.shadowMap.enabled = true; // Hacemos una sombra
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Acá especificamos el tipo de sombra

    document.body.appendChild(renderer.domElement); // agregarlo a nuestra pagina web
    // Esto es como una plantilla, rara ves varía, es similar a la instruccion de scene.add camera 
    // Lo que estamos haciendo es añadiendo el renderer a la pag web que tenemos abierta

    //tiempo
    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;

    ////////////////////////////////////////////////////////
    //AR Setup. 
    //Acá viene todo lo que tiene que ver con realidad aumentada
    ///////////////////////////////////////////////////////

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam', 
        // con esto nuestra app sabe q tiene q activar el video de nuestra camara web
    });

    function onResize() { // Acá estamos generando una funcion dentro de otra
        arToolkitSource.onResize() //EN EL VIDEO PONE ; pero esto NO va
        arToolkitSource.copySizeTo(renderer.domElement) //EN EL VIDEO PONE ; pero esto NO va
        if (arToolkitContext.arController !== null) { //Esto significa NO es IGUAL
            arToolkitSource.copySizeTo(arToolkitContext.arController.canvas) //EN EL VIDEO PONE ; pero esto NO va
        }
    }

    // Esto permite generar mis objetos en realidad aumentada
    arToolkitSource.init(function onReady() {
        onResize();
    });

    //agregamos un event listener
    //como se da cuenta que agrandamos o achicamos la pantalla)
    window.addEventListener('resize', function () { onResize() }); //Esto ajusta la pantalla del dispositivo

    //Setup ArKitContext
    arToolkitContext = new THREEx.ArToolkitContext({ //EN EL VIDEO al principio lo pone sin la X, pero esta SI va
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono' // Modo de deteccion monocromatico, solo detecta imgs en BYN o escala de grises
    });

    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    /////////////////////////////////////////////////
    //Marker setup 
    //Desde este punto de puede hacer todo personalizado, lo anterior es una plantilla
    /////////////////////////////////////////////////

    markerRoot1 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerRoot1); // agregamos el grupo a la escena. 

    //Creamos nuestro marcador ACA HAY QUE CAMBIAR EL NOMBRE DEL MARCADOR, yo podría poner mas de un marcador
    let markerControl = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {

        type: 'pattern', patternUrl: 'data/pattern-MarcadorIsabelPinto.patt', // por pattern es que los archivos se llaman .patt
        // El data/patter-MarcadorIsabelPinto.patt es el marcador que vamos a utilizar en esta tarea
    });

    /////////////////////////////////////////////////
    //GEOMETRY
    /////////////////////////////////////////////////

    //Creo una geometria cubo son 3 PASOS - GEOMETRY 1
    let geo1 = new THREE.CubeGeometry(.75, .75, .75); // PASO 1: crear la plantilla, los numeros son las dimensiones en la clase pone puros 25, luego lo cambia a 75
    // PASO 2: creo material 
    // ESTO SALE EN EL MIN 2:06:01 Y ES BIEN DISTINTO EL CODIGO - REVISAR (LE PONE TRANSPARENCIA Y OPACIDAD)
    let material1 = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }); //creamos el material 
    // Esto nos da u color random cada ves que inicialicemos nuestra app

    //Creo una geometria - GEOMETRY 2
    let geo2 = new THREE.CubeGeometry(.75, .75, .75); // crear la plantilla
    //creo material 
    let material2 = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }); //creamos el material

    //////////////MESH1//////////////////////////////////////////
    // PASO 3 creo un mesh con la geometria y el material 
    mesh1 = new THREE.Mesh(geo1, material1); //nuestro mesh 
    //Cambio la posicion de mi mesh 
    mesh1.position.y = 0.5;
    mesh1.position.z = -0.3;

    //Activo el recibir y proyectar sombras en otros meshes
    mesh1.castShadow = true;
    mesh1.receiveShadow = true;

    //////////////MESH2//////////////////////////////////////////
    //creo un mesh con la geometria y el material 
    mesh2 = new THREE.Mesh(geo2, material2); //nuestro mesh 
    //CAMBIO LA POSICION DE MI MESH 
    mesh2.position.x = 0.75;
    mesh2.position.y = 1.0;
    //activo el recibir y proyectar sombras en otros meshes
    mesh2.castShadow = true;
    mesh2.receiveShadow = true;


    // ESTO LO PONE COMO COMENTARIO PQ LUEGO AGREGA LOS OBJETOS DE RHINO, es cm para no agregar los mesh a la escena
    //markerRoot1.add(mesh1); //esta linea agrega el cubo a mi grupo y finalmente se puede ver en la escena 
    //markerRoot1.add(mesh2); //agregando el mesh 2 a mi escena

    ////////////////////PISO////////////////
    let floorGeometry = new THREE.PlaneGeometry(20, 20); // Es el plano dde se ubican mis geometrias ??
    let floorMaterial = new THREE.ShadowMaterial(); // Material transparente, su unica funcion es recibir sombras
    floorMaterial.opacity = 0.25; // Este valor no puede ser 1 pq la sombra se vería super fuerte y falsa, sería totalmente negra

    let floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

    floorMesh.rotation.x = -Math.PI / 2; //Se rota para dejarlo totalmente horizontal
    floorMesh.receiveShadow = true; //Le decimos que SI reciba sombras
    markerRoot1.add(floorMesh);

    /////// OBJ IMPORT/////////////////////
    function onProgress(xhr) { console.log((xhr.loaded / xhr.total * 100) + "% loaded"); }
    function onError(xhr) { console.log("ha ocurrido un error") };

    //////OBJETO RHINO 1 ///////////////
    new THREE.MTLLoader()
        .setPath('data/models/')
        .load('1.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('data/models/')
                .load('1.obj', function (group) {
                    RhinoMesh = group.children[0];
                    RhinoMesh.material.side = THREE.DoubleSide;
                    RhinoMesh.scale.set(0.2, 0.2, 0.2);
                    RhinoMesh.castShadow = true;
                    RhinoMesh.receiveShadow = true;

                    markerRoot1.add(RhinoMesh);
                }, onProgress, onError);
        });

    //////OBJETO RHINO 2 ///////////////
    new THREE.MTLLoader()
        .setPath('data/models/')
        .load('2.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('data/models/')
                .load('2.obj', function (group) {
                    RhinoMesh2 = group.children[0];
                    RhinoMesh2.material.side = THREE.DoubleSide;
                    RhinoMesh2.scale.set(0.2, 0.2, 0.2);
                    RhinoMesh2.castShadow = true;
                    RhinoMesh2.receiveShadow = true;

                    markerRoot1.add(RhinoMesh2);
                }, onProgress, onError);
        });

        //////OBJETO RHINO 3 ///////////////
    new THREE.MTLLoader()
    .setPath('data/models/')
    .load('3.mtl', function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .setPath('data/models/')
            .load('3.obj', function (group) {
                RhinoMesh3 = group.children[0];
                RhinoMesh3.material.side = THREE.DoubleSide;
                RhinoMesh3.scale.set(0.2, 0.2, 0.2);
                RhinoMesh3.castShadow = true;
                RhinoMesh3.receiveShadow = true;

                markerRoot1.add(RhinoMesh3);
            }, onProgress, onError);
    });

   //////OBJETO RHINO 4 ///////////////
   new THREE.MTLLoader()
   .setPath('data/models/')
   .load('4.mtl', function (materials) {
       materials.preload();
       new THREE.OBJLoader()
           .setMaterials(materials)
           .setPath('data/models/')
           .load('4.obj', function (group) {
               RhinoMesh4 = group.children[0];
               RhinoMesh4.material.side = THREE.DoubleSide;
               RhinoMesh4.scale.set(0.2, 0.2, 0.2);
               RhinoMesh4.castShadow = true;
               RhinoMesh4.receiveShadow = true;

               markerRoot1.add(RhinoMesh4);
           }, onProgress, onError);
   });

      //////OBJETO RHINO 5 cintillo///////////////
      new THREE.MTLLoader()
      .setPath('data/models/')
      .load('5.mtl', function (materials) {
          materials.preload();
          new THREE.OBJLoader()
              .setMaterials(materials)
              .setPath('data/models/')
              .load('5.obj', function (group) {
                  RhinoMesh5 = group.children[0];
                  RhinoMesh5.material.side = THREE.DoubleSide;
                  RhinoMesh5.scale.set(0.2, 0.2, 0.2);
                  RhinoMesh5.castShadow = true;
                  RhinoMesh5.receiveShadow = true;
  
                  markerRoot1.add(RhinoMesh5);
              }, onProgress, onError);
      });

        

}

function update() {
    //actualiza contenido de nuestra app AR
    if (arToolkitSource.ready !== false) {
        arToolkitContext.update(arToolkitSource.domElement);
    }
}

function render() {
    // Esto es igual siempre cuando queremos mostrar los objetos, es siempre igual en threeJS
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate); //Le pide a la app cual es el frame en el que estamos, y se genera un loop automatico
    deltaTime = clock.getDelta(); // tiempo que paso desde el ultimo frame del video hasta el frame siguiente
    totalTime += deltaTime; // totalTime =  totalTime + deltaTime 
    update(); //para hacer el update de los objetos
    render(); //para que vuelva a calcular las proyecciones de nuestros objetos en 3d
}