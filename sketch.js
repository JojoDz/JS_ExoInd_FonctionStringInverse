let s = "Salut toi !";

function solution(str){
       console.log(str);
       return s.split("").reverse().join("");
}

console.log(solution(s))



// Rappel : 
// //création d'une constante nommée 'string'
// const string = "Hello les gens";
// //afficher dans la console le contenu de 'string'
// // console.log(string);
// //appliquer méthode'split' sur 'string': renvoi la châine de caractère dans un tableau avec un index 0 dans notre cas
// console.log(string.split());


// //un tableau avec 3 index - chacun est un mot
// const array = ['Hello', 'les', 'gens'];
// //méthode 'reverse': renverse tous les index du tableau (0,1,2 -> 2,1,0)
// console.log(array.reverse());

// //méthode 'join' : réunir tous les éléments d'1 tableau et créer une chaîne de caractères; les index sont séparés par une virgule (gens,les,Hello)
// console.log(array.reverse().join());

// //création de la fonction avec pour argument la chaîne de caractère
// function reverseString(str) {
//     console.log(str.split('').reverse().join(''));
// }
// //chaine de caractère dans une constante : 
// const string = "Hello les gens";
// //appeler la fonction
// reverseString(string);


