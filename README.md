1.Explicar y ejemplificar composición y agregación

Agregación: 

Se le llama agregación a un tipo de asociación que indica que una clase es parte de otra clase. Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas). La destrucción del compuesto no conlleva la destrucción de los componentes. La agregación se representa con un rombo de color blanco.

Composición: 

Se le llama composición a un tipo de asociación que indica relaciones de pertenencia entre clases y una depende de la otra. Cuando se elimina el contenedor, el contenido también es eliminado. La composición se representa con un rombo de color negro.



2. Explicar que es polimorfismo.
 
Polimorfismo:

En programación orientada a objetos, el polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía.

3. Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.

En el ejemplo que se muestra, se tiene una función para calcular el sueldo de personas. El sueldo se calcular teniendo en cuenta el precio que se paga por hora y las horas trabajadas por dicha persona.
En el diagrama existe la clase Persona(clase padre) que tiene como atributos nombre y apellido, y como operaciones tiene darInformacion()
Las clases Obrero, Docente y Doctor(clases hijas) que tienen además de los atributos heredados de la clase padre, tienen los atributos de precioHora y cantidadHora. Y como operaciones tienen calcularSueldo().
La función darInformación daría el nombre de la persona y la función calcularSueldo daría el total a cobrar por cada persona según sus horas trabajadas y lo que le paguen por dichas horas.


4. Codificar el ejemplo del punto 3 con Javascript.
