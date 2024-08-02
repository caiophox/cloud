const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = 'Bem-vindo ao Projeto com JavaScript';
link.innerText = 'Visite Prozeducacao';

listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
    <li><a href="https://wikipedia.org" target="_blank">Wikipedia</a></li>
`;
