/* 

*/

let temperture = 2 // celcius temperature

// hvis det er mindre enn 10 grader: si "Det er kaldt!"
// dersom det er mer enn 10 men mindre enn 20: "Det er litt kaldt."
// dersom det er mer enn 20 men mindre enn 25: "Det akkurat passlig varmt"
// dersom det er mer enn 25 si: "Det er veldig varmt!"

if (temperture < 10) {
    console.log("Det er kaldt!")
}
else if (temperture > 10 && temperture < 20) {
    console.log("det er litt kaldt.")
}
else if (temperture > 20 && temperture < 25) {
    console.log("det er akkurat passelig varmt")
}
else {
    console.log("Det er veldig varmt!")
}