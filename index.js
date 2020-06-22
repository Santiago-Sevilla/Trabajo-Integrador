const Obrero = require("./Obrero");
const Docente = require("./Docente");
const Doctor = require("./Doctor");


const persona1 = new Obrero("Santiago Lopez", 130, 100);
const persona2 = new Docente("Leandro Vega", 235, 95);
const persona3 = new Doctor("Lucas Bilos", 450, 90);





console.info("La persona "+persona1.darInformacion(),"cobrará $" +persona1.calcularSueldo());
console.info("La persona "+persona2.darInformacion(),"cobrará $" +persona2.calcularSueldo());
console.info("La persona "+persona3.darInformacion(),"cobrará $" +persona3.calcularSueldo());


