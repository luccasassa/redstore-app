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

const products = [
    // Altavoces (5)
    {
        id: "1",
        title: "SRS-XB13",
        subtitle: "Altavoz inalámbrico portátil EXTRA BASS™ XB13",
        card: "Altavoz SRS-XB13",
        description: "Que su forma compacta no te engañe, este pequeño altavoz proporciona un gran sonido Surround. El procesador de difusión de sonido expande el sonido en cualquier lugar gracias a su tecnología DSP. Resistente al agua y al polvo con una calificación IP67, este altavoz es tan bueno por fuera como por dentro. Llévatelo a la piscina, al río o al parque, y podrás escuchar música mientras tus amigos y tú disfrutáis del sol.",
        category: "Altavoces",
        stock: 6,
        price: 8999,
        img: "https://i.imgur.com/B4yw1gA.png"
    },
    {
        id: "2",
        title: "SRS-RA5000",
        subtitle: "Altavoz inalámbrico premium SRS-RA5000 con 360 Reality Audio",
        card: "Altavoz SRS-RA5000",
        description: "Al incorporar datos de localización tridimensional, las pistas con 360 Reality Audio producen un excepcional sonido ambiental que llena la sala. Y si no hay datos, tampoco hay problema: Immersive Audio Enhancement, el exclusivo algoritmo de Sony, reproduce tus canciones en estéreo favoritas con un sonido que inunda la sala.",
        category: "Altavoces",
        stock: 4,
        price: 48999,
        img: "https://i.imgur.com/etTpJfZ.png"
    },
    {
        id: "3",
        title: "SRS-NS7",
        subtitle: "Altavoces inalámbricos estilo neckband SRS-NS7",
        card: "Altavoces SRS-NS7",
        description: "El primer altavoz inalámbrico estilo neckband compatible con Dolby Atmos® con los modelos de BRAVIA XR de Sony. Descubre lo envolvente que puede ser el sonido espacial 360 al ver películas Dolby Atmos® en nuestros últimos televisores BRAVIA XR con una gama de funciones de sonido incomparable.",
        category: "Altavoces",
        stock: 7,
        price: 32999,
        img: "https://i.imgur.com/Tthqx2J.png"
    },
    {
        id: "4",
        title: "SRS-XG500",
        subtitle: "Altavoz inalámbrico portátil XG500 de la serie X",
        card: "Altavoz XG500 serie X",
        description: "El SRS-XG500 es perfecto para llevar un sonido potente al aire libre. La combinación de X-Balanced Speaker Unit, tweeter de alta eficiencia y radiadores pasivos ofrece un sonido nítido y claro tanto si escuchas en interiores como al aire libre. Además, con un exterior duradero, una clasificación de resistencia al agua6 y al polvo2 IP66, una duración de batería de 30 horas y un mango fácil de sujetar, puedes llevarlo casi donde quieras.",
        category: "Altavoces",
        stock: 12,
        price: 25999,
        img: "https://i.imgur.com/94Z8oFx.png"
    },
    {
        id: "5",
        title: "SRS-XP700",
        subtitle: "Altavoz inalámbrico portátil XP700 de la serie X",
        card: "Altavoz XP700 serie X",
        description: "El XP700 está diseñado para ofrecer un sonido envolvente. Con el sonido de fiesta omnidireccional que ofrece X-Balanced Speaker Unit y los tweeters frontal y posterior de alta eficiencia, emite un sonido detallado y nítido en todas direcciones. Es perfecto para fiestas dentro o fuera de casa, y cuenta con una gran duración de batería, resistencia al agua IPX43 y una práctica asa para ir de una fiesta a la siguiente.",
        category: "Altavoces",
        stock: 3,
        price: 70999,
        img: "https://i.imgur.com/9XuaGoD.png"
    },
    // Amplificadores (2)
    {
        id: "6",
        title: "CAS-1B",
        subtitle: "Sistema de audio de alta resolución con amplificador para jack 3.5",
        card: "Amplificador CAS-1B",
        description: "El sistema de audio CAS-1 cuenta con amplificadores dobles y altavoces independientes que recrean de forma precisa los espacios sonoros originales para una experiencia envolvente de audio de alta resolución a través de los altavoces o auriculares. También podrás disfrutar de una transmisión de audio mediante Bluetooth® de alta calidad desde tus dispositivos.",
        category: "Amplificadores",
        stock: 10,
        price: 88999,
        img: "https://i.imgur.com/ZjLgO6j.png"
    },
    {
        id: "7",
        title: "SA-CS9",
        subtitle: "Subwoofer con amplificador integrado con 115W de potencia",
        card: "Subwoofer SA-CS9",
        description: "Disfruta de unos graves profundos con este potente subwoofer activo. El diafragma de cono de 250 mm puede mover un mayor volumen de aire, produciendo una potente resonancia que hace que los graves suenen auténticos. El subwoofer refuerza los sonidos de baja frecuencia en las películas y la música para lograr una gran experiencia multicanal de cine en casa.",
        category: "Amplificadores",
        stock: 7,
        price: 18999,
        img: "https://i.imgur.com/4IHX37T.png"
    },
    // Auriculares (7)
    {
        id: "8",
        title: "WF-1000XM3",
        subtitle: "Auriculares inalámbricos con Noise Cancelling WF-1000XM3",
        card: "Auriculares WF-1000XM3",
        description: "La tecnología Noise Cancelling integrada en los auriculares WF-1000XM3 es la más avanzada de la historia en unos auriculares totalmente inalámbricos con nuestro procesador de Noise Cancelling HD QN1e. Sumérgete por completo en tu música.",
        category: "Auriculares",
        stock: 5,
        price: 18999,
        img: "https://i.imgur.com/JTbdXuc.png"
    },
    {
        id: "9",
        title: "WF-L900",
        subtitle: "LinkBuds con diseño de anillo abierto y resistencia al agua IPX4",
        card: "Auriculares WF-L900",
        description: "Estos pequeños se conectan con tu vida diaria. Llévalos todo el día cómodamente sin dejar de oír lo que te rodea, sin notar nada en la oreja y sin tener que pausar tu música para oir a la gente y a tu entorno. Los LinkBuds tienden un puente entre tu vida cotidiana y tu entretenimiento favorito vayas donde vayas y hagas lo que hagas.",
        category: "Auriculares",
        stock: 7,
        price: 14999,
        img: "https://i.imgur.com/1rpvw0e.png"
    },
    {
        id: "10",
        title: "WF-SP900",
        subtitle: "Auriculares inalámbricos WF-SP900 con almacenamiento de 4GB",
        card: "Auriculares WF-SP900",
        description: "Gracias a la certificación IPX5/8 de resistencia al agua, los auriculares WF-SP900 pueden utilizarse tanto en agua dulce como salada y sumergirse hasta 2 metros. El modo sonido ambiente te permite mantenerte atento mientras te mueves. Al mezclar música con sonidos del entorno, disfrutarás de tus canciones favoritas y escucharás lo que ocurre a tu alrededor.",
        category: "Auriculares",
        stock: 11,
        price: 17999,
        img: "https://i.imgur.com/5Tzx1vr.png"
    },
    {
        id: "11",
        title: "WH-1000XM4",
        subtitle: "Auriculares inalámbricos con XM4 noise cancelling y EXTRA BASS™",
        card: "WH-1000XM4",
        description: "Para maximizar el rendimiento de noise cancelling, los WH-1000XM4 incorporan dos tecnologías: el optimizador de Noise Cancelling personal, diseñado a tu medida, y la optimización de la presión atmosférica, diseñada expresamente para los viajes.",
        category: "Auriculares",
        stock: 10,
        price: 42999,
        img: "https://i.imgur.com/xMsIVOg.png"
    },
    {
        id: "12",
        title: "WH-CH710N",
        subtitle: "Auriculares inalámbricos con Noise Cancelling WH-CH710N",
        card: "Auriculares WH-CH710N",
        description: "Los auriculares inalámbricos con Noise Cancelling WH-CH710N te permiten disfrutar de una experiencia de escucha potente y sin distracciones. Gracias a la función Noise Cancelling con tecnología de sensor de ruido dual y al modo sonido ambiente, tendrás un control absoluto sobre tu experiencia de escucha para que puedas disfrutar de hasta 35 horas de reproducción inalámbrica.",
        category: "Auriculares",
        stock: 11,
        price: 30999,
        img: "https://i.imgur.com/N6QiXV9.png"
    },
    {
        id: "13",
        title: "WH-H910N",
        subtitle: "Auriculares con Noise Cancelling h.ear on 3 Wireless WH-H910N",
        card: "Auriculares WH-910N",
        description: "Gracias a una fina carcasa y una diadema de silicona que se adapta mejor a la cabeza, podrás llevarlos puestos todo el día. Las suaves almohadillas acolchadas ofrecen un ajuste cómodo y estable. Los dos micrófonos con Noise Cancelling, uno de alimentación anticipada y otro de retroalimentación, captan más sonidos ambientales, ya sea el ruido de un avión, del tráfico o de las conversaciones de la oficina",
        category: "Auriculares",
        stock: 8,
        price: 22999,
        img: "https://i.imgur.com/R30ZBX8.png"
    },
    {
        id: "14",
        title: "WI-1000XM2",
        subtitle: "Auriculares internos inalámbricos con Noise Cancelling WI-1000XM2",
        card: "Auriculares WI-1000XM2",
        description: "La tecnología Noise Cancelling de los auriculares WI-1000XM2 es la más avanzada de la historia en unos auriculares inalámbricos con sujeción por detrás del cuello gracias a la potencia de nuestro procesador de Noise Cancelling HD QN1. Sumérgete por completo en tu música.",
        category: "Auriculares",
        stock: 8,
        price: 14999,
        img: "https://i.imgur.com/JVj9vEc.png"
    },
    // Accesorios (7)
    {
        id: "15",
        title: "DLC-HJ20HF",
        subtitle: "Cable HDMI de alta velocidad plano de 2 metros con Ethernet",
        card: "Cable de video HDMI 1.4",
        description: "Transfiere datos de audio multicanal y vídeo digital de alta definición con DLC-HJ20HF. El cable admite resolución 4K y 3D con dispositivos compatibles y se puede utilizar para compartir señales de audio ARC o Ethernet. El cómodo diseño plano reduce la pérdida de transmisión mientras que los enchufes incorporan conectores HDMI bañados en oro para una calidad duradera. Transferencia de datos fiable gracias al cableado de hilos de cobre AWG 30 con aislamiento de triple capa.",
        category: "Accesorios",
        stock: 15,
        price: 1999,
        img: "https://i.imgur.com/T26kRgz.png"
    },
    {
        id: "16",
        title: "DLC-HX10",
        subtitle: "Cable HDMI de alta calidad y alta velocidad con Ethernet",
        card: "Cable de video HDMI 2.1",
        description: "Este cable HDMI de alta calidad y alta velocidad con certificación Premium HDMI admite la transferencia de datos a alta velocidad de 18 Gbps necesaria para transmitir señales de vídeo 4K y 4K HDR hasta a 60p. Disfruta de una alta resolución, una amplia gama de color y un alto contraste de vídeo, además de funciones de comunicación de datos avanzadas. Transferencia de datos fiable gracias al cableado de hilos de cobre AWG 30 con aislamiento de triple capa.",
        category: "Accesorios",
        stock: 20,
        price: 1699,
        img: "https://i.imgur.com/3BoUCxm.png"
    },
    {
        id: "17",
        title: "EP-NI1000",
        subtitle: "Tapones con reducción de ruido EP-NI1000S/EP-NI1000M/EP-NI1000L",
        card: "Tapones EP-NI1000",
        description: "La tecnología de amplificación digital S-Master™ HX de Walkman® es compatible con el formato DSD nativo y admite una salida equilibrada y de alta potencia. Reduce la distorsión y el ruido en varias frecuencias para un sonido rico y completo, que mejora aún más por la nueva soldadura sin plomo de alta calidad.",
        category: "Accesorios",
        stock: 20,
        price: 2499,
        img: "https://i.imgur.com/iYrnDmq.png"
    },
    {
        id: "18",
        title: "MUC-B20SB1",
        subtitle: "Cable conector estándar balanceado de 2 metros",
        card: "Cable MUC-B20SB1",
        description: "Con el fin de garantizar un rendimiento óptimo, el cable de auriculares balanceado MUC-B20SB1 se ha diseñado en estrecha colaboración con Kimber Kable, aprovechando su tecnología de trenzado. El conductor de cobre sin oxígeno minimiza el deterioro del sonido y su longitud de 2m te ofrece una gran libertad de movimiento.",
        category: "Accesorios",
        stock: 7,
        price: 4999,
        img: "https://i.imgur.com/3vpmu44.png"
    },
    {
        id: "19",
        title: "MUC-S12SB1",
        subtitle: "Cable conector estándar balanceado de 1,2 metros",
        card: "Cable MUC-S12SB1",
        description: "Con el fin de garantizar un rendimiento óptimo, el cable de auriculares balanceado MUC-S12SB1 se ha diseñado en estrecha colaboración con Kimber Kable, aprovechando su tecnología de trenzado. El conductor de cobre sin oxígeno minimiza el deterioro del sonido y su longitud de 1.2m te ofrece una gran libertad de movimiento.",
        category: "Accesorios",
        stock: 10,
        price: 3999,
        img: "https://i.imgur.com/eHsffJM.png"
    },
    {
        id: "20",
        title: "VMC-15FS",
        subtitle: "Cable de video y surround 5.1 AV",
        card: "Cable de video AV",
        description: "Cable AV de conexión para enlazar la Handycam® a un vídeo o TV. La longitud del cable es de 1,5 metros. Conector especial de 10 patillas: Pin Plug 2 (audio) / 1 (vídeo) / S-Vídeo",
        category: "Accesorios",
        stock: 30,
        price: 999,
        img: "https://i.imgur.com/6OZvOaK.png"
    },
    {
        id: "21",
        title: "VMC-EC Series",
        subtitle: "Cable de euroconector serie VMC-EC",
        card: "Cable de euroconector",
        description: "Cable analógico diseñado para conectar un grabador de HDD, un reproductor de DVD, un vídeo, un decodificador o un receptor de satélite a un televisor o a un receptor A/V. Cable de alta pureza: el núcleo de cobre 99,996% libre de oxígeno (OFC) reduce la distorsión de la señal. El aislamiento de doble capa reduce las interferencias electromagnéticas y de radiofrecuencia para una imagen nítida. Los conectores bañados en oro de 24 k resisten la corrosión para una fiabilidad duradera.",
        category: "Accesorios",
        stock: 10,
        price: 1299,
        img: "https://i.imgur.com/H720o70.png"
    },
    // Camaras (5)
    {
        id: "22",
        title: "ILCE-7M4 / ILCE-7M4K",
        subtitle: "Cámara híbrida de fotograma completo Alpha 7 IV",
        card: "Cámara híbrida Alpha 7 IV",
        description: "Sensor de imagen CMOS Exmor R retroiluminado de fotograma completo de 33,0 MP de reciente desarrollo. Procesador de imágenes BIONZ XR avanzado con un rendimiento 8 veces superior. Creación de vídeos con capacidad de grabación en 4:2:2 de 10 bits en 4K de 60p. Las funciones avanzadas para vídeos incluyen Modo Activo, compensación de la variación de la longitud focal y ayuda de AF.",
        category: "Camaras",
        stock: 5,
        price: 362194,
        img: "https://i.imgur.com/KgmsdbE.png"
    },
    {
        id: "23",
        title: "ILME-FX3",
        subtitle: "Cámara Cinema Line FX3 de fotograma completo",
        card: "Cámara Cinema Line FX3",
        description: "El panel táctil LCD tipo 3.0 (1,44 millones de puntos) tiene un diseño abierto en el lateral para lograr más flexibilidad y visibilidad al montar la cámara en cardanes o soportes. Rendimiento de fotograma completo con alta sensibilidad y un rango dinámico amplio. Motor de procesamiento de imágenes de alto rendimiento BIONZ XR. Grabación 4K (QFHD) de alta frecuencia de imagen de 120 fps. Ciencia cromática de cine con S-Cinetone™. Movilidad mejorada para su uso en solitario.",
        category: "Camaras",
        stock: 2,
        price: 607719,
        img: "https://i.imgur.com/VPgvr2o.png"
    },
    {
        id: "24",
        title: "ZV-E10",
        subtitle: "Cámara para videoblogs con objetivo intercambiable",
        card: "Cámara videoblogs Z",
        description: "Eye AF en tiempo real para animales ya mediante actualización de software. Sensor CMOS Exmor™ APS-C de gran tamaño y 24,2 MP. Micrófono direccional de 3 cápsulas con paraviento. Funciones para videoblogueros: ajuste de presentación de productos, botón de bokeh, botón de fotografías, vídeos y cámara lenta y rápida. Conectividad flexible para un uso compartido sencillo.",
        category: "Camaras",
        stock: 5,
        price: 109999,
        img: "https://i.imgur.com/wVxE6C1.png"
    },
    {
        id: "25",
        title: "ILCE-1",
        subtitle: "Alpha 1 con una resolución y velocidad superiores",
        card: "Cámara Alpha 1 α1",
        description: " La α1 ofrece nuevas cotas de rendimiento de imagen y eficiencia en flujos de trabajo, para una nueva libertad creativa. Sensor CMOS apilado de fotograma completo de 35 mm y de 50,1 MP con memoria integrada. El motor BIONZ XR avanzado aumenta la velocidad hasta 8 veces. Captura continua a 30 fps con seguimiento de AF/AE. Grabación de vídeos en 8K 30p. Amplia cobertura de AF con detección de fases de 759 puntos y detección de contraste de 425 puntos.",
        category: "Camaras",
        stock: 1,
        price: 905272,
        img: "https://i.imgur.com/IsZoL3r.png"
    },
    {
        id: "26",
        title: "ILCA-99M2",
        subtitle: "Alpha 99 II con sensor de imagen de fotograma completo retroiluminado",
        card: "Cámara Alpha 99 II",
        description: "α99 II lleva el enfoque automático al siguiente nivel en materia de alta precisión y rapidez, captura rápida y continua, y una sorprendente resolución: el mejor rendimiento en montura tipo A. 79 puntos de AF reticulares híbridos rápidos, mejorados y efectivos. Disparo continuo a alta velocidad de hasta 12 fps con seguimiento de AF/AE. Sensor CMOS Exmor R® de fotograma completo de 35 mm y 42,4 megapíxeles. Estabilización de imágenes SteadyShot INSIDE de 5 ejes para fotografías y vídeos. Motor procesamiento de imagen BIONZ™ X.",
        category: "Camaras",
        stock: 3,
        price: 465661,
        img: "https://i.imgur.com/S88BlMC.png"
    },
    // Home (4)
    {
        id: "27",
        title: "BDV-E6100",
        subtitle: "Home Cinema con Blu-ray",
        card: "Home Cinema BDV-E6100",
        description: "La acción trepidante de una película, el rugir de la multitud en un partido o tus canciones favoritas: disfruta de todo con el sonido Surround dinámico. Con acceso con un solo toque a las canciones del smartphone Bluetooth® y NFC, podrás poner en marcha tu música en cuanto entres en la habitación. Nuestro último sistema de cine en casa cuenta con el innovador diseño Sense of Quartz, inspirado en los bordes del vidrio tallado y las caras brillantes del cristal de roca. Desde los altavoces a los mandos a distancia, cada elemento aporta un estilo refinado y sencillo a tu salón.",
        category: "Home",
        stock: 4,
        price: 70999,
        img: "https://i.imgur.com/0h4A178.png"
    },
    {
        id: "28",
        title: "HT-S40R",
        subtitle: "Home Theatre 600 W de auténtico sonido Surround 5.1",
        card: "Home Theatre HT-S40R",
        description: "La HT-S40R te ofrece un sonido cinematográfico que inunda tu hogar con 600 W de auténtico sonido Surround 5.1 y parlantes posteriores inalámbricos que dan vida a cualquier película. Para disfrutar de una experiencia de audio excepcional, una combinación de Sound Bar, subwoofer y parlantes posteriores inalámbricos brinda un sonido Surround y dinámico que colma la habitación.",
        category: "Home",
        stock: 8,
        price: 84999,
        img: "https://i.imgur.com/2ObOJMW.png"
    },
    {
        id: "29",
        title: "BDV-N9200W / N9200WL",
        subtitle: "Home Cinema con Blu-ray",
        card: "Home Cinema BDV-N9200W",
        description: "Disfruta de la potencia de las salas de cine en tu salón con el BDV-N9200W. Vive tus películas preferidas con un nivel de detalle casi real gracias a la transmisión y conversión de señales 4K. Desde las explosiones hasta los susurros cobrarán vida con sonido Surround 5.1 en los altavoces Magnetic Fluid, mientras que el audio de alta resolución eleva la calidad de la música a un nivel similar a la grabación original.",
        category: "Home",
        stock: 4,
        price: 130999,
        img: "https://i.imgur.com/EhLVEwQ.png"
    },
    {
        id: "30",
        title: "BDV-NF7220",
        subtitle: "Home Cinema con Blu-ray",
        card: "Home Cinema BDV-NF7220",
        description: "El salón se convierte en un cine: disfruta del sonido Surround 5.1 y del impresionante audio de alta resolución con los altavoces Magnetic Fluid. Transmite con Wi-Fi® integrado y duplica tu teléfono compatible con Miracast en el televisor. Al convertir el sonido analógico a digital a una velocidad mayor que conversión estándar, la alta resolución revela detalles sutiles nunca antes escuchados en sonidos y diálogos.",
        category: "Home",
        stock: 6,
        price: 90999,
        img: "https://i.imgur.com/Jo3b5Z9.png"
    },
    // Objetivos (5)
    {
        id: "31",
        title: "SEL2470GM2",
        subtitle: "Objetivo FE 24-70mm F2.8 GMaster II",
        card: "Objetivo SEL2470GM2",
        description: "Objetivo zoom estándar G Master superior. Cuatro motores lineales XD (dinámico extremo) de alta potencia garantizan un rendimiento de AF extraordinario. 5 elementos asféricos, entre los que se incluyen 2 de tipo XA, 2 elementos de cristal ED y 2 Super ED para obtener una alta resolución. Un bokeh fantástico de F2,8 en todo el alcance del zoom, además de un excelente rendimiento en los primeros planos.",
        category: "Objetivos",
        stock: 5,
        price: 309290,
        img: "https://i.imgur.com/rfT676X.png"
    },
    {
        id: "32",
        title: "SELP1635G",
        subtitle: "Objetivo FE PZ 16-35mm F4 G",
        card: "Objetivo SELP1635G",
        description: "Objetivo G con zoom electrónico gran angular ultraligero y versátil. Dos elementos AA, un elemento asférico estándar y un elemento asférico ED para disfrutar de una alta resolución en toda el área de la imagen. Los dos motores lineales XD ofrecen un gran impulso para lograr un AF rápido, silencioso y con poca vibración. El nuevo sistema de zoom con cuatro motores lineales XD ofrece un control fluido y una respuesta inmediata. Tres anillas de control (zoom, enfoque y apertura)",
        category: "Objetivos",
        stock: 5,
        price: 193315,
        img: "https://i.imgur.com/ByaM6LI.png"
    },
    {
        id: "33",
        title: "SEL70200GM2",
        subtitle: "Objetivo FE 70-200mm F2.8 GMaster OSS II",
        card: "Objetivo SEL70200GM2",
        description: "Zoom telescópico superior de la serie G Master. Un elemento XA, dos cristales Super ED y tres ED para una resolución alta en todo el alcance del zoom. Los motores lineales XD ofrecen una excelente respuesta y baja vibración para contar con un AF rápido y preciso. Nanorrevestimiento antirreflectante II de Sony para minimizar destellos e imágenes superpuestas. Funcionalidad, movilidad y fiabilidad para satisfacer las necesidades de captura profesional.",
        category: "Objetivos",
        stock: 5,
        price: 386703,
        img: "https://i.imgur.com/Qhgj21R.png"
    },
    {
        id: "34",
        title: "SEL14F18GM",
        subtitle: "Objetivo FE 14mm F1.8 GMaster",
        card: "Objetivo SEL14F18GM",
        description: "Objetivo prime ultra gran angular superior G Master. Elementos XA y de cristal Super ED y dos cristales ED para una alta resolución en toda la imagen. Perspectivas ultra gran angular con gran apertura en un objetivo increíblemente compacto. Los motores lineales XD ofrecen una excelente respuesta y baja vibración para contar con un AF rápido y preciso. El botón de fijación de enfoque y otras funciones satisfacen tus necesidades de captura profesionales.",
        category: "Objetivos",
        stock: 5,
        price: 206203,
        img: "https://i.imgur.com/pheelj3.png"
    },
    {
        id: "35",
        title: "SEL24F28G",
        subtitle: "Objetivo FE 24mm F2.8 GPrime",
        card: "Objetivo SEL24F28G",
        description: "Objetivo G prime gran angular. Este objetivo reúne la imagen de alta calidad y el atractivo bokeh del objetivo G en un diseño compacto con gran calidad de construcción y funcionamiento intuitivo. Es fácil de transportar e ideal para fotos vistosas en gran angular. El AF rápido, preciso y silencioso es ideal para fotos y vídeos, y garantiza la captura de esos momentos vitales. Motores lineales dobles para un enfoque automático rápido, preciso y silencioso.",
        category: "Objetivos",
        stock: 5,
        price: 89999,
        img: "https://i.imgur.com/nbht9Fg.png"
    },
    // Reproductores (3)
    {
        id: "36",
        title: "NW-WM1ZM2",
        subtitle: "The new Walkman® WM1ZM2 Signature Series",
        card: "Walkman NW-WM1ZM2",
        description: "Fabricados con un material único de espuma de poliuretano desarrollado por Sony. Suaves y elásticos, mejoran la adhesión a la pared del canal auditivo y minimizan los huecos en la superficie de contacto. Mejoran el aislamiento acústico y eliminan más ruido, especialmente en el rango de alta frecuencia.",
        category: "Reproductores",
        stock: 3,
        price: 609999,
        img: "https://i.imgur.com/HT2jJbL.png"
    },
    {
        id: "37",
        title: "WM1AM2",
        subtitle: "The strong Walkman® digital multimedia player WM1AM2",
        card: "Walkman WM1AM2",
        description: "Reproducción de sonido fidedign. La tecnología de amplificación digital S-Master™ HX de Walkman® es compatible con el formato DSD nativo y admite una salida equilibrada y de alta potencia. Reduce la distorsión y el ruido en varias frecuencias para un sonido rico y completo, que mejora aún más por la nueva soldadura sin plomo de alta calidad.",
        category: "Reproductores",
        stock: 3,
        price: 569999,
        img: "https://i.imgur.com/vo8yqC2.png"
    },
    {
        id: "38",
        title: "NW-ZX300",
        subtitle: "Walkman® digital multimedia player ZX300 de la serie ZX",
        card: "Walkman NW-ZX300",
        description: "Calidad superior con DSD nativo de 11,2 MHz usando auriculares equilibrados y compatibilidad con PCM de 384 KHz/32 bits. El amplificador digital S-Master HX™ reduce la distorsión y el ruido en un amplio rango de frecuencias para que experimentes un sonido excepcional y completo. Escucha lo que te estabas perdiendo. DSEE HX™ mejora tu música para aproximarla a una calidad de sonido de alta resolución.",
        category: "Reproductores",
        stock: 3,
        price: 529999,
        img: "https://i.imgur.com/tSxOE9P.png"
    },
    // Televisores (5)
    {
        id: "39",
        title: "CFI-1102A",
        subtitle: "PlayStation 5 PS5 Blu-ray Edition Console (AUS Plug) CFI-1002A / CFI-1102A",
        card: "PS5® CFI-1102A",
        description: "Aprovecha la potencia de una SSD con E/S integradas, una CPU y GPU personalizadas que reinventan las reglas de lo que una consola PlayStation es capaz de hacer. Ray tracing aporta nuevos niveles de realismo con reflejos y sombras naturales a los juegos de PS5. Disfruta de una experiencia de juego fluida con una alta velocidad de fotogramas de hasta 120 fps en juegos compatibles y salida de 120 Hz en pantallas 4K.",
        category: "PlayStation®",
        stock: 10,
        price: 91999,
        img: "https://i.imgur.com/DBYXjLy.png"
    },
    {
        id: "40",
        title: "CFI-ZCT1W",
        subtitle: "Mando inalámbrico DualSense™ PlayStation 5",
        card: "DualSense™ CFI-ZCT1W",
        description: "El mando inalámbrico DualSense mantiene muchas características del DUALSHOCK®4, que vuelven para una nueva generación de juegos. Éste ofrece una inmersiva retroalimentación háptica, gatillos adaptativos dinámicos y un micrófono integrado, todo ello en un diseño icónico. Siente la respuesta táctil capaz de transmitir las acciones del juego con dos activadores que sustituyen a los motores de vibración tradicionales. Cuando lo tienes en las manos, estas vibraciones dinámicas son capaces de simular todo tipo de sensaciones, como los elementos del entorno o el retroceso de diferentes armas.",
        category: "PlayStation®",
        stock: 5,
        price: 14999,
        img: "https://i.imgur.com/fo1vG8c.png"
    },
    {
        id: "41",
        title: "CFI-ZWH1",
        subtitle: "Auriculares inalámbricos PULSE 3D™ PlayStation 5",
        card: "Pulse 3D CFI-ZWH1",
        description: "Los auriculares inalámbricos PULSE 3D se han diseñado específicamente para ofrecer el audio 3D que la PlayStation®5 ha hecho posible. Con la tecnología de audio 3D Tempest, la consola PS5 te sumerge en paisajes sonoros increíbles que te permitirán disfrutar del sonido como si viniese de todas direcciones. Juega con estilo gracias a las almohadillas de felpa y la banda de sujeción de la diadema mejoradas.",
        category: "PlayStation®",
        stock: 6,
        price: 24999,
        img: "https://i.imgur.com/JTwIbOG.png"
    },
    {
        id: "42",
        title: "CFI-ZEY1",
        subtitle: "Cámara HD PS VR PlayStation 5",
        card: "Cámara HD CFI-ZEY1",
        description: "Con lentes duales de 1080p y un soporte integrado, la cámara HD funciona a la perfección con las herramientas de eliminación del fondo de la PS5 para convertirte en el centro de atención. Crea una grabación o transmisión de tu partida rápidamente con el botón de creación de tu mando inalámbrico DualSense™. También puedes añadir tu imagen a los vídeos de tus partidas con la cámara HD mientras los transmites en modo imagen en imagen, gracias a su capacidad de recortar el fondo o eliminarlo por completo con una pantalla verde.",
        category: "PlayStation®",
        stock: 2,
        price: 8999,
        img: "https://i.imgur.com/4FFi8MO.png"
    },
    {
        id: "43",
        title: "CUH-ZVR1",
        subtitle: "Casco PS VR Inmersivo PlayStation 5",
        card: "Casco VR CUH-ZVR1",
        description: "Conviértete en el centro de extraordinarios universos de juego con juegos exclusivos de PS VR gracias a la potencia de tu consola PlayStation®. Visión de 360 grados!, observa cómo un mundo interactivo cobra vida a tu alrededor con un campo de visión sin cortes mires a donde mires. Descubre una nueva dimensión de sonido: la tecnología audio 3D te permite localizar la procedencia y la distancia de los sonidos que oyes a tu alrededor. Experimenta nuevas realidades con una pantalla OLED personalizada y gráficos a 120 fps para disfrutar de una inmersión completa en tus juegos.",
        category: "PlayStation®",
        stock: 3,
        price: 41999,
        img: "https://i.imgur.com/j1szYiH.png"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        resolve(products.find(prod => prod.id === id))
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        resolve(products.filter(prod => prod.category === categoryId))
    })
}