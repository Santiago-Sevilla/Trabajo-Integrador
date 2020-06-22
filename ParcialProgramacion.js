const Obrero = require("./Obrero");
const Docente = require("./Docente");
const Doctor = require("./Doctor");


const p1 = new Obrero("Santiago Lopez", 180, 8);
const p2 = new Docente("Leandro Vega", 230, 20);
const p3 = new Doctor("Lucas Bilos", 300, 85);


console.info("La persona: "+p1.darInformacion(),"Cobrará: " + p1.calcularSueldo());
console.info("La persona: "+p2.darInformacion(),"Cobrará: " + p2.calcularSueldo());
console.info("La persona: "+p3.darInformacion(),"Cobrará: " + p3.calcularSueldo());