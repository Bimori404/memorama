// array const de usuarios
const actual = [
    {
        nombre: 'Abel',
        imagen: '/media/actual/Abel_actual.jpeg'
    },
    {
        nombre: 'Chichajir',
        imagen: '/media/actual/Alfredo_Actual.jpg'
    },
    {
        nombre: 'Chikillo',
        imagen: '/media/actual/Chikiyo_Actual.jpg'
    },
    {
        nombre: 'Enrrique',
        imagen: '/media/actual/Enrrique_Actual.jpg'
    },
    {
        nombre: 'Ernesto',
        imagen: '/media/actual/Después Ernesto.jpg'
    },
    {
        nombre: 'Javier',
        imagen: '/media/actual/JavierAlvisoRivera_actual.jpg'
    },
    {
        nombre: 'Julio',
        imagen: '/media/actual/JULIO_actual.jpg'
    },
    {
        nombre: 'Kevin',
        imagen: '/media/actual/GilbertoKevinVazquezRivera_actual.jpg'
    },
    {
        nombre: 'Mario',
        imagen: '/media/actual/Mario Velázquez Meza _actual.jpg'
    },
    {
        nombre: 'Mejia',
        imagen: '/media/actual/Manuel_actual.jpeg'
    },
    {
        nombre: 'Miguel',
        imagen: '/media/actual/MiguelAngel_actual.jpg'
    },
    {
        nombre: 'Naida',
        imagen: '/media/actual/Naida_Actual.webp'
    },
    {
        nombre: 'Norberto',
        imagen: '/media/actual/Norberto_Actual.jpg'
    },
    {
        nombre: 'Ricardo',
        imagen: '/media/actual/RicardoPrieto_actual.jpg'
    },
    {
        nombre: 'Richard',
        imagen: '/media/actual/RICARDO_actual.jpg'
    },
    {
        nombre: 'Roman',
        imagen: '/media/actual/Soel Actual.jpg'
    },
    {
        nombre: 'Samuel',
        imagen: '/media/actual/JuanSamuelPérezGonzález_actual.jpg'
    },
    {
        nombre: 'Victor',
        imagen: '/media/actual/Victor_Actualidad.jpg'
    },
    {
        nombre: 'Yodaliz',
        imagen: '/media/actual/Cynthia_actual.JPG'
    },
];
const infancia = [
    {
        nombre: 'Abel',
        imagen: '/media/infancia/Abel_infancia.JPG'
    },
    {
        nombre: 'Chichajir',
        imagen: '/media/infancia/Alfredo_Infancia.jpg'
    },
    {
        nombre: 'Chikillo',
        imagen: '/media/infancia/Chikiyo_Infancia.jpg'
    },
    {
        nombre: 'Enrrique',
        imagen: '/media/infancia/Enrrique_Infancia.jpg'
    },
    {
        nombre: 'Ernesto',
        imagen: '/media/infancia/Antes Ernesto.jpg'
    },
    {
        nombre: 'Javier',
        imagen: '/media/infancia/JavierAlvisoRivera_infancia.jpg'
    },
    {
        nombre: 'Julio',
        imagen: '/media/infancia/JULIO_infancia.jpg'
    },
    {
        nombre: 'Kevin',
        imagen: '/media/infancia/GilbertoKevinVazquezRivera_infancia.jpg'
    },
    {
        nombre: 'Mario',
        imagen: '/media/infancia/Mario Velázquez Meza _infancia .jpg'
    },
    {
        nombre: 'Mejia',
        imagen: '/media/infancia/Manuel_infancia.jpeg'
    },
    {
        nombre: 'Miguel',
        imagen: '/media/infancia/MiguelAngel_infancia.jpeg'
    },
    {
        nombre: 'Naida',
        imagen: '/media/infancia/Naida_Infancia.jpg'
    },
    {
        nombre: 'Norberto',
        imagen: '/media/infancia/Norberto_Infancia.jpg'
    },
    {
        nombre: 'Ricardo',
        imagen: '/media/infancia/RicardoPrieto_infancia.jpg'
    },
    {
        nombre: 'Richard',
        imagen: '/media/infancia/RICARDO_infancia.jpg'
    },
    {
        nombre: 'Roman',
        imagen: '/media/infancia/Soel infancia.jpg'
    },
    {
        nombre: 'Samuel',
        imagen: '/media/infancia/JuanSamuelPérezGonzález_infancia.jpg'
    },
    {
        nombre: 'Victor',
        imagen: '/media/infancia/Victor_infancia.jpg'
    },
    {
        nombre: 'Yodaliz',
        imagen: '/media/infancia/Cynthia_infancia .JPG'
    },
];

// duplica las cartas
const cartas = [...actual, ...infancia];

// shuffle del array de cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// crea las cartas
function crearCartas() {
    const container = document.querySelector('.container');
    shuffle(cartas).forEach((carta, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = index;
        const frontFace = document.createElement('div');
        frontFace.classList.add('card__face', 'card__face--front');
        const backFace = document.createElement('div');
        backFace.classList.add('card__face', 'card__face--back');
        const img = document.createElement('img');
        img.src = carta.imagen;
        backFace.appendChild(img);
        // nombre del usuario a la cara frontal
        const name = document.createElement('p');
        // name.textContent = carta.nombre;
        name.textContent = "?";
        frontFace.appendChild(name);
        // 
        card.appendChild(frontFace);
        card.appendChild(backFace);
        container.appendChild(card);
    });
}

crearCartas();

// logica
// let puntos = 30;
let puntos = 30;
let seleccionadas = [];

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if (seleccionadas.length < 2 && !card.classList.contains('is-flipped')) {
            card.classList.add('is-flipped');
            seleccionadas.push(card);
            if (seleccionadas.length === 2) {
                const carta1 = seleccionadas[0].dataset.id;
                const carta2 = seleccionadas[1].dataset.id;
                if (cartas[carta1].nombre === cartas[carta2].nombre) {
                    puntos++;
                    document.getElementById('lpun').textContent = `Puntos: ${puntos}`;
                    seleccionadas = [];
                } else {
                    setTimeout(() => {
                        seleccionadas.forEach(card => card.classList.remove('is-flipped'));
                        seleccionadas = [];
                        // puntos--;
                        // document.getElementById('lpun').textContent = `Puntos: ${puntos}`;
                    }, 1000);
                }
            }
        }
    });
});