/*Case sensitive = reconhece letras maiúsculas e minúsculas

por Tag: getElementTagName()
por ID: getElementById()
por Name: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() - usaremos mais

melhor prática pra acessar o DOM pelo JS
*/
let  nome = window.document.getElementById ('nome')
/*ATENÇÃO AO DETALHE: AO USAR querySelector chamar sempre com #variavel*/
let email = window.document.querySelector ('#email')
let assunto = window.document.querySelector ('#assunto')
/*Exemplo de acesso ao DOM*/
nome.style.width = '90%'
email.style.width = '90%'



