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


for (let x in team) {
    document.getElementById("my-card-team").innerHTML = (`
    <div class="col-4">
        <div class="card">
        <img src="img/${team[x].image}" class="card-img-top" alt="photo of Wayne Barnett">
        <div class="card-body text-center">
            <h4 class="card-text">${team[x].name}</h4>
            <p class="card-text">${team[x].role}</p>
        </div>
    </div>`);
    console.log(team[x]);
}


