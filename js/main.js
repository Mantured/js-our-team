
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

//? metodo richiesto con stampa su console e su DOM aggiunta immagine
/* for (let x = 0; x < team.length; x++) {
    document.getElementById("team-card").innerHTML += (`
    <div class="col-4">
        <div class="card">
        <img src="img/${team[x].image}" class="card-img-top" alt="profile photo of ${team[x].name} ">
        <div class="card-body text-center">
            <h4 class="card-text">${team[x].name}</h4>
            <p class="card-text">${team[x].role}</p>
        </div>
    </div>`);
    console.log(team[x]);
} */

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


document.querySelector('button').addEventListener('click', function () {

    const newMate = document.getElementById('name-mate');
    const newMateRole = document.getElementById('role-mate');
    const newImgMate = document.getElementById('img-mate');

    const newMember = {
        name: newMate.value,
        role: newMateRole.value,
        image: newImgMate.value,
    }
    console.log(newMate);
    console.log(newMateRole);
    console.log(newImgMate);

    console.log(team);

    team.push(newMember);

    newMate.value = "";
    newMateRole.value = "";
    newImgMate.value = "";

    generateCard();


})

const container = document.querySelector('#team-card');

//? mi gnero le carte con un ciclo for
function generateCard() {
    container.innerHTML = ""; //? altrimenti me ne stamperebbe 2 volte
    for (let i = 0; i < team.length; i++) {
        const card = createCard(team[i]);
        container.appendChild(card);
    };
}
generateCard();




