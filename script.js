/*Tarification des billets : écrivez un programme qui invite l'utilisateur à saisir son âge,
 puis détermine le prix d'un billet de cinéma en fonction des critères suivants :

Enfants (âge <= 12) : 10 $
Adolescents (13-17 ans) : 15 $
Adultes (âge >= 18) : 20 $*/

// Demander à l'utilisateur de saisir son âge
const age = parseInt(prompt("Veuillez saisir votre âge :"));

// Déterminer le prix du billet en fonction de l'âge
let prixBillet;
if (age <= 12) {
    prixBillet = 10;
} else if (age >= 13 && age <= 17) {
    prixBillet = 15;
} else {
    prixBillet = 20;
}

// Afficher le prix du billet en fonction de l'âge
console.log(`Le prix du billet pour une personne de ${age} ans est de ${prixBillet} $.`);


/* Développez un programme qui demande à l'utilisateur la température actuelle et s'il pleut ou non. 
Sur la base de ces informations, conseiller l'utilisateur sur les vêtements à porter.*/
// Demander à l'utilisateur la température actuelle et s'il pleut ou non
const temperature = parseInt(prompt("Quelle est la température actuelle en degrés Celsius ?"));
const isRaining = prompt("Est-ce qu'il pleut actuellement ? (Oui/Non)").toLowerCase();

// Conseiller sur les vêtements à porter en fonction de la température et s'il pleut
if (temperature < 10) {
    if (isRaining === 'oui') {
        console.log("Il fait froid et il pleut. Il est recommandé de porter un manteau imperméable et des bottes.");
    } else {
        console.log("Il fait froid mais il ne pleut pas. Vous pouvez porter un manteau chaud et une écharpe.");
    }
} else if (temperature >= 10 && temperature < 20) {
    if (isRaining === 'oui') {
        console.log("La température est modérée et il pleut. Optez pour une veste légère et des chaussures imperméables.");
    } else {
        console.log("La température est modérée et il ne pleut pas. Une veste légère suffira.");
    }
} else {
    if (isRaining === 'oui') {
        console.log("Il fait chaud mais il pleut. Préférez un imperméable léger et des sandales.");
    } else {
        console.log("Il fait chaud et sec. Vous pouvez porter des vêtements légers et des chaussures confortables.");
    }
}


/*Palindrome Checker : créez une fonction récursive pour vérifier si une chaîne donnée est un palindrome 
(lit la même chose vers l'avant et vers l'arrière), en ignorant les espaces, la ponctuation et les majuscules.*/

// Fonction récursive pour vérifier si une chaîne est un palindrome
function isPalindrome(str) {
    // Convertir la chaîne en minuscules et enlever les espaces et la ponctuation
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Cas de base : si la longueur de la chaîne est 0 ou 1, c'est un palindrome
    if (cleanStr.length <= 1) {
        return true;
    }

    // Vérifier si le premier et dernier caractère sont les mêmes
    if (cleanStr[0] === cleanStr[cleanStr.length - 1]) {
        // Appeler récursivement la fonction avec la sous-chaîne
        return isPalindrome(cleanStr.substring(1, cleanStr.length - 1));
    } else {
        return false;
    }
}

// Tester la fonction avec une chaîne
const testString = "A man, a plan, a canal, Panama";
if (isPalindrome(testString)) {
    console.log(`La chaîne "${testString}" est un palindrome.`);
} else {
    console.log(`La chaîne "${testString}" n'est pas un palindrome.`);
}

/*Fonction puissance : Écrivez une fonction récursive pour calculer le résultat
 de l’élévation d’un nombre à une puissance donnée.*/

 // Fonction récursive pour calculer la puissance d'un nombre
function power(base, exponent) {
    // Cas de base : si l'exposant est 0, retourne 1
    if (exponent === 0) {
        return 1;
    } 
    // Cas récursif : multiplie la base par le résultat de la fonction avec un exposant plus petit
    else {
        return base * power(base, exponent - 1);
    }
}

// Tester la fonction avec un exemple
const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base} élevé à la puissance ${exponent} est égal à ${result}.`);