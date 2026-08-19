// skrive en melding til console

// kolleksjons typer variabler

// 1. "Object":

let userPatryk = {
    name: "Patryk",
    location: "Porsgrunn",
    birthDate: 1980
}

let userBob = {
    name: "Bob",
    location: "Oslo",
    birthDate: 2002
}


let userAnna = {
    name: "Anna",
    location: "Tromsø",
    birthDate: 1999
}

function greet(userInfo) {
    // vi printer nå ut navn og sted
    // jeg ønsker også å printe ut alder 
    let userAge = 2026 - userInfo.birthDate

    console.log("Hi my name is " + userInfo.name + ", i am from " + userInfo.location + ". And i am " + userAge  + " years old")
}


greet(userPatryk)
greet(userBob)
greet(userAnna)

// for å oppsumere object:
// en object er en samling av "key, value" - pairs


// 2. Arrays (på norsk liste)

// a list of numbers
let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4; // osv...

// vi kan også lagre en liste type (array), på denne måten:
let myNumbers = [51, 22, 5819815,9,6,7]

console.log(myNumbers)

let user1 = "Patryk"
let user2 = "Hans"
let user3 = "Maria"
let user4 = "Hanna"

// samme men i et array...

// let users = ["Patryk", "Hans", "Maria", "Hanna"]

// console.log(users)

// an array does not have named keys, instead they have numbered indexes:

//console.log(users[0]) // gets the first value, arrays always start at 0

// print alle unntatt "Hans" (index 1)

// console.log()

//users[1] = undefined

//console.log(users)

// an array can also contain objects:
let users = [userPatryk, userAnna, userBob]