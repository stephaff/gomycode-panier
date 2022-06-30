let boutonMoins = document.querySelectorAll('.btn-moins');

for(let i=0; i < boutonMoins.length; i++){
    boutonMoins[i].addEventListener('click', quantiteMoins);
}   

function quantiteMoins(){
    if(parseInt(this.nextElementSibling.innerHTML) > 0){
        this.nextElementSibling.innerHTML = parseInt(this.nextElementSibling.innerHTML)-1;
        let totalArticle = this.parentElement.nextElementSibling.nextElementSibling;
        totalArticle.innerHTML = parseInt(this.nextElementSibling.innerHTML)*parseInt(this.parentElement.nextElementSibling.innerHTML);
        total();
    }
}

let boutonPlus = document.querySelectorAll('.btn-plus');

for(let i=0; i < boutonMoins.length; i++){
    boutonPlus[i].addEventListener('click', quantitePlus);
} 

function quantitePlus(){
        this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.innerHTML)+1;
        let totalArticle = this.parentElement.nextElementSibling.nextElementSibling;
        totalArticle.innerHTML = parseInt(this.previousElementSibling.innerHTML)*parseInt(this.parentElement.nextElementSibling.innerHTML);
        total();
}

let corbeille = document.querySelectorAll('.corbeille');

for(let i=0; i<corbeille.length; i++){
    corbeille[i].addEventListener('click', supprimer);
}

function supprimer(){
    this.parentElement.parentElement.remove();
    total();
}


function total(){
    let total = document.querySelector('.command-total');
    let sousTotal = document.querySelectorAll('.article-price-commande');
    let somme = 0;
    for(let i=0; i<sousTotal.length; i++){
        somme =somme + parseInt(sousTotal[i].innerHTML);
    }
    total.innerHTML = somme;
}


