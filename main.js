// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console
let exo1 = document.querySelector('#content')
console.log(exo1)

// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console
let exo2 = document.querySelectorAll('#content')
console.log(exo2)
// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console
let exo3 = document.querySelector('li.important')
console.log(exo3)

// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console
let exo4 = document.querySelectorAll('.important')
console.log(exo4)

// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 
let li_list = document.querySelectorAll('li')
li_list.forEach(e => {
    let intoSTR = e.innerText
    console.log(intoSTR.substr(0,intoSTR.length-1)+intoSTR.charAt(intoSTR.length-1).toUpperCase())
});

// ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName
let exo6 = document.getElementById(content).getElementsByClassName(grandParagraphe)
console.log(exo6)