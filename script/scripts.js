//Inicio para Menu para mobile
const header = document.querySelector("header")

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
//Fim para Menu para mobile

//Inicio do Efeito Favo de mel background Hero
const heroSection = document.querySelector('.hero');
const honeycombContainer = document.createElement('div');
honeycombContainer.classList.add('honeycomb-background');
heroSection.appendChild(honeycombContainer);


function createHoneycombGrid() {

    honeycombContainer.innerHTML = '';


    const hexWidth = 100;
    const hexHeight = 110;
    const overlap = 32; 

    const rowHeight = hexHeight - overlap; 

    const rows = Math.ceil(window.innerHeight / rowHeight) + 1;
    const cols = Math.ceil(window.innerWidth / hexWidth) + 1;

    for (let i = 0; i < rows; i++) {
        const linha = document.createElement('div');
        linha.classList.add('linha');
        for (let j = 0; j < cols; j++) {
            const favo = document.createElement('div');
            favo.classList.add('favo');
            linha.appendChild(favo);
        }
        honeycombContainer.appendChild(linha);
    }
}

createHoneycombGrid();

window.addEventListener('resize', createHoneycombGrid);
//Fim do Efeito Favo de mel background Hero