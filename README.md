# JUEGOS EN RED
## NOMBRE DEL JUEGO: 
Topwer
## DESCRIPCIÓN:
Juego de plataformas 2D para la asignatura de Juegos En Red
## MIEMBROS DEL GRUPO: 
Carlos Martín Hernández (c.martinh.2019@alumnos.urjc.es - carlosmartinhernandez79), Luis Mateos Sánchez (l.mateos.2020@alumnos.urjc.es - MrLuis33), Álvaro Redondo Molina (a.redondom.2021@alumnos.urjc.es - AlvaroRedondoURJC), Hugo Silva Gil (h.silva.2021@alumnos.urjc.es - HSilvaa).


# GGD

# TOPWER



<p align="center">
  <img src="Imagenes/Logo_Topwer.png" />
</p>




## Game Design Document
### Juegos En Red


### Hugo Silva Gil
### Álvaro Redondo Molina
### Carlos Martín Hernández
### Luis Mateos Sánchez

# EQUIPO Y CONCEPTO

## EQUIPO

Los integrantes de este proyecto son: Hugo Silva Gil (h.silva.2021@alumnos.urjc.es y usuario de GitHub HSilvaa), Carlos Martín Hernández (c.martinh.2019@alumnos.urjc.es ; usuario carlosmartinhernandez79), Luis Mateos Sánchez(l.mateos.2020@alumnos.urjc.es; usuario de GitHub  MrLuis33) y Álvaro Redondo Molina (a.redondom.2021@alumnos.urjc.es y usuario de GitHub AlvaroRedondoURJC).
Se dividirá el trabajo de la siguiente forma:

### Hugo: 
Se encargará de la parte de programación y del diseño de niveles. 

### Carlos:
Encargado de la historia principal,  animación de personajes y elementos y apoyo en programación.

### Álvaro:
Encargado del diseño de personajes, elementos y escenarios. Apoyo en animación y programación.

### Luis:
Encargado de la programación.
<p align="center">
  <img src="Imagenes/Logo_Equipo.png" />
<br>
	LOGO EQUIPO
<br>
</p>


# CARACTERÍSTICAS DEL JUEGO

El juego es un plataformas 2D vertical con puzzles que los jugadores deben poder resolver de forma cooperativa. Es un juego para todos los públicos, aunque está centrado en un público juvenil.

El diseño será sencillo, colores pastel con una temática medieval. 


<p align="center">
  <img src="ImagesJS/Pantallas/Fondo_Pantalla_Principal_nublado.jpg" />
<br>
	PANTALLA PRINCIPAL
<br>
</p>



## HISTORIA

Todo era armonía y felicidad en Grandheim, una rica tierra del norte de Tarin. Allí distintas razas compartían las tierras y entre ellos existía cordialidad y respeto.

Una mañana, en el horizonte  apareció una densa niebla que no presagiaba nada bueno. Ante la confusión de todos los habitantes de Grandheim, el malvado hechicero Blackus apareció con su ejército de monstruos y atacó la región con virulencia.

Fue un ataque tan rápido que ningún ejército tuvo tiempo de reaccionar. Así que pronto fueron todos esclavizados y encerrados en mazmorras.

Es así como nuestros dos protagonistas se conocen: Tuk Rompetruenos y Lial Laurel. Tuk es un enano de las montañas, acostumbrado a los espacios pequeños y a los túneles, mientras que Lial es una alta elfa de los bosques, caracterizada por su increíble agilidad. 
Ambos se encuentran en una mazmorra del castillo de Blackus, respetando un destino macabro y funesto cuando por casualidad, una rata les muestra una posible salida de la celda. En ese momento, ambos comienzan a colaborar para escapar del castillo y poder ver si queda alguien con quien unirse para enfrentarse a Blackus y su ejército de monstruos. 
Pero un guardia se da cuenta de la ausencia de los prisioneros y da la voz de alarma, lo que hará que ambos tengan que escapar antes de que se acabe el tiempo de su ventaja y sean capturados definitivamente por los monstruos.

