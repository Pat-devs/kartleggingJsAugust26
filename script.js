// velg element basert på id -- da bruker vi #navnpåid, f.eks:

let counterValueElement = document.querySelector("#counter-value");


// store counter value (number) in a variable:
let counter = 0

counterValueElement.textContent = counter


// lag funksjon som skal kjøre onclick...

function incrementCounter() 
{
    counter = counter + 1 // I. increment the counter
    counterValueElement.textContent = counter // II. update the counter on the page
}

// hent knappen:
let buttonIncrementCount = document.querySelector("#button-increment-count")
// sett opp onclick event til å bruke vår incrementCounter funksjon:
buttonIncrementCount.onclick = incrementCounter