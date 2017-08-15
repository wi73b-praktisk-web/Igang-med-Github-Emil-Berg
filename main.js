console.log('Github');
console.log('Forked');
var tal = 12;
console.log(tal);
var array = ["Red","Green","Sort","Gul"];
//array.toString();
console.log(array[1]);
var navn = "Emil";
var alder = 17;
var tekst = `Mit navn er ${navn} og jeg er ${alder} år gammel`;

var moms = 1.25;
var pris_uden_moms = 400;
var pris_med_moms = moms * pris_uden_moms;
console.log(pris_med_moms);
var pris_uden_moms2 = pris_med_moms / moms;
console.log(pris_uden_moms2);
console.log(tekst);
var personer = [
    ["Emil", "Berg"],
    ["Kasper", "Rasmussen"],
    ["Jon", "Madely"]
]
console.log(personer);

var forste = 10
var anden = 20
var backup
backup = forste
forste = anden;
anden = backup;
console.log(forste);
console.log(anden);