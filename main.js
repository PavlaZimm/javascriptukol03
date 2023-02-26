// tady je místo pro náš program

// let vysledek = document.querySelector ('.vysledekZavodu')
//const start = 15
//const delka = prompt('Zadej délku závodu:')
//const konec = (start + delka) % 24
//vysledek.innerHTML = konec


let nadpis = document.querySelector ('.jmeno')
let vstupUzivatel = prompt('zadej Jméno a Přijmení:')
nadpis.innerHTML = vstupUzivatel

let cislo = document.querySelector ('.veku')
const rok = 2023
let vstupUzivatele = prompt('zadej rok narození:')
const vysledek =  (rok - vstupUzivatele) % 24
cislo.innerHTML = vstupUzivatele