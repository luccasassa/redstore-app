/*
    Altavoces (5)
    Amplificadores (2)
    Auriculares (7)
    Accesorios (7)
    Camaras (5)
    Home (4)
    Objetivos (5)
    Reproductores (3)
    Televisores (5)
*/

const db = [
    // Altavoces (5)
    {
        id: 1,
        titulo: "SRS-XB13",
        subtitulo: "Altavoz inalámbrico portátil EXTRA BASS™ XB13",
        card: "Altavoz SRS-XB13",
        descripcion: "Que su forma compacta no te engañe, este pequeño altavoz proporciona un gran sonido Surround. El procesador de difusión de sonido expande el sonido en cualquier lugar gracias a su tecnología DSP. Resistente al agua y al polvo con una calificación IP67, este altavoz es tan bueno por fuera como por dentro. Llévatelo a la piscina, al río o al parque, y podrás escuchar música mientras tus amigos y tú disfrutáis del sol.",
        categoria: "Altavoces",
        stock: "6",
        precio: 8999,
        img: "https://i.imgur.com/B4yw1gA.png"
    },
    {
        id: 2,
        titulo: "SRS-RA5000",
        subtitulo: "Altavoz inalámbrico premium SRS-RA5000 con 360 Reality Audio",
        card: "Altavoz SRS-RA5000",
        descripcion: "Al incorporar datos de localización tridimensional, las pistas con 360 Reality Audio producen un excepcional sonido ambiental que llena la sala. Y si no hay datos, tampoco hay problema: Immersive Audio Enhancement, el exclusivo algoritmo de Sony, reproduce tus canciones en estéreo favoritas con un sonido que inunda la sala.",
        categoria: "Altavoces",
        stock: "4",
        precio: 48999,
        img: "https://i.imgur.com/etTpJfZ.png"
    },
    {
        id: 3,
        titulo: "SRS-NS7",
        subtitulo: "Altavoces inalámbricos estilo neckband SRS-NS7",
        card: "Altavoces SRS-NS7",
        descripcion: "El primer altavoz inalámbrico estilo neckband compatible con Dolby Atmos® con los modelos de BRAVIA XR de Sony. Descubre lo envolvente que puede ser el sonido espacial 360 al ver películas Dolby Atmos® en nuestros últimos televisores BRAVIA XR con una gama de funciones de sonido incomparable.",
        categoria: "Altavoces",
        stock: "7",
        precio: 32999,
        img: "https://i.imgur.com/Tthqx2J.png"
    },
    {
        id: 4,
        titulo: "SRS-XG500",
        subtitulo: "Altavoz inalámbrico portátil XG500 de la serie X",
        card: "Altavoz XG500 serie X",
        descripcion: "El SRS-XG500 es perfecto para llevar un sonido potente al aire libre. La combinación de X-Balanced Speaker Unit, tweeter de alta eficiencia y radiadores pasivos ofrece un sonido nítido y claro tanto si escuchas en interiores como al aire libre. Además, con un exterior duradero, una clasificación de resistencia al agua6 y al polvo2 IP66, una duración de batería de 30 horas3 y un mango fácil de sujetar, puedes llevarlo casi donde quieras.",
        categoria: "Altavoces",
        stock: "12",
        precio: 25999,
        img: "https://i.imgur.com/94Z8oFx.png"
    },
    {
        id: 5,
        titulo: "SRS-XP700",
        subtitulo: "Altavoz inalámbrico portátil XP700 de la serie X",
        card: "Altavoz XP700 serie X",
        descripcion: "El XP700 está diseñado para ofrecer un sonido envolvente. Con el sonido de fiesta omnidireccional que ofrece X-Balanced Speaker Unit y los tweeters frontal y posterior de alta eficiencia, emite un sonido detallado y nítido en todas direcciones. Es perfecto para fiestas dentro o fuera de casa, y cuenta con una gran duración de batería, resistencia al agua IPX43 y una práctica asa para ir de una fiesta a la siguiente.",
        categoria: "Altavoces",
        stock: "3",
        precio: 70999,
        img: "https://i.imgur.com/9XuaGoD.png"
    },
    // Amplificadores (2)
    {
        id: 6,
        titulo: "CAS-1B",
        subtitulo: "Sistema de audio de alta resolución con amplificador para jack 3.5",
        card: "Amplificador CAS-1B",
        descripcion: "El sistema de audio CAS-1 cuenta con amplificadores dobles y altavoces independientes que recrean de forma precisa los espacios sonoros originales para una experiencia envolvente de audio de alta resolución a través de los altavoces o auriculares. También podrás disfrutar de una transmisión de audio mediante Bluetooth® de alta calidad desde tus dispositivos.",
        categoria: "Amplificadores",
        stock: "10",
        precio: 88999,
        img: "https://i.imgur.com/ZjLgO6j.png"
    },
    {
        id: 7,
        titulo: "SA-CS9",
        subtitulo: "Subwoofer con amplificador integrado con 115W de potencia",
        card: "Subwoofer SA-CS9",
        descripcion: "Disfruta de unos graves profundos con este potente subwoofer activo. El diafragma de cono de 250 mm puede mover un mayor volumen de aire, produciendo una potente resonancia que hace que los graves suenen auténticos. El subwoofer refuerza los sonidos de baja frecuencia en las películas y la música para lograr una gran experiencia multicanal de cine en casa.",
        categoria: "Amplificadores",
        stock: "7",
        precio: 18999,
        img: "https://i.imgur.com/4IHX37T.png"
    },
    // Auriculares (7)
    {
        id: 8,
        titulo: "WF-1000XM3",
        subtitulo: "Auriculares inalámbricos con Noise Cancelling WF-1000XM3",
        card: "Auriculares WF-1000XM3",
        descripcion: "La tecnología Noise Cancelling integrada en los auriculares WF-1000XM3 es la más avanzada de la historia en unos auriculares totalmente inalámbricos con nuestro procesador de Noise Cancelling HD QN1e. Sumérgete por completo en tu música.",
        categoria: "Auriculares",
        stock: "5",
        precio: 18999,
        img: "https://i.imgur.com/JTbdXuc.png"
    },
    {
        id: 9,
        titulo: "WF-L900",
        subtitulo: "LinkBuds con diseño de anillo abierto y resistencia al agua IPX4",
        card: "Auriculares WF-L900",
        descripcion: "Estos pequeños se conectan con tu vida diaria. Llévalos todo el día cómodamente sin dejar de oír lo que te rodea, sin notar nada en la oreja y sin tener que pausar tu música para oir a la gente y a tu entorno. Los LinkBuds tienden un puente entre tu vida cotidiana y tu entretenimiento favorito vayas donde vayas y hagas lo que hagas.",
        categoria: "Auriculares",
        stock: "7",
        precio: 14999,
        img: "https://i.imgur.com/1rpvw0e.png"
    },
    {
        id: 10,
        titulo: "WF-SP900",
        subtitulo: "Auriculares inalámbricos WF-SP900 con almacenamiento de 4GB",
        card: "Auriculares WF-SP900",
        descripcion: "Gracias a la certificación IPX5/8 de resistencia al agua, los auriculares WF-SP900 pueden utilizarse tanto en agua dulce como salada y sumergirse hasta 2 metros. El modo sonido ambiente te permite mantenerte atento mientras te mueves. Al mezclar música con sonidos del entorno, disfrutarás de tus canciones favoritas y escucharás lo que ocurre a tu alrededor.",
        categoria: "Auriculares",
        stock: "11",
        precio: 17999,
        img: "https://i.imgur.com/5Tzx1vr.png"
    },
    {
        id: 11,
        titulo: "WH-1000XM4",
        subtitulo: "Auriculares inalámbricos con XM4 noise cancelling y EXTRA BASS™",
        card: "WH-1000XM4",
        descripcion: "Para maximizar el rendimiento de noise cancelling, los WH-1000XM4 incorporan dos tecnologías: el optimizador de Noise Cancelling personal, diseñado a tu medida, y la optimización de la presión atmosférica, diseñada expresamente para los viajes.",
        categoria: "Auriculares",
        stock: "10",
        precio: 42999,
        img: "https://i.imgur.com/xMsIVOg.png"
    },
    {
        id: 12,
        titulo: "WH-CH710N",
        subtitulo: "Auriculares inalámbricos con Noise Cancelling WH-CH710N",
        card: "Auriculares WH-CH710N",
        descripcion: "Los auriculares inalámbricos con Noise Cancelling WH-CH710N te permiten disfrutar de una experiencia de escucha potente y sin distracciones. Gracias a la función Noise Cancelling con tecnología de sensor de ruido dual y al modo sonido ambiente, tendrás un control absoluto sobre tu experiencia de escucha para que puedas disfrutar de hasta 35 horas de reproducción inalámbrica.",
        categoria: "Auriculares",
        stock: "11",
        precio: 30999,
        img: "https://i.imgur.com/N6QiXV9.png"
    },
    {
        id: 13,
        titulo: "WH-H910N",
        subtitulo: "Auriculares con Noise Cancelling h.ear on 3 Wireless WH-H910N",
        card: "Auriculares WH-910N",
        descripcion: "Gracias a una fina carcasa y una diadema de silicona que se adapta mejor a la cabeza, podrás llevarlos puestos todo el día. Las suaves almohadillas acolchadas ofrecen un ajuste cómodo y estable. Los dos micrófonos con Noise Cancelling, uno de alimentación anticipada y otro de retroalimentación, captan más sonidos ambientales, ya sea el ruido de un avión, del tráfico o de las conversaciones de la oficina",
        categoria: "Auriculares",
        stock: "8",
        precio: 22999,
        img: "https://i.imgur.com/R30ZBX8.png"
    },
    {
        id: 14,
        titulo: "WI-1000XM2",
        subtitulo: "Auriculares internos inalámbricos con Noise Cancelling WI-1000XM2",
        card: "Auriculares WI-1000XM2",
        descripcion: "La tecnología Noise Cancelling de los auriculares WI-1000XM2 es la más avanzada de la historia en unos auriculares inalámbricos con sujeción por detrás del cuello gracias a la potencia de nuestro procesador de Noise Cancelling HD QN1. Sumérgete por completo en tu música.",
        categoria: "Auriculares",
        stock: "8",
        precio: 14999,
        img: "https://i.imgur.com/JVj9vEc.png"
    },
    // Accesorios (7)
    {
        id: 15,
        titulo: "DLC-HJ20HF",
        subtitulo: "Cable HDMI de alta velocidad plano de 2 metros con Ethernet",
        card: "Cable de video HDMI 1.4",
        descripcion: "Transfiere datos de audio multicanal y vídeo digital de alta definición con DLC-HJ20HF. El cable admite resolución 4K y 3D con dispositivos compatibles y se puede utilizar para compartir señales de audio ARC o Ethernet. El cómodo diseño plano reduce la pérdida de transmisión mientras que los enchufes incorporan conectores HDMI bañados en oro para una calidad duradera. Transferencia de datos fiable gracias al cableado de hilos de cobre AWG 30 con aislamiento de triple capa.",
        categoria: "Accesorios",
        stock: "15",
        precio: 1999,
        img: "https://i.imgur.com/T26kRgz.png"
    },
    {
        id: 16,
        titulo: "DLC-HX10",
        subtitulo: "Cable HDMI de alta calidad y alta velocidad con Ethernet",
        card: "Cable de video HDMI 2.1",
        descripcion: "Este cable HDMI de alta calidad y alta velocidad con certificación Premium HDMI admite la transferencia de datos a alta velocidad de 18 Gbps necesaria para transmitir señales de vídeo 4K y 4K HDR hasta a 60p. Disfruta de una alta resolución, una amplia gama de color y un alto contraste de vídeo, además de funciones de comunicación de datos avanzadas. Transferencia de datos fiable gracias al cableado de hilos de cobre AWG 30 con aislamiento de triple capa.",
        categoria: "Accesorios",
        stock: "20",
        precio: 1699,
        img: "https://i.imgur.com/3BoUCxm.png"
    },
    {
        id: 17,
        titulo: "EP-NI1000",
        subtitulo: "Tapones con reducción de ruido EP-NI1000S/EP-NI1000M/EP-NI1000L",
        card: "Tapones EP-NI1000",
        descripcion: "La tecnología de amplificación digital S-Master™ HX de Walkman® es compatible con el formato DSD nativo y admite una salida equilibrada y de alta potencia. Reduce la distorsión y el ruido en varias frecuencias para un sonido rico y completo, que mejora aún más por la nueva soldadura sin plomo de alta calidad.",
        categoria: "Accesorios",
        stock: "20",
        precio: 2499,
        img: "https://i.imgur.com/iYrnDmq.png"
    },
    {
        id: 18,
        titulo: "MUC-B20SB1",
        subtitulo: "Cable conector estándar balanceado de 2 metros",
        card: "Cable MUC-B20SB1",
        descripcion: "Con el fin de garantizar un rendimiento óptimo, el cable de auriculares balanceado MUC-B20SB1 se ha diseñado en estrecha colaboración con Kimber Kable, aprovechando su tecnología de trenzado. El conductor de cobre sin oxígeno minimiza el deterioro del sonido y su longitud de 2m te ofrece una gran libertad de movimiento.",
        categoria: "Accesorios",
        stock: "7",
        precio: 4999,
        img: "https://i.imgur.com/3vpmu44.png"
    },
    {
        id: 19,
        titulo: "MUC-S12SB1",
        subtitulo: "Cable conector estándar balanceado de 1,2 metros",
        card: "Cable MUC-S12SB1",
        descripcion: "Con el fin de garantizar un rendimiento óptimo, el cable de auriculares balanceado MUC-S12SB1 se ha diseñado en estrecha colaboración con Kimber Kable, aprovechando su tecnología de trenzado. El conductor de cobre sin oxígeno minimiza el deterioro del sonido y su longitud de 1.2m te ofrece una gran libertad de movimiento.",
        categoria: "Accesorios",
        stock: "10",
        precio: 3999,
        img: "https://i.imgur.com/eHsffJM.png"
    },
    {
        id: 20,
        titulo: "VMC-15FS",
        subtitulo: "Cable de video y surround 5.1 AV",
        card: "Cable de video AV",
        descripcion: "Cable AV de conexión para enlazar la Handycam® a un vídeo o TV. La longitud del cable es de 1,5 metros. Conector especial de 10 patillas: Pin Plug 2 (audio) / 1 (vídeo) / S-Vídeo",
        categoria: "Accesorios",
        stock: "30",
        precio: 999,
        img: "https://i.imgur.com/6OZvOaK.png"
    },
    {
        id: 21,
        titulo: "VMC-EC Series",
        subtitulo: "Cable de euroconector serie VMC-EC",
        card: "Cable de euroconector",
        descripcion: "Cable analógico diseñado para conectar un grabador de HDD, un reproductor de DVD, un vídeo, un decodificador o un receptor de satélite a un televisor o a un receptor A/V. Cable de alta pureza: el núcleo de cobre 99,996% libre de oxígeno (OFC) reduce la distorsión de la señal. El aislamiento de doble capa reduce las interferencias electromagnéticas y de radiofrecuencia para una imagen nítida. Los conectores bañados en oro de 24 k resisten la corrosión para una fiabilidad duradera.",
        categoria: "Accesorios",
        stock: "10",
        precio: 1299,
        img: "https://i.imgur.com/H720o70.png"
    },
    // Camaras (5)
    {
        id: 22,
        titulo: "ILCE-7M4 / ILCE-7M4K",
        subtitulo: "Cámara híbrida de fotograma completo Alpha 7 IV",
        card: "Cámara híbrida Alpha 7 IV",
        descripcion: "Sensor de imagen CMOS Exmor R retroiluminado de fotograma completo de 33,0 MP de reciente desarrollo. Procesador de imágenes BIONZ XR avanzado con un rendimiento 8 veces superior. Creación de vídeos con capacidad de grabación en 4:2:2 de 10 bits en 4K de 60p. Las funciones avanzadas para vídeos incluyen Modo Activo, compensación de la variación de la longitud focal y ayuda de AF.",
        categoria: "Camaras",
        stock: "5",
        precio: 362194,
        img: "https://i.imgur.com/KgmsdbE.png"
    },
    {
        id: 23,
        titulo: "ILME-FX3",
        subtitulo: "Cámara Cinema Line FX3 de fotograma completo",
        card: "Cámara Cinema Line FX3",
        descripcion: "El panel táctil LCD tipo 3.0 (1,44 millones de puntos) tiene un diseño abierto en el lateral para lograr más flexibilidad y visibilidad al montar la cámara en cardanes o soportes. Rendimiento de fotograma completo con alta sensibilidad y un rango dinámico amplio. Motor de procesamiento de imágenes de alto rendimiento BIONZ XR. Grabación 4K (QFHD) de alta frecuencia de imagen de 120 fps. Ciencia cromática de cine con S-Cinetone™. Movilidad mejorada para su uso en solitario.",
        categoria: "Camaras",
        stock: "2",
        precio: 607719,
        img: "https://i.imgur.com/VPgvr2o.png"
    },
    {
        id: 24,
        titulo: "ZV-E10",
        subtitulo: "Cámara para videoblogs con objetivo intercambiable",
        card: "Cámara videoblogs Z",
        descripcion: "Eye AF en tiempo real para animales ya mediante actualización de software. Sensor CMOS Exmor™ APS-C de gran tamaño y 24,2 MP. Micrófono direccional de 3 cápsulas con paraviento. Funciones para videoblogueros: ajuste de presentación de productos, botón de bokeh, botón de fotografías, vídeos y cámara lenta y rápida. Conectividad flexible para un uso compartido sencillo.",
        categoria: "Camaras",
        stock: "5",
        precio: 109999,
        img: "https://i.imgur.com/wVxE6C1.png"
    },
    {
        id: 25,
        titulo: "ILCE-1",
        subtitulo: "Alpha 1 con una resolución y velocidad superiores",
        card: "Cámara Alpha 1 α1",
        descripcion: " La α1 ofrece nuevas cotas de rendimiento de imagen y eficiencia en flujos de trabajo, para una nueva libertad creativa. Sensor CMOS apilado de fotograma completo de 35 mm y de 50,1 MP con memoria integrada. El motor BIONZ XR avanzado aumenta la velocidad hasta 8 veces. Captura continua a 30 fps con seguimiento de AF/AE. Grabación de vídeos en 8K 30p. Amplia cobertura de AF con detección de fases de 759 puntos y detección de contraste de 425 puntos.",
        categoria: "Camaras",
        stock: "1",
        precio: 905272,
        img: "https://i.imgur.com/IsZoL3r.png"
    },
    {
        id: 26,
        titulo: "ILCA-99M2",
        subtitulo: "Alpha 99 II con sensor de imagen de fotograma completo retroiluminado",
        card: "Cámara Alpha 99 II",
        descripcion: "α99 II lleva el enfoque automático al siguiente nivel en materia de alta precisión y rapidez, captura rápida y continua, y una sorprendente resolución: el mejor rendimiento en montura tipo A. 79 puntos de AF reticulares híbridos rápidos, mejorados y efectivos. Disparo continuo a alta velocidad de hasta 12 fps con seguimiento de AF/AE. Sensor CMOS Exmor R® de fotograma completo de 35 mm y 42,4 megapíxeles. Estabilización de imágenes SteadyShot INSIDE de 5 ejes para fotografías y vídeos. Motor procesamiento de imagen BIONZ™ X.",
        categoria: "Camaras",
        stock: "3",
        precio: 465661,
        img: "https://i.imgur.com/S88BlMC.png"
    },
    // Home (4)
    {
        id: 27,
        titulo: "BDV-E6100",
        subtitulo: "Home Cinema con Blu-ray",
        card: "Home Cinema BDV-E6100",
        descripcion: "La acción trepidante de una película, el rugir de la multitud en un partido o tus canciones favoritas: disfruta de todo con el sonido Surround dinámico. Con acceso con un solo toque a las canciones del smartphone Bluetooth® y NFC, podrás poner en marcha tu música en cuanto entres en la habitación. Nuestro último sistema de cine en casa cuenta con el innovador diseño Sense of Quartz, inspirado en los bordes del vidrio tallado y las caras brillantes del cristal de roca. Desde los altavoces a los mandos a distancia, cada elemento aporta un estilo refinado y sencillo a tu salón.",
        categoria: "Home",
        stock: "4",
        precio: 70999,
        img: "https://i.imgur.com/0h4A178.png"
    },
    {
        id: 28,
        titulo: "HT-S40R",
        subtitulo: "Home Theatre 600 W de auténtico sonido Surround 5.1",
        card: "Home Theatre HT-S40R",
        descripcion: "La HT-S40R te ofrece un sonido cinematográfico que inunda tu hogar con 600 W de auténtico sonido Surround 5.1 y parlantes posteriores inalámbricos que dan vida a cualquier película. Para disfrutar de una experiencia de audio excepcional, una combinación de Sound Bar, subwoofer y parlantes posteriores inalámbricos brinda un sonido Surround y dinámico que colma la habitación.",
        categoria: "Home",
        stock: "8",
        precio: 84999,
        img: "https://i.imgur.com/2ObOJMW.png"
    },
    {
        id: 29,
        titulo: "BDV-N9200W / N9200WL",
        subtitulo: "Home Cinema con Blu-ray",
        card: "Home Cinema BDV-N9200W",
        descripcion: "Disfruta de la potencia de las salas de cine en tu salón con el BDV-N9200W. Vive tus películas preferidas con un nivel de detalle casi real gracias a la transmisión y conversión de señales 4K. Desde las explosiones hasta los susurros cobrarán vida con sonido Surround 5.1 en los altavoces Magnetic Fluid, mientras que el audio de alta resolución eleva la calidad de la música a un nivel similar a la grabación original.",
        categoria: "Home",
        stock: "4",
        precio: 130999,
        img: "https://i.imgur.com/EhLVEwQ.png"
    },
    {
        id: 30,
        titulo: "BDV-NF7220",
        subtitulo: "Home Cinema con Blu-ray",
        card: "Home Cinema BDV-NF7220",
        descripcion: "El salón se convierte en un cine: disfruta del sonido Surround 5.1 y del impresionante audio de alta resolución con los altavoces Magnetic Fluid. Transmite con Wi-Fi® integrado y duplica tu teléfono compatible con Miracast en el televisor. Al convertir el sonido analógico a digital a una velocidad mayor que conversión estándar, la alta resolución revela detalles sutiles nunca antes escuchados en sonidos y diálogos.",
        categoria: "Home",
        stock: "6",
        precio: 90999,
        img: "https://i.imgur.com/Jo3b5Z9.png"
    },
    // Objetivos (5)
    {
        id: 31,
        titulo: "SEL2470GM2",
        subtitulo: "Objetivo FE 24-70mm F2.8 GMaster II",
        card: "Objetivo SEL2470GM2",
        descripcion: "Objetivo zoom estándar G Master superior. Cuatro motores lineales XD (dinámico extremo) de alta potencia garantizan un rendimiento de AF extraordinario. 5 elementos asféricos, entre los que se incluyen 2 de tipo XA, 2 elementos de cristal ED y 2 Super ED para obtener una alta resolución. Un bokeh fantástico de F2,8 en todo el alcance del zoom, además de un excelente rendimiento en los primeros planos.",
        categoria: "Objetivos",
        stock: "5",
        precio: 309290,
        img: "https://i.imgur.com/rfT676X.png"
    },
    {
        id: 32,
        titulo: "SELP1635G",
        subtitulo: "Objetivo FE PZ 16-35mm F4 G",
        card: "Objetivo SELP1635G",
        descripcion: "Objetivo G con zoom electrónico gran angular ultraligero y versátil. Dos elementos AA, un elemento asférico estándar y un elemento asférico ED para disfrutar de una alta resolución en toda el área de la imagen. Los dos motores lineales XD ofrecen un gran impulso para lograr un AF rápido, silencioso y con poca vibración. El nuevo sistema de zoom con cuatro motores lineales XD ofrece un control fluido y una respuesta inmediata. Tres anillas de control (zoom, enfoque y apertura)",
        categoria: "Objetivos",
        stock: "5",
        precio: 193315,
        img: "https://i.imgur.com/ByaM6LI.png"
    },
    {
        id: 33,
        titulo: "SEL70200GM2",
        subtitulo: "Objetivo FE 70-200mm F2.8 GMaster OSS II",
        card: "Objetivo SEL70200GM2",
        descripcion: "Zoom telescópico superior de la serie G Master. Un elemento XA, dos cristales Super ED y tres ED para una resolución alta en todo el alcance del zoom. Los motores lineales XD ofrecen una excelente respuesta y baja vibración para contar con un AF rápido y preciso. Nanorrevestimiento antirreflectante II de Sony para minimizar destellos e imágenes superpuestas. Funcionalidad, movilidad y fiabilidad para satisfacer las necesidades de captura profesional.",
        categoria: "Objetivos",
        stock: "5",
        precio: 386703,
        img: "https://i.imgur.com/Qhgj21R.png"
    },
    {
        id: 34,
        titulo: "SEL14F18GM",
        subtitulo: "Objetivo FE 14mm F1.8 GMaster",
        card: "Objetivo SEL14F18GM",
        descripcion: "Objetivo prime ultra gran angular superior G Master. Elementos XA y de cristal Super ED y dos cristales ED para una alta resolución en toda la imagen. Perspectivas ultra gran angular con gran apertura en un objetivo increíblemente compacto. Los motores lineales XD ofrecen una excelente respuesta y baja vibración para contar con un AF rápido y preciso. El botón de fijación de enfoque y otras funciones satisfacen tus necesidades de captura profesionales.",
        categoria: "Objetivos",
        stock: "5",
        precio: 206203,
        img: "https://i.imgur.com/pheelj3.png"
    },
    {
        id: 35,
        titulo: "SEL24F28G",
        subtitulo: "Objetivo FE 24mm F2.8 GPrime",
        card: "Objetivo SEL24F28G",
        descripcion: "Objetivo G prime gran angular. Este objetivo reúne la imagen de alta calidad y el atractivo bokeh del objetivo G en un diseño compacto con gran calidad de construcción y funcionamiento intuitivo. Es fácil de transportar e ideal para fotos vistosas en gran angular. El AF rápido, preciso y silencioso es ideal para fotos y vídeos, y garantiza la captura de esos momentos vitales. Motores lineales dobles para un enfoque automático rápido, preciso y silencioso.",
        categoria: "Objetivos",
        stock: "5",
        precio: 89999,
        img: "https://i.imgur.com/nbht9Fg.png"
    },
    // Reproductores (3)
    {
        id: 36,
        titulo: "NW-WM1ZM2",
        subtitulo: "The new Walkman® WM1ZM2 Signature Series",
        card: "Walkman NW-WM1ZM2",
        descripcion: "Fabricados con un material único de espuma de poliuretano desarrollado por Sony. Suaves y elásticos, mejoran la adhesión a la pared del canal auditivo y minimizan los huecos en la superficie de contacto. Mejoran el aislamiento acústico y eliminan más ruido, especialmente en el rango de alta frecuencia.",
        categoria: "Reproductores",
        stock: "3",
        precio: 609999,
        img: "https://i.imgur.com/HT2jJbL.png"
    },
    {
        id: 37,
        titulo: "WM1AM2",
        subtitulo: "The strong Walkman® digital multimedia player WM1AM2",
        card: "Walkman WM1AM2",
        descripcion: "Reproducción de sonido fidedign. La tecnología de amplificación digital S-Master™ HX de Walkman® es compatible con el formato DSD nativo y admite una salida equilibrada y de alta potencia. Reduce la distorsión y el ruido en varias frecuencias para un sonido rico y completo, que mejora aún más por la nueva soldadura sin plomo de alta calidad.",
        categoria: "Reproductores",
        stock: "3",
        precio: 569999,
        img: "https://i.imgur.com/vo8yqC2.png"
    },
    {
        id: 38,
        titulo: "NW-ZX300",
        subtitulo: "Walkman® digital multimedia player ZX300 de la serie ZX",
        card: "Walkman NW-ZX300",
        descripcion: "Calidad superior con DSD nativo de 11,2 MHz usando auriculares equilibrados y compatibilidad con PCM de 384 KHz/32 bits. El amplificador digital S-Master HX™ reduce la distorsión y el ruido en un amplio rango de frecuencias para que experimentes un sonido excepcional y completo. Escucha lo que te estabas perdiendo. DSEE HX™ mejora tu música para aproximarla a una calidad de sonido de alta resolución.",
        categoria: "Reproductores",
        stock: "3",
        precio: 529999,
        img: "https://i.imgur.com/tSxOE9P.png"
    },
    // Televisores (5)
    {
        id: 39,
        titulo: "CFI-1102A",
        subtitulo: "PlayStation 5 PS5 Blu-ray Edition Console (AUS Plug) CFI-1002A / CFI-1102A",
        card: "PS5® CFI-1102A",
        descripcion: "Aprovecha la potencia de una SSD con E/S integradas, una CPU y GPU personalizadas que reinventan las reglas de lo que una consola PlayStation es capaz de hacer. Ray tracing aporta nuevos niveles de realismo con reflejos y sombras naturales a los juegos de PS5. Disfruta de una experiencia de juego fluida con una alta velocidad de fotogramas de hasta 120 fps en juegos compatibles y salida de 120 Hz en pantallas 4K.",
        categoria: "PlayStation®",
        stock: "10",
        precio: 91999,
        img: "https://i.imgur.com/DBYXjLy.png"
    },
    {
        id: 40,
        titulo: "CFI-ZCT1W",
        subtitulo: "Mando inalámbrico DualSense™ PlayStation 5",
        card: "DualSense™ CFI-ZCT1W",
        descripcion: "El mando inalámbrico DualSense mantiene muchas características del DUALSHOCK®4, que vuelven para una nueva generación de juegos. Éste ofrece una inmersiva retroalimentación háptica, gatillos adaptativos dinámicos y un micrófono integrado, todo ello en un diseño icónico. Siente la respuesta táctil capaz de transmitir las acciones del juego con dos activadores que sustituyen a los motores de vibración tradicionales. Cuando lo tienes en las manos, estas vibraciones dinámicas son capaces de simular todo tipo de sensaciones, como los elementos del entorno o el retroceso de diferentes armas.",
        categoria: "PlayStation®",
        stock: "",
        precio: 14999,
        img: "https://i.imgur.com/fo1vG8c.png"
    },
    {
        id: 41,
        titulo: "CFI-ZWH1",
        subtitulo: "Auriculares inalámbricos PULSE 3D™ PlayStation 5",
        card: "Pulse 3D CFI-ZWH1",
        descripcion: "Los auriculares inalámbricos PULSE 3D se han diseñado específicamente para ofrecer el audio 3D que la PlayStation®5 ha hecho posible. Con la tecnología de audio 3D Tempest, la consola PS5 te sumerge en paisajes sonoros increíbles que te permitirán disfrutar del sonido como si viniese de todas direcciones. Juega con estilo gracias a las almohadillas de felpa y la banda de sujeción de la diadema mejoradas.",
        categoria: "PlayStation®",
        stock: "6",
        precio: 24999,
        img: "https://i.imgur.com/JTwIbOG.png"
    },
    {
        id: 42,
        titulo: "CFI-ZEY1",
        subtitulo: "Cámara HD PS VR PlayStation 5",
        card: "Cámara HD CFI-ZEY1",
        descripcion: "Con lentes duales de 1080p y un soporte integrado, la cámara HD funciona a la perfección con las herramientas de eliminación del fondo de la PS5 para convertirte en el centro de atención. Crea una grabación o transmisión de tu partida rápidamente con el botón de creación de tu mando inalámbrico DualSense™. También puedes añadir tu imagen a los vídeos de tus partidas con la cámara HD mientras los transmites en modo imagen en imagen, gracias a su capacidad de recortar el fondo o eliminarlo por completo con una pantalla verde.",
        categoria: "PlayStation®",
        stock: "2",
        precio: 8999,
        img: "https://i.imgur.com/4FFi8MO.png"
    },
    {
        id: 43,
        titulo: "CUH-ZVR1",
        subtitulo: "Casco PS VR Inmersivo PlayStation 5",
        card: "Casco VR CUH-ZVR1",
        descripcion: "Conviértete en el centro de extraordinarios universos de juego con juegos exclusivos de PS VR gracias a la potencia de tu consola PlayStation®. Visión de 360 grados!, observa cómo un mundo interactivo cobra vida a tu alrededor con un campo de visión sin cortes mires a donde mires. Descubre una nueva dimensión de sonido: la tecnología audio 3D te permite localizar la procedencia y la distancia de los sonidos que oyes a tu alrededor. Experimenta nuevas realidades con una pantalla OLED personalizada y gráficos a 120 fps para disfrutar de una inmersión completa en tus juegos.",
        categoria: "PlayStation®",
        stock: "3",
        precio: 41999,
        img: "https://i.imgur.com/j1szYiH.png"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(db)
        }, 500)
    })
}

export const getProductsId = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(db.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(db.filter(prod => prod.categoria === categoryId))
        }, 2000)
    })
}