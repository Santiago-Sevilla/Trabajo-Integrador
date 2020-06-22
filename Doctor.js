const Persona = require("./Persona")

class Doctor extends Persona {
    constructor(nombre, precioHora, cantidadHora){
        super(nombre);
        this.precioHora = precioHora;     
        this.cantidadHora= cantidadHora;
               
    }
    
    calcularSueldo(){
        return this.precioHora * this.cantidadHora;
    }

}
module.exports = Doctor;