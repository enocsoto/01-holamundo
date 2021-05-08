console.log("inicio de programa");

setTimeout(() => {
    console.log("Primer TimeOUT");
}, 3000);
setTimeout(() => {
    console.log("Segundo  TimeOUT");
}, 0);
setTimeout(() => {
    console.log("Tercer  TimeOUT");
}, 0);

console.log("fin de programa");