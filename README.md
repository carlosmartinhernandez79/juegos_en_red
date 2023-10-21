# JUEGOS EN RED
## NOMBRE DEL JUEGO: 
Topwer
## DESCRIPCIÓN:
Juego de plataformas 2D para la asignatura de Juegos En Red
## MIEMBROS DEL GRUPO: 
Carlos Martín Hernández (c.martinh.2019@alumnos.urjc.es - carlosmartinhernandez79), Luis Mateos Sánchez (l.mateos.2020@alumnos.urjc.es - MrLuis33), Álvaro Redondo Molina (a.redondom.2021@alumnos.urjc.es - AlvaroRedondoURJC), Hugo Silva Gil (h.silva.2021@alumnos.urjc.es - HSilvaa).



# TOPWER




Game Design Document
Juegos En Red


Hugo Silva Gil
Álvaro Redondo Molina
Carlos Martín Hernández
Luis Mateos Sánchez

ÍNDICE

1.- EQUIPO Y CONCEPTO	2
1.1 EQUIPO	2
1.2 CARACTERÍSTICAS DEL JUEGO	2
1.2.1 HISTORIA	3
1.2.2 CONCEPTO	3
2.- MECÁNICAS Y CONTROLES	4
2.1 MECÁNICAS	4
2.2 CONTROLES	4
2.3 CONDICIONES DE VICTORIA Y DERROTA	5
2.3.1 VICTORIA	5
2.3.2 DERROTA	5
3.- DISEÑO Y REFERENCIAS	6
3.1 COLOR	7
3.2 PERSONAJES	7
3.2.1 TUK	8
3.2.2 LIAL	8
3.3 TRAMPAS Y OBJETOS	9
3.4 TIEMPO, INTERFAZ Y CÁMARA	10
3.4.1 TIEMPO	10
3.4.2 INTERFAZ	10
3.4.3 CÁMARA	10
3.5 ESCENARIOS	11

1.- EQUIPO Y CONCEPTO

1.1 EQUIPO

Los integrantes de este proyecto son: Hugo Silva Gil (h.silva.2021@alumnos.urjc.es y usuario de GitHub HSilvaa), Carlos Martín Hernández (c.martinh.2019@alumnos.urjc.es ; usuario carlosmartinhernandez79), Luis Mateos Sánchez(l.mateos.2020@alumnos.urjc.es; usuario de GitHub  MrLuis33) y Álvaro Redondo Molina (a.redondom.2021@alumnos.urjc.es y usuario de GitHub AlvaroRedondoURJC).
Se dividirá el trabajo de la siguiente forma:

Hugo: 
Se encargará de la parte de programación y del diseño de niveles. 

Carlos:
Encargado de la historia principal,  animación de personajes y elementos y apoyo en programación.

Álvaro:
Encargado del diseño de personajes, elementos y escenarios. Apoyo en animación y programación.

Luis:
Encargado de la programación.


1.2 CARACTERÍSTICAS DEL JUEGO

El juego es un plataformas 2D vertical con puzzles que los jugadores deben poder resolver de forma cooperativa. Es un juego para todos los públicos, aunque está centrado en un público juvenil.

El diseño será sencillo, colores pastel con una temática medieval. 






1.2.1 HISTORIA

Todo era armonía y felicidad en Grandheim, una rica tierra del norte de Tarin. Allí distintas razas compartían las tierras y entre ellos existía cordialidad y respeto.

Una mañana, en el horizonte  apareció una densa niebla que no presagiaba nada bueno. Ante la confusión de todos los habitantes de Grandheim, el malvado hechicero Blackus apareció con su ejército de monstruos y atacó la región con virulencia.

Fue un ataque tan rápido que ningún ejército tuvo tiempo de reaccionar. Así que pronto fueron todos esclavizados y encerrados en mazmorras.

