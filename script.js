// for å hente elementer i javascript...

let myElement = document.querySelector("h1") // samme som i css `h1 { kode }`


// for å endre på innholdet, eller stylen til elemented må vi bruke de innebygde verktøyene...

// 1. Endre tekst
// myElement.textContent = "test"

// 2. endre style (css)
// myElement.style = "color: red;" // css koden må da være inni "" (quotation marks)

// velge button og lagre i en variabel

let myButton = document.querySelector("button")

// 1. et lite oppdrag: Få konsollen til å si "button clicked" når vi klikker på knappen

// Først: sett myButton.onclick til en funksjon vi vil kjøre:
myButton.onclick = clickHandler

// og lag funksjonen vi skrev navnet på over:
function clickHandler() {
    console.log("button clicked")
}

// for å oppsummere klikk behandling: 
// 1. Velg element vi skal lage en klikk event for (f.eks: let myButton = document.querySelector("button"))
// 2. bruk .onclick og sett opp en egen funksjon som skal kjøres når klikk eventet skjer, f.eks: myButton.onclick = clickHandler
// 3. lag funskjonen vi oppgav etter = i forrige steg, f.eks: function clickHandler() { vår kode... }