## CONCEPTO

El juego que desarrollaremos será un plataformas cooperativo en 2D, donde dos personajes deberán salir de un castillo cooperando y superando las distintas trampas y situaciones que se les presenten en su camino hasta llegar a la parte más alta del mismo.

Si no consiguen llegar ambos arriba en el tiempo determinado o si uno de ellos muere, el juego termina,  son capturados por el enemigo y devueltos a su posición inicial. 

Desarrollaremos el juego tomando de referencia el juego Fireboy and Watergirl. 

Otro concepto importante del juego, es que si estos personajes se alejan mucho, no podrán avanzar el uno sin el otro. De esta forma, los mantendremos siempre en pantalla. 




# MECÁNICAS Y CONTROLES
## MECÁNICAS

Ambos personajes contarán con una habilidad especial: uno con un doble salto, mientras que el otro podrá reducir su tamaño. 

Continuando con los puzzles, contaremos con botones que abren puertas, o palancas que activan el movimiento lateral u horizontal de una plataforma. En ciertas ocasiones, será uno de los personajes el que pueda accionar estos elementos, ya que serán inalcanzables para el otro. Por ejemplo, una palanca tras un muro muy alto al que sólo podrá llegar el personaje con doble salto. 

Por otro lado, las trampas que ya hemos mencionado anteriormente. Habrá algunas puestas de base, como pinchos o lava, pero también habrá otras que las activará el propio jugador creyendo que era el botón correcto. 
Entre estas encontramos, elevaciones del terreno que dificultan el paso, barriles que caen rodando, y pinchos en otras zonas.

Se construirá un sistema de recolección de monedas, meramente coleccionables. Por ello, contaremos con la mecánica de recoger objetos al pasar sobre ellos.


## CONTROLES
**Control en red**
El movimiento a los lados se hará con las teclas ⇐A		D⇒
El salto se ejecuta con ⇑W
La habilidad del personaje 1(hacerse pequeño)  se activa con E
La habilidad del personaje 2 se activa (doble salto) se activa pulsando W en el aire
**Control en local**
Jugador 1
El movimiento a los lados se hará con las teclas ⇐A		D⇒
El salto se ejecuta con ⇑W
La habilidad del personaje 1(hacerse pequeño)  se activa con E
Jugador 2
El movimiento a los lados se hará con las teclas de dirección  ⇐←		→⇒
El salto se ejecuta con la flecha de dirección  ⇑↑
La habilidad del personaje 2 se activa (doble salto) se activa pulsando ↑ en el aire



## CONDICIONES DE VICTORIA Y DERROTA

### VICTORIA
Los jugadores ganarán cuando ambos lleguen a la parte más alta del castillo antes de que se acabe el tiempo. Deberán superar todos los obstáculos que se le presenten para ello, tanto puzzles como trampas mortales. No existe el concepto de checkpoint ya que se quiere que cada nivel suponga un reto para el jugador y piense muy bien qué acciones tomar en un tiempo limitado para conseguir avanzar en el nivel.


### DERROTA
Los jugadores perderán si  se agota el tiempo antes de que hayan llegado a la meta del nivel, en cuyo caso volverán a empezar; o cuando uno de los dos muere, lo cual se le notificará al otro jugador y comenzarán de nuevo. Las posibilidades de muerte de los personajes pueden ser tanto por trampas (pinchos o balas) o porque se alejen demasiado uno del otro.




## DISEÑO Y REFERENCIAS

El juego principalmente será ambientado en una temática medieval y antigua, de la época del auge de los castillos y las mazmorras. Tendrá un toque místico y fantástico.
Unas de las imágenes de referencia que usaremos para la temática a tomar serían las del disco de música “Hyper Popular” y temática del videojuego “The King of Dragons”, con ese ambiente medieval con enemigos y elementos fantásticos.


<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/02d81914-c403-4353-bcd7-f6d520b76c40" />
	<br>
	Portada del disco HyperPopular
	<br>
</p>