Es así como nuestros dos protagonistas se conocen: Tuk Rompetruenos y Lial Laurel. Tuk es un enano de las montañas, acostumbrado a los espacios pequeños y a los túneles, mientras que Lial es una alta elfa de los bosques, caracterizada por su increíble agilidad. 
Ambos se encuentran en una mazmorra del castillo de Blackus, respetando un destino macabro y funesto cuando por casualidad, una rata les muestra una posible salida de la celda. En ese momento, ambos comienzan a colaborar para escapar del castillo y poder ver si queda alguien con quien unirse para enfrentarse a Blackus y su ejército de monstruos. 
Pero un guardia se da cuenta de la ausencia de los prisioneros y da la voz de alarma, lo que hará que ambos tengan que escapar antes de que se acabe el tiempo de su ventaja y sean capturados definitivamente por los monstruos.

1.2.2 CONCEPTO

El juego que desarrollaremos será un plataformas cooperativo en 2D, donde dos personajes deberán salir de un castillo cooperando y superando las distintas trampas y situaciones que se les presenten en su camino hasta llegar a la parte más alta del mismo.

 Si no consiguen llegar ambos arriba en el tiempo determinado o si uno de ellos muere, el juego termina,  son capturados por el enemigo y devueltos a su posición inicial. 

Desarrollaremos el juego tomando de referencia el juego Fireboy and Watergirl. 

Otro concepto importante del juego, es que si estos personajes se alejan mucho, no podrán avanzar el uno sin el otro. De esta forma, los mantendremos siempre en pantalla. 




2.- MECÁNICAS Y CONTROLES
2.1 MECÁNICAS

Ambos personajes contarán con una habilidad especial: uno con un doble salto, mientras que el otro podrá reducir su tamaño. 

Continuando con los puzzles, contaremos con botones que abren puertas, o palancas que activan el movimiento lateral u horizontal de una plataforma. En ciertas ocasiones, será uno de los personajes el que pueda accionar estos elementos, ya que serán inalcanzables para el otro. Por ejemplo, una palanca tras un muro muy alto al que sólo podrá llegar el personaje con doble salto. 

Por otro lado, las trampas que ya hemos mencionado anteriormente. Habrá algunas puestas de base, como pinchos o lava, pero también habrá otras que las activará el propio jugador creyendo que era el botón correcto. 
Entre estas encontramos, elevaciones del terreno que dificultan el paso, barriles que caen rodando, y pinchos en otras zonas.

Se construirá un sistema de recolección de monedas, meramente coleccionables. Por ello, contaremos con la mecánica de recoger objetos al pasar sobre ellos.


2.2 CONTROLES
Control en red
El movimiento a los lados se hará con las teclas ⇐A		D⇒
El salto se ejecuta con ⇑W
La habilidad del personaje 1(hacerse pequeño)  se activa con E
La habilidad del personaje 2 se activa (doble salto) se activa pulsando W en el aire
Control en local
Jugador 1
El movimiento a los lados se hará con las teclas ⇐A		D⇒
El salto se ejecuta con ⇑W
La habilidad del personaje 1(hacerse pequeño)  se activa con E
Jugador 2
El movimiento a los lados se hará con las teclas de dirección  ⇐←		→⇒
El salto se ejecuta con la flecha de dirección  ⇑↑
La habilidad del personaje 2 se activa (doble salto) se activa pulsando ↑ en el aire



2.3 CONDICIONES DE VICTORIA Y DERROTA

2.3.1 VICTORIA
Los jugadores ganarán cuando ambos lleguen a la parte más alta del castillo antes de que se acabe el tiempo. Por ello, perderán si no llegan en tiempo o si alguno de los dos muere. 

Cuando uno de los dos muere, se le notificará al otro jugador y comenzarán de nuevo.

2.3.2 DERROTA
Los jugadores perderán si  se agota el tiempo antes de que hayan llegado a la meta del nivel, en cuyo caso volverán a empezar.



3.- DISEÑO Y REFERENCIAS

El juego principalmente será ambientado en una temática medieval y antigua, de la época del auge de los castillos y las mazmorras. Tendrá un toque místico y fantástico.
Unas de las imágenes de referencia que usaremos para la temática a tomar serían las del disco de música “Hyper Popular” y temática del videojuego “The King of Dragons”, con ese ambiente medieval con enemigos y elementos fantásticos.


1: Portada Hyper Popular


2: Escena final The King of Dragons



3.1 COLOR

