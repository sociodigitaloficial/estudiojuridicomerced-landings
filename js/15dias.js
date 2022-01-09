upCarousel()

function upCarousel(){

    let promotion = [
        {
            image: '../assets/images/online.jpg',
            alt: 'estudio-juridico-merced-online',
            subtitle: 'SOLO EN 15 DÍAS',
            paragraph:'Regido bajo la <b>LEY TRANSITORIA</b>, número 21.384, al artículo 4° se agregó el artículo 64 bis.',
        },
        {
            image: '../assets/images/dinero.jpg',
            alt: 'estudio-juridico-merced-precio',
            subtitle: 'SOLO A $100.000',
            paragraph:'Ofrecemos el divorcio <b>MÁS ECONÓMICO</b> del mercado, no encontrarás un precio similar.',
        },
        {
            image: '../assets/images/audiencia.jpg',
            alt: 'estudio-juridico-merced-audiencias',
            subtitle: 'SIN AUDIENCIAS',
            paragraph:'Evitamos que asistas a las <b>MOLESTIAS AUDIENCIAS</b> con tu ex-pareja u otro abogado.',
        },
        {
            image: '../assets/images/tramite.jpg',
            alt: 'estudio-juridico-merced-tramites',
            subtitle: 'SIN TRÁMITES',
            paragraph:'Nos encargamos de realizar <b>TODOS LOS PROCESOS</b> para que no pierdas tu tiempo en trámites.',
        }
    ]

    let product = [
        {
            image: '../assets/images/handshake.png',
            alt: 'estudio-juridico-merced-mutuo',
            subtitle: 'DIVORCIO MUTUO ACUERDO',
            paragraph:'Es uno de los divorcios más fáciles y rápidos, donde el único desafío se encuentra en que ambos estén de acuerdo con realizarlo. <b>PAGA SOLO $100.000 POR TU DIVORCIO</b>.',
        },
        {
            image: '../assets/images/contract.png',
            alt: 'estudio-juridico-merced-unilateral',
            subtitle: 'DIVORCIO UNILATERAL',
            paragraph:'Este procede sólo cuando uno de los cónyuges quiere divorciarse, caso en el cual deberá demandar al otro para poder lograrlo. <b>CONSULTA POR LOS REQUISITOS Y VALORES ESPECIALES</b>.',
        },
        {
            image: '../assets/images/anger.png',
            alt: 'estudio-juridico-merced-culposo',
            subtitle: 'DIVORCIO CULPOSO',
            paragraph:'Es el tipo de divorcio que ocurre cuando una de las partes que compone el matrimonio falta a los compromisos básicos de éste. <b>CONSULTA POR LAS CAUSALES Y OFERTAS ESPECIALES</b>.',
        },
        {
            image: '../assets/images/case.png',
            alt: 'estudio-juridico-merced-otros',
            subtitle: 'TEMAS RELACIONADOS',
            paragraph:'Cada divorcio posee aristas a tratar, como las pruebas del cese de convivencia, el cálculo de la compensación económica, etc. <b>RESPONDEMOS CONSULTAS GENERALES TAMBIÉN</b>.',
        }
    ]

    let eficiency = [
        {
            image: '../assets/images/motivo1.png',
            alt: 'estudio-juridico-merced-motivo1',
            subtitle: null,
            paragraph:'Porque <b>TE CONOCEMOS</b>, hemos asesorado a cientos de personas como tú y sabemos exactamente cómo te podemos ayudar con tu divorcio.',
        },
        {
            image: '../assets/images/motivo2.png',
            alt: 'estudio-juridico-merced-motivo2',
            subtitle: null,
            paragraph:'Porque <b>ERES IMPORTANTE</b> para nosotros, nuestro servicio es personalizado, con atención 24/7, siempre disponible a resolver tus dudas.',
        },
        {
            image: '../assets/images/motivo3.png',
            alt: 'estudio-juridico-merced-motivo3',
            subtitle: null,
            paragraph:'Porque te <b>INFORMAMOS</b> y <b>ACOMPAÑAMOS</b> en todo el proceso, sabemos que un divorcio no es agradable y que no deseas trámites molestos.',
        },
        {
            image: '../assets/images/motivo4.png',
            alt: 'estudio-juridico-merced-motivo4',
            subtitle: null,
            paragraph:'Porque somos <b>EXPERTOS</b>, conocemos todos los trámites necesarios e incluso varios de ellos son cubiertos por el valor de los honorarios, ¡asesórate!.',
        }
    ]

    createCarousel('promotion', promotion, 'icon')
    createCarousel('product', product, 'icon')
    createCarousel('eficiency', eficiency, 'icon')
}