# PARCIAL PROGRAMACIÓN
## 1.Explicar y ejemplificar composición y agregación

Agregación: 

Se le llama agregación a un tipo de asociación que indica que una clase es parte de otra clase. Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas). La destrucción del compuesto no conlleva la destrucción de los componentes. La agregación se representa con un rombo de color blanco.
Ejemplo: Una instancia de la clase Persona, puede tener o no, durante su tiempo de vida, un atributo de la clase Ropa sin que ello afecte su propia existencia,al mismo tiempo que un objeto de la clase Ropa podría existir independientemente de si es agregado a una Persona.

Composición: 

Se le llama composición a un tipo de asociación que indica relaciones de pertenencia entre clases y una depende de la otra. Cuando se elimina el contenedor, el contenido también es eliminado. La composición se representa con un rombo de color negro.
Ejemplo: Si un objeto "persona" desaparece, los órganos internos desaparecerán con el.

---

## 2.Explicar que es polimorfismo.
 
Polimorfismo:

En programación orientada a objetos, el polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía.

---

## 3.Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.

En el ejemplo que se muestra, se tiene una función para calcular el sueldo de personas. El sueldo se calcula teniendo en cuenta el precio que se paga por hora y las horas trabajadas por dicha persona durante un mes.
En el diagrama existe la clase Persona(clase padre) que tiene como atributos nombre y apellido, y como operaciones tiene darInformacion()
Las clases Obrero, Docente y Doctor(clases hijas) que tienen además de los atributos heredados de la clase padre, tienen los atributos de precioHora y cantidadHora. Y como operaciones tienen calcularSueldo().
La función darInformación daría el nombre de la persona y la función calcularSueldo daría el total a cobrar por cada persona según sus horas trabajadas y lo que le paguen por dichas horas.

---

## 4.Codificar el ejemplo del punto 3 con Javascript.
```
class Persona {
    constructor(nombre,){
        this.nombre = nombre;    
    }
    darInformacion(){
        return `${this.nombre}`;
    }   
}
module.exports = Persona;


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

const Persona = require("./Persona")

class Docente extends Persona {
    constructor(nombre, precioHora, cantidadHora){
        super(nombre);
        this.precioHora = precioHora;     
        this.cantidadHora= cantidadHora;
               
    }
    
    calcularSueldo(){
        return this.precioHora * this.cantidadHora;
    }

}
module.exports = Docente;

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

const Obrero = require("./Obrero");
const Docente = require("./Docente");
const Doctor = require("./Doctor");


const persona1 = new Obrero("Santiago Lopez", 130, 100);
const persona2 = new Docente("Leandro Vega", 235, 95);
const persona3 = new Doctor("Lucas Bilos", 450, 90);


console.info("La persona "+persona1.darInformacion(),"cobrará $" +persona1.calcularSueldo());
console.info("La persona "+persona2.darInformacion(),"cobrará $" +persona2.calcularSueldo());
console.info("La persona "+persona3.darInformacion(),"cobrará $" +persona3.calcularSueldo());

```

