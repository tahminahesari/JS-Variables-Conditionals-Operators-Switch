console.log("Jippie!");
console.log("Ik zie dat je de console.log functie aan het uitproberen bent!");
console.log("Zal ik een figuurtje voor je maken?");
console.log("1, 2, 3...")
console.log("*****");
console.log(" ***");
console.log("  *");
console.log("  *");
console.log("  *");
console.log("  *");
console.log("  *");

const school = "Novi Hogeschool";
console.log(school);

let counter = 0;
console.log(counter);
// voer wat dingen uit
counter = 1;
console.log(counter);
// voer wat dingen uit
counter = 2;
console.log(counter);

const ruleSetOptions  = 4;
const rulesSetOptions = 2;

const houseNumber = 12;
const street = "Prinsenlaan";
const address = street + houseNumber;
console.log(address);

const score1 = "zeven"
const score2 = "vier";
const total = score1 * score2;
console.log(total);


//2.7 Beslissingsstructuren
const grade1 = 5;
if (grade1 >= 5.5) {
    // het eerste block word uitgevoerd als de conditie true is
    console.log("Je hebt het gehaald!");
} else {
    // het tweede blok wordt uitgevoerd als de conditie false is
    console.log("Je hebt het niet gehaald");
}
// code gaat hier weer verder



const recipe = "Cannelloni";
if (recipe !== undefined) { // als recipe al toegewezen is
    console.log("Vandaag maken we het recept: " + recipe);
} else {
 console.log( "Spinazie lasagne"); // en anders... wijs recipe toe

}

const grade = 4;
const isPassed = grade >= 5.5;  // geeft false

console.log("Student passed: " + isPassed) // geeft "Student passed: false"

const fruit = "Appels";

switch (fruit) {
    case 'Bananen':
        console.log('Het zijn bananen!');
        break;
    case 'Appels':
        console.log('Het zijn appels!');
        break;
    case 'Citroenen':
        console.log('Het zijn citroenen!');
        break;
    default:
        console.log('Er is geen vrucht gekozen');
}

// const browser = 'Chrome';
//
// switch (browser) {
//     case 'Edge':
//         console.log('Gelukkig gebruik je geen Internet Explorer meer!');
//         break;
//
//     case 'Chrome':
//         console.log('Deze browser wordt ondersteund!');
//         break;
//     case 'Firefox':
//         console.log('Deze browser wordt ondersteund!');
//         break;
//     case 'Safari':
//         console.log('Deze browser wordt ondersteund!');
//         break;
//     case 'Opera':
//         console.log('Deze browser wordt ondersteund!');
//         break;
//
//     default:
//         console.log('Hmmm... Hopelijk ziet de pagina er nog ok uit.');
// }

const browser = 'Chrome';

switch (browser) {
    case 'Edge':
        console.log('Gelukkig gebruik je geen Internet Explorer meer!');
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Deze browser wordt ondersteund!');
        break;

    default:
        console.log('Hmmm... Hopelijk ziet de pagina er nog ok uit.');
}