<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/dce680c9-2243-4099-a3da-0d586cf0e77c" />
<br>
	Escena final The King of Dragons
<br>
</p>


<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/577af783-73fd-44ce-b8dd-5361ccb969ea" />
<br>
	Escena de Cuphead
<br>
</p>


## COLOR

Los colores que se van a utilizar para el juego van a ser colores pasteles y planos, para dar una impresión más de caricatura o cartoon y crear un espacio de juego más amigable y cercano. De esta forma aparte de hacer el juego más llamativo, se adecúa mejor al público al que va dirgido.


<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/894e5cb3-7fec-4e3f-92fe-94f10b13b45c" />
<br>
	Referencias de paletas de colores a usar
<br>
</p>


## PERSONAJES
En ambos personajes se utilizaran unos diseños simples pero expresivos, que a su mismo tiempo estarán compuestos por colores pasteles y con pequeños detalles relacionados con sus poderes o habilidades especiales.


<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/6f0281e3-3bb8-4abf-8736-9019edccf1d4" />
<br>
	Toma referencia colores personajes Hyper Popular
<br>
</p>


### TUK
Un enano barbudo muy robusto. Posee un gorro de Gnomo que le cubre hasta la nariz y una frondosa barba que simboliza la cantidad de conocimientos y sabiduría que posee. De ropajes llevará un poncho mágico que se iluminará cuando active su poder de empequeñecimiento. 

<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/db62a8c8-9943-4cd1-bcac-1239ed61ed84" />
<br>
	Gnomos de referencia diseño Tuk
<br>
</p>

### LIAL
Una elfa fina de pelo plateado, muy ágil y con la una corona de flores que le proporciona la capacidad de realizar el doble salto y cambiará de color al estar activo. Su cuerpo estará cubierto con una hoja gigante procedente de una planta mágica para que no sea tan frágil como los demás elfos y pueda resistir tanto como su compañero Tuk.

<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/1bc45987-f547-4ee9-982f-2edd78eb0ad5" />
<br>
	Fanarts de referencia del diseño Lial
<br>
</p>




## TRAMPAS Y OBJETOS
Las principales trampas que implementaremos en el jugo serán:
**-Pinchos:** Metálicos, afilados y puestos en línea para abarcar más terreno

<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/3080b669-1784-4cc7-8e61-a5bf930176dd" />
<br>
	Pinchos de referencia
<br>
</p>

**-Balas:** Las balas serán disparadas desde un cañón cada cierto tiempo. El jugador deberá saltarlas para esquivarlas.


<p align="center">
  <img src="Imagenes/Balas.jpg" />
<br>
	Balas de referencia
<br>
</p>


A parte de las trampas a lo largo del nivel habrá diversos objetos con los que podremos interactuar o coleccionar:
	**-Botones:** Los cuales tendrán una luz roja cuando estén apagados y verde, encendidos

<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/da192446-250e-4491-8c18-f6f85d07d528" />
<br>
	Botón de Minecraft de referencia
<br>
</p>

 
**-Palancas:** Diseño simple con dos estados (derecha/izquierda o arriba/abajo)

<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/dc7a0f45-2d18-473a-8959-6b0a2cb9d589" />
<br>
	Palanca de Minecraft de referencia
<br>
</p>
 
**-Placas de presión:** Desnivel en el mapa para su notoriedad
**-Monedas:** Diseño simple de moneda ovalada con el logo en el centro

 <p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/31f9f4a6-2f31-494f-afc0-51c7183445c4" />
<br>
	 Moneda ovalada sin logo de referencia
<br>
</p>

**-Cajas:** Diseño de una caja que se podrá mover para ayudar a los jugadores a avanzar o resolver puzzles. 

 <p align="center">
  <img src="ImagesJS/caja.png" />
<br>
	Caja de referencia
<br>
</p>

# DISEÑOS FINALES

## TUK
Como teníamos previsto hemos usado una paleta de colores pasteles y un diseño más cartoon y familiar.
 <p align="center">
  <img src="Imagenes/GnomoEvolution.png" />
