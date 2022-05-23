// JavaScript Document
console.log("Howdy!");


var stuurWiel = document.querySelector("button img"); 
var mickeyTekst= document.querySelector("section p");
var mickeyTitel = document.querySelector("section h3");

var klaarMetDraaien = true;

stuurWiel.addEventListener("click", startDraaien);

document.body.onkeyup = function(e) {
    if (e.code == "Tab" ||
        e.code == "Space" ||
        e.code == "Enter" 
    ) {
      startDraaien();
    }
  }
//   https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar

// Als wiel niet klaar is met draaien, stopt de functie met verdergaan. 
// Als je dus bijvoorbeeld 3x op het wiel klikt, krijg je nog steeds maar 1 mickey te zien.
// Als je wel klaar bent met draaien en op het wiel drukt dan ga je beginnen met draaien en
// roep je de functie toonmMickey op.
function startDraaien() {

    if (!klaarMetDraaien)
        return;

    klaarMetDraaien = false;

    stuurWiel.classList.add("draaien");
    toonMickey();

    // console.log(mickeyNummer);
}

var mickey = document.querySelector("main section img");
var mickeyCollectie = ["Mickey.01.png", "Mickey.02.png", "Mickey.03.png", "Mickey.04.png", "Mickey.05.png", "Mickey.06.png", "Mickey.07.png"];
var mickeyTekstCollectie = ["Mickey's first appearance in the short 'plane crazy'. Mortimer mouse had been Walt Disney original name for the character before his wife convinced him to change it.", 
"Redesigned to look cuter and more appealing to the audience. This version of mickey first appeared in 'steamboat willie'. It's release date is celebrated as mickey's birthday.",
"Mickey is now in color! After the short film the band concert. His old pals Donald duck and goofy accompanied him more often, forming the famous comic trio.",
"He is now given white eyes with pupils. A Caucasian skin colored face and more realistic ears that change with perspective. His body becomes thinner and more flexible and in some animated features he appeared without tail.",
"Due to his rising popularity, he became a daily children's tv persona in 'mickey mouse club'. A live -action Disney show that ran from 1955 to 1996. The most noticeable feature of this design are the eyebrows.",
"In fact. It was first shown in 1939 animated short 'the pointer'. But is most famous for appearing in the character's first full-length film 'fantasia' in 1940. It was temporary replaced by the two previous designs but returned in 'mickey's Christmas carol', 1983.",
"Since June 28, 2013, Disney channel has been airing new 3-minute mickey mouse short's. The newest design combines elements of mickey's 30's look with a contemporary twist."];
var mickeyTitelCollectie = ["MICKEY 1928 - (1/7)", "MICKEY 1928 - (2/7)", "MICKEY 1935 - (3/7)", "MICKEY 1941 - (4/7)", "MICKEY 1953 - (5/7)", "MICKEY 1983 - (6/7)", "MICKEY 2013 - (7/7)"];

var mickeyNummer = 0;

// Zodra deze functie wordt opgeroepen beginnen we een timeout. Nadat die timeout klaar wordt de volgende
// Mickey uit de collectie opgeroepen en vervangt de oude Mickey. Het zelfde geldt voor de titel en tekst.
// Ik laat ook nog Mickey beginnen met springen en start een timeout. Nadat die timeout klaar is wordt de variable
// klaarMetDraaien op true gezet.
function toonMickey() {

setTimeout(function() {
        stuurWiel.classList.remove("draaien");
        mickeyNummer += 1;
        if (mickeyNummer >= mickeyCollectie.length) mickeyNummer=0;
        mickey.src="./images/" + mickeyCollectie[mickeyNummer];
        mickeyTekst.textContent = mickeyTekstCollectie[mickeyNummer];
        mickeyTitel.textContent = mickeyTitelCollectie[mickeyNummer];

        mickey.classList.add("springen");

        setTimeout(function() {
            mickey.classList.remove("springen");
    
            klaarMetDraaien = true;
        }, 750);
    }, 2000);
}

// var mickey_nummer = 1;
// function toonVolgendeMickey() {
//     if (mickey_nummer == 10) {
//         mickey_nummer = 0;
//     }
//     mickey_nummer = mickey_nummer + 1;
//     toonMickey(mickey_nummer);
// }

// function toonMickey( nummer ) {
//    // console.log(nummer);
//    document.getElementById("mickey1").style.display="none";
//    document.getElementById("tekst1").style.display="none";

//    document.getElementById("mickey2").style.display="none";
//    document.getElementById("tekst2").style.display="none";

//    document.getElementById("mickey3").style.display="none";
//    document.getElementById("tekst3").style.display="none";

//    document.getElementById("mickey4").style.display="none";
//    document.getElementById("tekst4").style.display="none";

//    document.getElementById("mickey5").style.display="none";
//    document.getElementById("tekst5").style.display="none";

//    document.getElementById("mickey6").style.display="none";
//    document.getElementById("tekst6").style.display="none";

//    document.getElementById("mickey7").style.display="none";
//    document.getElementById("tekst7").style.display="none";

//    document.getElementById("mickey8").style.display="none";
//    document.getElementById("tekst8").style.display="none";

//    document.getElementById("mickey9").style.display="none";
//    document.getElementById("tekst9").style.display="none";

//    document.getElementById("mickey10").style.display="none";
//    document.getElementById("tekst10").style.display="none";


//    document.getElementById("mickey" + nummer).style.display="block";
//    document.getElementById("tekst" + nummer).style.display="block";
   
// }

// var mickey = document.getElementById("mickey-foto");
