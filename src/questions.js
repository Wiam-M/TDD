/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function(text){
    return text.length;
}
//Concatener deux chaines de caractères
// var concatenate = function(){
//     let a  = "Salut";
//     let b = "Emma";
//     return resultAttendu = a + " " + b;
// }

var concatenate = function(a, b){
  
    return a + " " + b;
}
//Remplacer le premier e d\'une chaine par un espace
var spaceString = function(replaceE){
    return replaceE.replace('e', ' ');
}

//Afficher le cinquième caractère d\'une chaine
var fifthCharacter = function(stringCharacter){
    return stringCharacter.charAt(4);
}

//Afficher les 9 premiers caractères d\'une chaîne de caractère
var displayNinthCharacter = function(x){
    return x.substr(0, 9);
}

//Mettre en majuscule la chaine
var capitalize = function(upperString){
    return upperString.toUpperCase();
}
//Mettre en minuscule la chaine
var lowerCaseString = function(lowerString){
    return lowerString.toLowerCase();
}
//Supprimer les espaces avant et après la chaine
var whiteSpace = function(space){
    return space.trim();
}
//Afficher true si le parametre d\'entrée de la fonction est de type string
var functionParameter = function(string){
    if( typeof string === 'string'){
        return true;
    }
}
//Afficher l\'extension du fichier
var fileExtention = function(file){
    return file.split('.').pop();
}
//Compter le nombre d\'espace dans la chaine
var compterEspace = function(space){
    return space.split(' ').length -1
}
//Inverser une chaine de caractères
var reverseString = function(string){
    return string.split('').reverse().join('');
}



// split(): cette méthode divisera la chaîne en un tableau de caractères.
// reverse(): cette méthode inverse tous les éléments d’un tableau.
// join(): Cette méthode joint tous les éléments du tableau pour créer une chaîne de caractères.