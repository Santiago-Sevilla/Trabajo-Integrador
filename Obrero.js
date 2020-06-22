const Persona = require("./Persona")

class Obrero extends Persona {
    constructor(nombre, precioHora, cantidadHora){
        super(nombre)
        this.precioHora = precioHora;     
        this.cantidadHora= cantidadHora;                  
    }
    
    calcularSueldo(){
    return this.precioHora * this.cantidadHora;
    }
}
module.exports = Obrero;
