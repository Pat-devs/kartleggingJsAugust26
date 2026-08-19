// velg element basert på id -- da bruker vi #navnpåid, f.eks:

// <p id="switch-value">Off</p>
// <button id="button-toggle-switch">On/off</button>

let switchValueElement = document.querySelector("#switch-value");

// store counter value (number) in a variable:
let switchValue = false

// switchValueElement.textContent = counter


// lag funksjon som skal kjøre onclick...
function toggleSwitch() 
{

    if (switchValue == false) { // koden under denne klammen kjører bare hvis switchValue er false
        switchValue = true
        switchValueElement.textContent = "On"
    } 
    else { // koden under denne klammen kjører bare hvis if-betingelse over ikke kjørte
        switchValue = false
        switchValueElement.textContent = "Off"
    }

}

// hent knappen:
let buttonToggle = document.querySelector("#button-toggle-switch")
// sett opp onclick event til å bruke vår toggleSwitch funksjon:
buttonToggle.onclick = toggleSwitch