Los colores que se van a utilizar para el juego van a ser colores pasteles y planos, para dar una impresión más de caricatura o cartoon y crear un espacio de juego más amigable y cercano. De esta forma aparte de hacer el juego más llamativo, se adecúa mejor al público al que va dirgido.

3.2 PERSONAJES
En ambos personajes se utilizaran unos diseños simples pero expresivos, que a su mismo tiempo estarán compuestos por colores pasteles y con pequeños detalles relacionados con sus poderes o habilidades especiales.


3: Toma referencia colores personajes Hyper Popular











3.2.1 TUK
Un enano barbudo muy robusto. Posee un gorro de Gnomo que le cubre hasta la nariz y una frondosa barba que simboliza la cantidad de conocimientos y sabiduría que posee. De ropajes llevará un poncho mágico que se iluminará cuando active su poder de empequeñecimiento. 
 
4: Gnomos de referencia diseño Tuk


3.2.2 LIAL
Una elfa fina de pelo plateado, muy ágil y con la una corona de flores que le proporciona la capacidad de realizar el doble salto y cambiará de color al estar activo. Su cuerpo estará cubierto con una hoja gigante procedente de una planta mágica para que no sea tan frágil como los demás elfos y pueda resistir tanto como su compañero Tuk.


5: Fanarts de referencia del diseño Lial 





3.3 TRAMPAS Y OBJETOS
Las principales trampas que implementaremos en el jugo serán:
	-Pinchos: Metálicos, afilados y puestos en línea para abarcar más terreno
-Lava: Con colores muy llamativos para que de la sensación de peligro
-Barriles: Diseño básico de barril con colores oscuros y un logo característico

6: Barriles referencia

A parte de las trampas a lo largo del nivel habrá diversos objetos con los que podremos interactuar o coleccionar:
	-Botones: Los cuales tendrán una luz roja cuando estén apagados y verde, encendidos
	-Palancas: Diseño simple con dos estados (derecha/izquierda o arriba/abajo)
	-Placas de presión: Desnivel en el mapa para su notoriedad
	-Monedas: Diseño simple de moneda ovalada con el logo en el centro

7: Moneda ovalada sin logo


3.4 TIEMPO, INTERFAZ Y CÁMARA
3.4.1 TIEMPO
Como se ha mencionado anteriormente, una de las condiciones de victoria es superar el nivel antes del tiempo establecido. Dicho tiempo se mostrará en pantalla en forma de una barra progresiva que irá disminuyendo y cuanto más se acerque al fin del mismo, irá cogiendo un tono más rojizo. Se está barajando la idea de poner temporizadores a lo largo del nivel para incrementar dicho tiempo.


8: Referencia tiempo nivel
3.4.2 INTERFAZ
Para el apartado de la interfaz tendremos una pantalla de inicio simple donde podremos tanto elegir en qué modo de juego queremos jugar, configurar el sonido y ver los controles. Una vez iniciado el nivel, la interfaz se reducirá a un menú de pausa con un resume o quit (para seguir jugando o salir del nivel), un contador de las monedas que vayamos recolectando y el temporizador explicado previamente.

3.4.3 CÁMARA
Por último mencionar que ambos personajes se encontrarán en todo momento en la cámara del juego, y una mecánica de la cámara importante a destacar es que cuando uno de los dos jugadores intente avanzar y el otro se retrase, la cámara se quedará bloqueada y no permitirá avanzar a los jugadores a no ser de que vayan juntos en la aventura.



3.5 ESCENARIOS

Los escenarios serán habitaciones dentro del castillo. Según los jugadores vayan subiendo, aumentará el nivel de dificultad: mayor cantidad de trampas y mayor complejidad de los puzzles. 

Los escenarios serán, al igual que los personajes, de colores pastel y planos.

Algunos de los escenarios que encontraremos, de abajo hacia arriba serán las mazmorras, puerta de entrada principal del castillo, el salón, habitaciones y, finalmente, la parte de las almenas del castillo, donde tienen que llegar nuestros personajes para escapar. 


9: Referencia mapa vertical (videojuego Rising hell)



10: Referencia mapa vertical (Juego Donkey Kong)
