class Persona {
    constructor(nombre,){
        this.nombre = nombre;    
    }
    darInformacion(){
        return `${this.nombre}`;
    }   
}
module.exports = Persona;