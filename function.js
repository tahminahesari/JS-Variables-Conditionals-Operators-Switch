//Edhub Hoofdstuk 4
// function bereidGroente(groente) {
//     // 1. Was groente
//     // 2. Laat groenten uitlekken
//     // 3. Snij groente
//     return groente;
// }
// bereidGroente(tomaten);
// bereidGroente(sperziebonen);

// [x] Functies declareren
function congratulate() {
    console.log('Gefeliciteerd! 🎉');
}

function giveKisses() {
    console.log('Muah 💋');
}

// [x] Functies aanroepen
congratulate();
// doe dingen
congratulate();
// doe dinge
congratulate()
//doe dingen
giveKisses();

congratulateColleague('Marjan');
congratulateColleague('Mory');
congratulateColleague('Maidy');
congratulateColleague('Lina');


// [x] Functies met parameters
function congratulateColleague(name) {
    console.log('Gefeliciteerd ' + name + '! 🎉');
}

// [x] Return values

    // width: 4
    // length: 6
function area(width, length) {
    const outcome = width * length;

    return outcome;
}

const livingRoom = area(4, 6);
const kitchen = area(12,4);
const bathroom = area(4,12);

const houseDescription = 'De woonkamer is ' + livingRoom + ' m2, de keuken is ' + kitchen + ' m2 en de badkamer is ' + bathroom + ' m2';
console.log(houseDescription);

console.log(livingRoom);
console.log(kitchen);
console.log(bathroom);

// [x] Regular vs Arrow functions

function congratulate2() {
    console.log("Gefeliciteerd!");
}



//In een script kun je de functie zo vaak aanroepen als je wilt:
let name = "Henk";
console.log(name + " is 40 geworden.");
congratulate2();

name = "Piet";
console.log(name + " is 23 geworden.");
congratulate2();

// geeft:
// "Henk is 40 geworden."
// "Gefeliciteerd!"
// "Piet is 23 geworden."
// "Gefeliciteerd!"