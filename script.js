/* 

*/

let hour = 2 // 0 til 24

//  hvis hour er mellom kl 5 og kl 11: si "Good morning"
//  hvis hour er mellom kl 12 og kl 16: si "Good afternoon"
//  hvis hour er mellom kl 17 og kl 22: si "Good evening"
// i alle andre tilfeller si bare "Good night"

if (hour >= 5 && hour <= 11) {
    console.log("Good morning")
}
else if (hour >= 12 && hour <= 16) {
    console.log("Good afternoon")
}
else if (hour >= 17 && hour <= 22) {
    console.log("Good evening")
}
else {
    console.log("good night?")
}