<br>
	 Evolución del diseño de Tuk
<br>
</p>

## LIAL
Por otra parte el diseño de Lial se ve algo más realista, pero se mantiene esa estética familiar y colores pasteles al igual que en su compañero.
 <p align="center">
  <img src="Imagenes/evolucion elfa.jpg" />
<br>
	 Evolución del diseño de Lial
<br>
</p>

## BOTONES BASE 
Los botones han sido desarrollados vectorialmente para poder modificar su tamaño sin ningún problema para cada interfaz. A la izquierda aparece el botón que no está siendo pulsado y a la derecha el botón una vez se pone el cursor encima.

## FONDO PANTALLA INICIO
Pantalla de inicio con el nombre del juego a la izquierda y espacio a la derecha irán los botones de esta primera pantalla.
<p align="center">
  <img src="ImagesJS/Pantallas/Fondo_Pantalla_Principal_nublado.jpg" />
<br>
	Fondo de pantalla del incio
<br>
</p>

## TILES 
Esta paleta de tiles está cogida de Itch.io, y es de dominio público. Por ello, y para adaptarlo mejor a nuestro juego, la hemos retocado, de tal forma que tenga mayor apariencia de mazmorra.
<p align="center">
  <img src="assets/tilesets/Tiles/tiles.jpg" />
<br>
	Tiles modificados
<br>
</p>

## LOGOS					

Por el logo del juego, se ha optado por una torre de un castillo, puesto que es de ahí de donde deben escapar nuestros jugadores. Además, el nombre del juego lo encontramos en vertical, paralelo a la torre. 

Por otro lado, encontramos el logo del equipo, que basado en la misma dinámica vertical que el anterior, y jugando con el nombre (UpDown Games), se ha dividido en dos colores, uno por palabra, con unas flechas apuntando hacia la dirección de las propias palabras: Up, con su flecha hacia arriba y Down, con su flecha hacia abajo.

<p align="center">
  <img src="Imagenes/Logo_Equipo.png" />
<br>
Logo del equipo
<br>
</p>

<p align="center">
  <img src="Imagenes/Logo_Topwer.png" />
<br>
	Logo del juego
<br>
</p>

## OBJETOS
Los principales objetos interactuables que se implementaran en el juego y se han diseñado han sido las monedas del juego, las palancas para interactuar con el entorno y el temporizador.
<p align="center">
  <img src="ImagesJS/palanca.png" />
<br>
	Palanca
<br>
</p>
<p align="center">
  <img src="ImagesJS/Moneda.png" />
<br>
	Moneda
<br>
</p>
<p align="center">
  <img src="ImagesJS/reloj.png" />
<br>
	Reloj
<br>
</p>

## ANIMACIONES
Para las animaciones de esta utilizando una técnica 2D de estilo tradicional.  Para la caminata de Tuk se han realizado 16 sprites para conseguir una animación fluida 
<p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/f2a6a101-6769-4179-9a62-bc26ddc88d38" />
<br>
	Spritesheet de Tuk
<br>
</p>

Sin embargo,  en el caso de Lial, aunque el movimiento no es una caminata al uso, se han necesitado hasta 27 sprites, de forma que el movimiento sea más fluido. 

<p align="center">
  <img src="Imagenes/animacion lial.jpg" />
<br>
	Spritesheet de Lial
<br>
</p>

En el siguiente paso se completarán las animaciones tanto en color para el caso de la elfa y, como mejora, se intentará ampliar los movimientos para ambos para enriquecer la experiencia. 




# MÚSICA Y SONIDO

Respecto a la música, se contará con una de fondo frenética, con la intencionalidad de que nuestros jugadores se pongan nerviosos. Esta música aún no está definida, y se podrá ajustar el volúmen pero no quitarla, puesto que se considera algo necesario e importante en nuestro juego. 

Por otro lado, los sonidos y efectos de sonido que se incluirán son sonido de muerte, de caída, de salto y de andar. Además de otros como las plataformas en movimiento, barriles rodando, palancas y botones. 

