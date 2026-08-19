// velg element basert på id -- da bruker vi #navnpåid, f.eks:

let switchValueElement = document.querySelector("#switch-value");

let textParagraphElement = document.querySelector("#some-text")


// store switch (true of false) value in a variable:
let switchValue = false

// switchValueElement.textContent = counter


// lag funksjon som skal kjøre onclick...
function toggleSwitch() 
{

    if (switchValue == false) { // koden under denne klammen kjører bare hvis switchValue er false
        switchValue = true
        switchValueElement.textContent = "On"

        textParagraphElement.style = "display: block;"
    } 
    else { // koden under denne klammen kjører bare hvis if-betingelse over ikke kjørte
        switchValue = false
        switchValueElement.textContent = "Off"

        textParagraphElement.style = "display: none;"
    }

}

// hent knappen:
let buttonToggle = document.querySelector("#button-toggle-switch")
// sett opp onclick event til å bruke vår toggleSwitch funksjon:
buttonToggle.onclick = toggleSwitch
