window.onload = () => {
    
    crearNoticias();
    
}

function crearNoticias () {
    noticias.forEach(noticia => {
        renderizarNotica(noticia)
    }) 
}

function renderizarNoticias (noticia) {
    const template = `
        <li class="noticita">
            <h2>${noticia.nombre}</h2>
            <img src='${noticia.imagen}' alt='${noticia.alt}'>
        </li>
        `;
        const contenedorNoticias = document.querySelector('ul.noticias');
        contenedorNoticias.innerHTML += template;
}

const noticias = [
    {titulo:'Un adolescente encontró el DNI y el celular de uno de los hermanos Álvarez, desaparecidos hace 10 días',
     imagen: './img/noticia1.jpg',
     alt:'KEVIN Y FRANCO ÁLVAREZ, LOS HERMANOS DESAPARECIDOS'
    },
    {titulo:'Caso Bento: una imputada que pagó 40 mil dólares está prófuga en Chile y pide su libertad',
     imagen: './img/noticia2.jpg',
     alt:'LA INVESTIGACIÓN POR LAS PRESUNTAS COIMAS EN LOS TRIBUNALES FEDERALES SIGUE AVANZANDO.'
    },
    {titulo:'Imposible no soñar en grande: Gimnasia y Esgrima es único puntero en la Primera Nacional',
     imagen: './img/noticia3.jpeg',
     alt:'UN PRIMER TIEMPO MUY PAREJO ENTRE BELGRANO DE CÓRDOBA Y GIMNASIA.'
    },
    {titulo:'Anuncian el regreso de billetes con próceres y confirman que el general Güemes integrará la serie',
     imagen: './img/noticia4.jpg',
     alt:'EL PRESIDENTE DE LA NACIÓN CONFIRMÓ EL REGRESO DE LOS BILLETES CON PRÓCERES Y ANUNCIÓ QUE GÜEMES ESTARÁ EN LA SERIE.'
    },
    {titulo:'Congelarán tarifas de luz, gas y combustibles hasta fin de año',
     imagen: './img/noticia5.jpg',
     alt:'CONFIRMAN EL CONGELAMIENTO DE LAS TARIFAS POR EL SEGUNDO SEMESTRE'
    },
    {titulo:'Equipo (casi) confirmado: así formaría la Selección Argentina este viernes ante Uruguay por la Copa',
     imagen: './img/noticia6.jpg',
     alt:'LA FORMACIÓN CON LA QUE ARGENTINA ENFRENTÓ A CHILE EN EL DEBUT DE LA COPA AMÉRICA. ANTE URUGUAY, AL MENOS UN CAMBIO (AP)'
    },
];