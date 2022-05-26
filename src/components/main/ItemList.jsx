import { useState, useEffect } from "react";
import Item from "./Item"

const ItemList = () => {

    const api = [
        {
            id: 1,
            titulo: "WH-1000XM4",
            subtitulo: "Auriculares inalámbricos con XM4 noise cancelling y EXTRA BASS™",
            descripcion: "Para maximizar el rendimiento de noise cancelling, los WH-1000XM4 incorporan dos tecnologías: el optimizador de Noise Cancelling personal, diseñado a tu medida, y la optimización de la presión atmosférica, diseñada expresamente para los viajes.",
            categoria: "Auriculares",
            stock: "10",
            precio: 42999,
            img: "./assets/products/Auriculares_WH-XB910N.png"
        },
        {
            id: 2,
            titulo: "WF-1000XM3",
            subtitulo: "Auriculares inalámbricos con Noise Cancelling WF-1000XM3",
            descripcion: "La tecnología Noise Cancelling integrada en los auriculares WF-1000XM3 es la más avanzada de la historia en unos auriculares totalmente inalámbricos con nuestro procesador de Noise Cancelling HD QN1e. Sumérgete por completo en tu música.",
            categoria: "Auriculares",
            stock: "5",
            precio: 18999,
            img: "./assets/products/Auriculare_WF-1000XM3.png"
        },
        {
            id: 3,
            titulo: "WI-1000XM2",
            subtitulo: "Auriculares internos inalámbricos con Noise Cancelling WI-1000XM2",
            descripcion: "La tecnología Noise Cancelling de los auriculares WI-1000XM2 es la más avanzada de la historia en unos auriculares inalámbricos con sujeción por detrás del cuello gracias a la potencia de nuestro procesador de Noise Cancelling HD QN1. Sumérgete por completo en tu música.",
            categoria: "Auriculares",
            stock: "8",
            precio: 14999,
            img: "./assets/products/Auriculares_WI-1000XM2.png"
        },
        {
            id: 4,
            titulo: "MDR-AS210AP",
            subtitulo: "Auriculares deportivos internos MDR-AS210AP",
            descripcion: "Disfruta de tu música favorita mientras te entrenas. El MDR-AS210AP posee ganchos con forma curvada ajustables para una sujeción segura durante el entrenamiento, y un cable de 1,2 m para darte flexibilidad de movimiento. La música suena clara y detallada, gracias a los 13,5 mm de controladores con rango de frecuencia optimizado",
            categoria: "Auriculares",
            stock: "12",
            precio: 7999,
            img: "./assets/products/Auriculares_MDR-AS210AP.png"
        },
        {
            id: 5,
            titulo: "SRS-XB13",
            subtitulo: "Altavoz inalámbrico portátil EXTRA BASS™ XB13",
            descripcion: "Que su forma compacta no te engañe, este pequeño altavoz proporciona un gran sonido Surround. El procesador de difusión de sonido expande el sonido en cualquier lugar gracias a su tecnología DSP. Resistente al agua y al polvo con una calificación IP67, este altavoz es tan bueno por fuera como por dentro. Llévatelo a la piscina, al río o al parque, y podrás escuchar música mientras tus amigos y tú disfrutáis del sol.",
            categoria: "Altavoces",
            stock: "6",
            precio: 8999,
            img: "./assets/products/Altavoz_SRS-XB13.png"
        },
        {
            id: 6,
            titulo: "SRS-RA5000",
            subtitulo: "Altavoz inalámbrico premium SRS-RA5000 con 360 Reality Audio",
            descripcion: "Al incorporar datos de localización tridimensional, las pistas con 360 Reality Audio producen un excepcional sonido ambiental que llena la sala. Y si no hay datos, tampoco hay problema: Immersive Audio Enhancement, el exclusivo algoritmo de Sony, reproduce tus canciones en estéreo favoritas con un sonido que inunda la sala.",
            categoria: "Altavoces",
            stock: "4",
            precio: 48999,
            img: "./assets/products/Altavoz_SRS-RA5000.png"
        },
        {
            id: 7,
            titulo: "SRS-NS7",
            subtitulo: "Altavoces inalámbricos estilo neckband SRS-NS7",
            descripcion: "El primer altavoz inalámbrico estilo neckband compatible con Dolby Atmos® con los modelos de BRAVIA XR de Sony. Descubre lo envolvente que puede ser el sonido espacial 360 al ver películas Dolby Atmos® en nuestros últimos televisores BRAVIA XR con una gama de funciones de sonido incomparable.",
            categoria: "Altavoces",
            stock: "7",
            precio: 32999,
            img: "./assets/products/Altavoces_SRS-NS7.png"
        },
        {
            id: 8,
            titulo: "MHC-V83D",
            subtitulo: "Sistema de audio de alta potencia V83D con tecnología BLUETOOTH®",
            descripcion: "Llena cada rincón con el sonido de fiesta omnidireccional, crea un ambiente de festival con las intermitentes luces de fiesta omnidireccionales y de altavoz multicolor o saca la estrella que llevas dentro con el KARAOKE.",
            categoria: "Altavoces",
            stock: "5",
            precio: 66999,
            img: "./assets/products/SistemaAudio_MHC-V83D.png"
        },
        {
            id: 9,
            titulo: "HT-S40R",
            subtitulo: "Home Theatre 600 W de auténtico sonido Surround 5.1",
            descripcion: "La HT-S40R te ofrece un sonido cinematográfico que inunda tu hogar con 600 W de auténtico sonido Surround 5.1 y parlantes posteriores inalámbricos que dan vida a cualquier película. Para disfrutar de una experiencia de audio excepcional, una combinación de Sound Bar, subwoofer y parlantes posteriores inalámbricos brinda un sonido Surround y dinámico que colma la habitación.",
            categoria: "Altavoces",
            stock: "8",
            precio: 84999,
            img: "./assets/products/HomeTheatre_HT-S40R.png"
        },
        {
            id: 10,
            titulo: "NW-WM1ZM2",
            subtitulo: "The new Walkman® WM1ZM2 Signature Series",
            descripcion: "Fabricados con un material único de espuma de poliuretano desarrollado por Sony. Suaves y elásticos, mejoran la adhesión a la pared del canal auditivo y minimizan los huecos en la superficie de contacto. Mejoran el aislamiento acústico y eliminan más ruido, especialmente en el rango de alta frecuencia.",
            categoria: "Reproductores",
            stock: "3",
            precio: 609999,
            img: "./assets/products/Walkman_WM1ZM2.png"
        },
        {
            id: 11,
            titulo: "EP-NI1000",
            subtitulo: "Tapones con reducción de ruido EP-NI1000S/EP-NI1000M/EP-NI1000L",
            descripcion: "La tecnología de amplificación digital S-Master™ HX de Walkman® es compatible con el formato DSD nativo y admite una salida equilibrada y de alta potencia. Reduce la distorsión y el ruido en varias frecuencias para un sonido rico y completo, que mejora aún más por la nueva soldadura sin plomo de alta calidad.",
            categoria: "Accesorios",
            stock: "20",
            precio: 2499,
            img: "./assets/products/Walkman_WM1ZM2.png"
        },
        {
            id: 12,
            titulo: "MUC-B20SB1",
            subtitulo: "Conector estándar balanceado de 2 metros",
            descripcion: "Con el fin de garantizar un rendimiento óptimo, el cable de auriculares balanceado MUC-B20SB1 se ha diseñado en estrecha colaboración con Kimber Kable, aprovechando su tecnología de trenzado. El conductor de cobre sin oxígeno minimiza el deterioro del sonido y su longitud de 2m te ofrece una gran libertad de movimiento.",
            categoria: "Accesorios",
            stock: "7",
            precio: 4999,
            img: "./assets/products/Walkman_WM1ZM2.png"
        },
        {
            id: 13,
            titulo: "MUC-S12SB1",
            subtitulo: "Conector estándar balanceado de 1,2 metros",
            descripcion: "Con el fin de garantizar un rendimiento óptimo, el cable de auriculares balanceado MUC-S12SB1 se ha diseñado en estrecha colaboración con Kimber Kable, aprovechando su tecnología de trenzado. El conductor de cobre sin oxígeno minimiza el deterioro del sonido y su longitud de 1.2m te ofrece una gran libertad de movimiento.",
            categoria: "Accesorios",
            stock: "10",
            precio: 3999,
            img: "./assets/products/Walkman_WM1ZM2.png"
        },
        {
            id: 14,
            titulo: "CAS-1B",
            subtitulo: "Sistema de audio de alta resolución con amplificador para jack 3.5",
            descripcion: "El sistema de audio CAS-1 cuenta con amplificadores dobles y altavoces independientes que recrean de forma precisa los espacios sonoros originales para una experiencia envolvente de audio de alta resolución a través de los altavoces o auriculares. También podrás disfrutar de una transmisión de audio mediante Bluetooth® de alta calidad desde tus dispositivos.",
            categoria: "Amplificadores",
            stock: "10",
            precio: 88999,
            img: "./assets/products/Walkman_WM1ZM2.png"
        },
        {
            id: 15,
            titulo: "WM1AM2",
            subtitulo: "The strong Walkman® digital multimedia player WM1AM2",
            descripcion: "Reproducción de sonido fidedign. La tecnología de amplificación digital S-Master™ HX de Walkman® es compatible con el formato DSD nativo y admite una salida equilibrada y de alta potencia. Reduce la distorsión y el ruido en varias frecuencias para un sonido rico y completo, que mejora aún más por la nueva soldadura sin plomo de alta calidad.",
            categoria: "Reproductores",
            stock: "3",
            precio: 569999,
            img: "./assets/products/Walkman_WM1ZM2.png"
        }
    ]

    const [products, setProducts] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve(api)
        })

        promesa.then((res) => {
            setProducts(res)
        })
        .catch((e) => {
            console.log(e)
        })
    }, [])

    return( 
        <div className="productos">
            {products.map((producto) => (
                <Item
                    id={producto.id}
                    titulo={producto.titulo}
                    subtitulo={producto.subtitulo}
                    descripcion={producto.descripcion}
                    categoria={producto.categoria}
                    stock={producto.stock}
                    precio={producto.precio}
                    img={producto.img}
                />
            ))}
        </div>
    )
}

export default ItemList