Para la realización de la música base del juego se ha utilizado la aplicación LMMS y se ha generado una música que va aumentando su ritmo y la intensidad de los instrumentos. La canción ha sido creada de tal forma que se pueda establecer como un bucle y no se note demasiado el cambio.

Para la implementación del audio que suena al perder en el juego, ha sido obtenido de la siguiente url:  <p><a href="https://youtu.be/34jXc49Aj3Q?si=bNVNygs1jKt1VhT-">Musica_Derrota</a>. </p>

Para la implementación del audio que suena al recoger monedas, ha sido sacado de la siguiente url: <p><a href="https://youtu.be/_LELiYg8WGI?si=1cS5-gahh-ybphrg">Sondio_Moneda</a>. </p>

Para la implementación del audio que suena al saltar en el juego, ha sido obtenido de la siguiente url:  <p><a href="https://youtu.be/561qHylVC_o?si=GmXFr5ON4mI5qbqm">Sonido_Salto</a>. </p>

Para la implementación del audio empleado para la interacción con la palanca ha sido obtenido de la siguiente url:  <p><a href="https://youtu.be/ZFFYSOLiS-M?si=bvGdT0rEE-pHXXOR">Sonido_Palanca</a>. </p>

Por último, para la implementación del audio para la obtención de dos insignias, se ha utilizado un audio de mariano rajoy : <p><a href="https://youtu.be/-nQgsEbU9C4?si=TpUrch66wgv_8zbH">Audio_Mariano</a>. </p>
y se ha empleado una ia para completar el audio para poder conseguir la segunda insignia de hacer la pelota:<p><a href="https://fakeyou.com/tts/result/TR:63nzkvqej6g791220kcxmr59v1mtw">FakeYou</a>. </p>






# TIEMPO, INTERFAZ Y CÁMARA
## TIEMPO
Como se ha mencionado anteriormente, una de las condiciones de victoria es superar el nivel antes del tiempo establecido. Anteriormente pensamos en el desarrollo de una barra de tiempo que nos muestre una idea de cuánto tiempo nos quedaba, sin embargo cambiamos la idea por una más precisa  e informativa y no tan visual. Dicho tiempo se mostrará en pantalla en un temporizador que aparecerá en la esquina superior derecha. Aún se está considerando cuánto tiempo límite  poner por nivel, de momento está establecido en un tiempo máximo de tres minutos. Se está barajando la idea de poner temporizadores a lo largo del nivel para incrementar dicho tiempo.

 <p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/b21c8e68-b15a-44b6-9d3c-334ba6faf349" />
<br>
	 Referencia tiempo nivel
<br>
</p>

 <p align="center">
  <img src="Imagenes/interfaz tiempo.jpg" />
<br>
	 Diseño inicial del temporizador
<br>
</p>


## INTERFAZ
Para el apartado de la interfaz tendremos una pantalla de inicio donde podremos tanto elegir en qué modo de juego queremos jugar, configurar el sonido y ver los créditos. Una vez iniciado el nivel, la interfaz de pausa contará con un menú de opciones, reiniciar, volver al menú de inicio o salir del juego.
In-game, nos encontraremos con un contador de las monedas que vayamos recolectando y el temporizador explicado previamente.


 <p align="center">
  <img src="Imagenes/interfaz pantalla inicial.jpg" />
<br>
	 Interfaz pantalla inicial
<br>
</p>


 <p align="center">
  <img src="Imagenes/interfaz seleccion personaje.jpg" />
<br>
	 Interfaz selección de personaje
<br>
</p>


 <p align="center">
  <img src="Imagenes/interfaz seleccion de nivel.jpg" />
<br>
	 Interfaz selección de nivel
<br>
</p>


 <p align="center">
  <img src="Imagenes/interfaz pantalla de juego.jpg" />
<br>
	 Interfaz pantalla de juego
<br>
</p>


 <p align="center">
  <img src="Imagenes/interfaz pantalla de pausa.jpg" />
