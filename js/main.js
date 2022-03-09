/* Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
trasformare la stringa foto in una immagine effettiva
BONUS 2:
organizzare i singoli membri in card/schede
*/


const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


//? sconponiamo il for in in una funzione per creare più card nuove
// | occhio alle classi boostrap

function createCard(mate) {
    const card = document.createElement('div');
    card.classList.add('col');

    const cardElements = document.createElement('div');
    cardElements.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = `img/${mate.image}`;
    img.alt = `photo of ${mate.name}`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-center');


    const name = document.createElement('h4');
    const role = document.createElement('p');

    card.appendChild(cardElements);
    cardElements.appendChild(img);
    cardElements.appendChild(cardBody);
    cardBody.appendChild(name);
    cardBody.appendChild(role);

    name.innerHTML = mate.name;
    role.innerHTML = mate.role;
    return card;
}

//? mi gnero le carte con un ciclo for
const container = document.querySelector('#team-card');

function generateCard() {
    for (let i = 0; i < team.length; i++) {
        const card = createCard(team[i]);
        container.appendChild(card);
    };
}

generateCard();
