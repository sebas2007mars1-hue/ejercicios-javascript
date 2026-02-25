
//* RESPUESTAS TEÓRICAS DEL TALLER:

// 1. Variables básicas
// ¿Qué diferencia hay entre let, var y const?
// var: es la forma antigua, tiene alcance global o de función.
// let: permite cambiar su valor y tiene alcance de bloque.
// const: no permite cambiar el valor después de declararlo.
// ¿Qué tipo de dato es edad?
// Es un dato numérico (number).
// ¿Qué es una variable?
// Es un espacio en memoria donde se guarda información que puede cambiar.

// 2. Función
// ¿Qué es una función?
// Es un bloque de código que realiza una tarea específica y puede reutilizarse.
// ¿Qué es un return?
// Es la instrucción que devuelve un valor desde la función.
// ¿Qué pasa si una función no tiene return?
// La función devuelve undefined.

// 3. Función con parámetros
// ¿Qué son parámetros?
// Son las variables que se definen en la función para recibir datos.
// ¿Qué son argumentos?
// Son los valores reales que se envían al llamar la función.
// ¿Cuál es la diferencia entre ambos?
// Los parámetros están en la función y los argumentos son los valores enviados.

// 5. Crear objeto
// ¿Qué es un objeto en JavaScript?
// Es una estructura que guarda datos en forma de propiedades.
// ¿Qué es una propiedad?
// Es una característica del objeto que tiene un nombre y un valor.
// ¿Cómo se accede a una propiedad?
// Usando el operador punto: objeto.propiedad

// 6. Agregar propiedad
// ¿Cómo se agrega una nueva propiedad a un objeto?
// Usando el punto: objeto.nuevaPropiedad = valor
// ¿Se puede modificar un objeto declarado con const? Explica.
// Sí, porque const no permite cambiar el objeto completo,
// pero sí permite modificar sus propiedades.

// 7. Función con objeto
// ¿Por qué enviamos el objeto completo?
// Para poder usar varias propiedades dentro de la función.
// ¿Qué ventaja tiene enviar objetos a funciones?
// Permite manejar muchos datos en una sola variable.

// 8. Objeto
// ¿Cómo se accede a una propiedad dentro de otro objeto?
// Usando doble punto: objeto.propiedad.subpropiedad

// 10. Función carro
// ¿Qué ocurre si la propiedad no existe?
// Devuelve undefined.
// ¿Por qué es importante validar datos?
// Para evitar errores y asegurarnos que la información existe.

// 11. Modificar propiedad
// ¿Cómo se modifica una propiedad?
// Asignando un nuevo valor: objeto.propiedad = nuevoValor
// ¿Qué diferencia hay entre modificar y copiar un objeto?
// Modificar cambia el original, copiar crea un nuevo objeto independiente.

// 12. Desestructuración
// ¿Qué es desestructuración?
// Es extraer propiedades de un objeto en variables.
// ¿Qué ventaja tiene frente al acceso con punto?
// Hace el código más corto y fácil de leer.

// 13. Desestructuración carro
// ¿Qué pasa si el nombre de la variable no coincide con la propiedad?
// No funcionará correctamente.
// ¿Es obligatorio usar el mismo nombre?
// No, se puede renombrar.

// 14. Desestructuración anidada
// ¿Por qué se usan llaves dentro de llaves?
// Porque se extrae un objeto dentro de otro.
// ¿Qué significa el anidamiento en desestructuración?
// Que hay objetos dentro de otros objetos.

// 15. Parámetro desestructurado
// ¿Qué significa desestructurar en el parámetro?
// Extraer propiedades directamente al recibir el objeto.
// ¿Qué ventaja tiene esta técnica?
// Reduce código y facilita el acceso a los datos.

// 16. Desestructuración en función
// ¿Por qué no necesitas usar punto dentro del return?
// Porque las propiedades ya están guardadas en variables.
// ¿Qué ocurre si el objeto no tiene esa propiedad?
// La variable será undefined.

// 17. Renombramiento
// ¿Qué es el renombramiento?
// Cambiar el nombre de una propiedad al desestructurar.
// ¿Cuándo es útil cambiar el nombre?
// Cuando hay conflictos de nombres o para mayor claridad.

// 18. Copia con spread
// ¿Qué hace el operador spread (...)?
// Copia las propiedades de un objeto en otro.
// ¿La copia es profunda o superficial?
// Es una copia superficial.

// 19. Copiar objeto anidado
// ¿Por qué se debe copiar también el objeto interno?
// Porque si no, seguirá vinculado al original.
// ¿Qué pasa si no lo haces?
// Los cambios afectarán al objeto original.

// 20. Desestructuración completa
// ¿Qué tan recomendable es hacer desestructuración muy larga?
// No es recomendable porque dificulta la lectura.
// ¿Cuándo es mejor dividir la desestructuración?
// Cuando el objeto es muy grande o complejo.
// ¿Qué errores comunes se pueden cometer?
// Usar nombres incorrectos o desestructurar propiedades que no existen.