<br>
	 Interfaz pantalla de pausa
<br>
</p>


## CÁMARA
Por último mencionar que ambos personajes se encontrarán en todo momento en la cámara del juego, y una mecánica de la cámara importante a destacar es que cuando uno de los dos jugadores avance más, dejando al otro atrás (fuera de cámara), ambos morirán y tendrán que empezar de nuevo. De esta forma ambos serán conscientes de lo que hace su compañero en todo momento y se fomentará el trabajo en equipo y colaboración de los usuarios.

## ESCENARIOS


Los escenarios serán habitaciones dentro del castillo. Según los jugadores vayan subiendo, aumentará el nivel de dificultad: mayor cantidad de trampas y mayor complejidad de los puzzles. 

Los escenarios serán, al igual que los personajes, de colores pastel y planos.

Algunos de los escenarios que encontraremos, de abajo hacia arriba serán las mazmorras, puerta de entrada principal del castillo, el salón, habitaciones y, finalmente, la parte de las almenas del castillo, donde tienen que llegar nuestros personajes para escapar. 



 <p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/4fb3c73e-913b-4b6a-9cb8-261b98dc27e7" />
<br>
	Referencia mapa vertical (videojuego Rising hell)
<br>
</p>

 <p align="center">
  <img src="https://github.com/carlosmartinhernandez79/juegos_en_red/assets/100692817/7da8e900-fccb-413f-b6aa-f37c970a98cd" />
<br>
	Referencia mapa vertical (Juego Donkey Kong)
<br>
</p>

## IMPLEMENTACIÓN DEL MAPA
Para poder hacer los mapas se ha decidido usar la herramienta Tiled, un software que permite de forma visual usar un tileset para diseñar un nivel de forma rápida dando propiedades como por ejemplo colisiones a las tiles desde el propio programa, para luego cargar estos mapas como formato json directamente en phaser.
Se ha usado un tileset gratuito de <p><a href="https://pixelfrog-assets.itch.io/kings-and-pigs">Itch.io</a>. </p>
Gracias a esto la pipeline de trabajo se acorta bastante y nos permite desarrollar varios niveles en menos tiempo.



La pipeline de trabajo ha sido:
Diseño del nivel “A papel” > Implementación del diseño en Tiled > Cargar mapa en el juego

# DIAGRAMA DE FLUJO
Desde el menú de inicio, el jugador podrá ver los créditos, meterse en opciones, donde podrá subir o bajar el volumen general, el de los efectos de sonido y la música,  o salir del propio juego. Evidentemente, también podrá jugar, lo que le llevará a elegir entre local u online.
Independientemente de si está jugando en local o en online, podrá entrar en un menú de pausa. Aquí podrá reiniciar el nivel, entrar en opciones (un menú idéntico al que ya hemos mencionado), salir y volver al menú principal, que le llevará a la pantalla de inicio del juego. 

# DIAGRAMA DE NAVEGACIÓN
Se empieza el juego en la pantalla principal, en la que tenemos las posibilidades de acceder a jugar, opciones y créditos. Si accedemos a opciones en un futuro habrá un sistema de gestión de opciones de sonido. Si accedemos a créditos aparecerán unos créditos de los creadores del juego, nosotros, y una breve explicación del tipo de juego que es. Por último si accedemos a jugar, pasaremos a la pantalla de selección de personajes en la que aparecen los dos personajes jugables y un acceso al apartado de niveles, en el cual si accedemos a él nos saldrán los diversos niveles que posee el juego y al clicar en el nivel deseado accedemos a la pantalla de juego de dicho nivel. Además desde la pantalla de juego, pulsando la tecla escape se accedera a la pantalla de pausa con las posibilidades de volver al menú, abrir el apartado de opciones, reiniciar el nivel o volver al apartado de niveles en caso de querer jugar un nivel diferente. 
Por último comentar que las pantallas de opciones, créditos, selección de personajes y niveles tienen la opción de volver a la pantalla anterior clicando en la flecha situada en la esquina superior izquierda.



