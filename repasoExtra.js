//========= FUNCIONES =========

//Por declaración

function saludar(nombre, apellido) {
  console.log("Hola!" + nombre + " " + apellido);
}

//Por expresión
//Se hace de la misma forma que la declaración solo que se la asigno a una variable o constante

const saludo = function saludo() {
  console.log("Hola!");
};

// Se puede sacar el nombre de la función ya que se asume que el nombre de la variable es el nombre de la función. A esto se lo conoce como funciones anónimas
const saludo2 = function () {
  console.log("Hola!");
};

//Llamar a la función

saludar("Natalin", "Acuña");

// ========= OBJETOS =========
//En Js son un tipo de dato. Los atributos se escriben en forma de clave valor.
//Los atributos pueden ser de cualquiet tipo incluyendo funciones.

const persona = {
  nombre: "Gaston",
  apellido: "Fernández",
  edad: 34,
  esMayoDeEdad: true,
  saludar: function () {
    console.log("Hola");
  },
};

//Acceder a los atributos del objeto

const nombre = persona["apellido"]; //A través del corchete pasandole entre comillas la clave
const apellido = persona.edad; //A través del punto
console.log(nombre);
console.log(apellido);
console.log(persona);

console.log(persona);

//Cambiarle el contenido

persona.edad = 22;
console.log(persona.edad);

//Agregarle propiedades nuevas

persona.pais = "Argentina";
console.log(persona);

//Borrar atributos

delete persona.esMayoDeEdad;
console.log(persona);

//Usar las funciones
persona.saludar;

//Anidar un objeto dentro de otro

const persona2 = {
  nombre: "Maria",
  apellido: "Rodriguez",
  edad: 28,
  direccion: {
    calle: "Calle falsa",
    numero: "123",
    cp: 1648,
  },
  esMayoDeEdad: true,
  saludar: function () {
    console.log("Hola");
  },
};

console.log(persona2);

// ========= CLASES =========
//Molde que nos ayuda a crear objetos respetando siempre una misma estructura

class Auto {
  color;
  marca;
  modelo = 2023;
  kms = 0;
  velocidad = 0;

  //El constructor se ejecuta cada vez que ponemos new
  constructor(color, marca) {
    this.color = color;
    this.marca = marca;
  }

  //Puede tener métodos
  acelerar() {
    console.log("Acelerando");
    this.velocidad = this.velocidad + 10;
    console.log(this.velocidad);
  }

  frenar() {
    console.log("Frenando");
    this.velocidad = this.velocidad - 10;
    console.log(this.velocidad);
  }
}

//Para construir un objeto de este tipo se unsa la palabra new

const auto1 = new Auto("Verde", "Peugeot"); //En el constructor le paso los datos que me pide para crear el auto que son color y marca en este caso ya que modelo y kms ya están definidos en los atributos
console.log(auto1);

const auto2 = new Auto("Negro", "Fiat");
console.log(auto2);

auto1.acelerar();
auto1.acelerar();
auto1.acelerar();
auto1.frenar();

//Herencia

class Animal {
  nombre;
  edad;
  raza;

  constructor(nombre, edad, raza) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
  }
}

class Perro extends Animal {
  tieneCola;
  cantidadDePatas;

  constructor(nombre, edad, raza, tieneCola, cantidadDePatas) {
    super(nombre, edad, raza);
    this.tieneCola = tieneCola;
    this.cantidadDePatas = cantidadDePatas;
  }
}

const perro1 = new Animal("Rumi", 10, "Mestizo", true, 4);
console.log(perro1);

// ========= FUNCIONES CALLBACKS =========
//Capacidad que tiene JS de permitirnos pasar por paŕametros a una función, otra función.

//Ejemplo 1

//Función 1
function testCallBack(param) { 
  param(); //Trato al param como función e imprime el "Hola"

}

//Función 2
function sayHi() {
  console.log("Hola!");
}

//Llamado a la función 1

testCallBack(sayHi); //Le paso la función sayHi como parámetro 


//Ejemplo 2

const numbers = [-1, 0, 1, 2, 3];


//Creo la función que le voy a pasar a filter
function onlyPositives(num) { 
  return num > 0;
};

console.log(numbers);
console.log(numbers.filter(onlyPositives)); //Filter nos pide que le pasemos cómo parámetro otra función


//Tambien puedo crear la función directamente en el filter de forma larga o en forma de función flecha

console.log(numbers.filter(num => num < 1)); 


// ========= MÉTODOS DE LOS ARRAYS=========

const numeros = [-1, 1, 2, 3, 4];
const palabras = ["Pan", "Jamon", "Queso"];

//PUSH: Agrega un elemento al array. Recibe un valor

console.log(palabras);
palabras.push("papa");
console.log(palabras);

//JOIN: devuelve un string cuyo contenido es la unión de todos sus elementos,
//unidos por el string que le pasemos. Recibe un valor

console.log(numeros.join("/"));
console.log(numeros.join("-"));
console.log(numeros.join("_"));
console.log(numeros.join(" "));

//INCLUDES: Devuelve un boolean indicando si el valor dado existe dentro del array. Recibe un valor

console.log(numeros.includes(3));
console.log(numeros.includes(7));

//FIND: Devuelve LA PRIMER ocurrencia que cumpla con la condición dada, undefined si no lo encuentra. Recibe una función callback

console.log(numeros.find(element => element > 0));
console.log(numeros.find(element => element === 2));


//FILTER: Devuelve un array de igual o menos tamaño del original. Recibe una función callback

console.log(numeros.filter(element => element > 2));

//MAP: Convierte un array en otro array modificado de la forma que indiquemos con la función dada.
//Devuelve un array del mismo tamaño que el original.Recibe una función callback

console.log(numeros.map(element => element * 2));
console.log(numeros.map(element => element + 1));


console.log(palabras);
const palabrasUpper = palabras.map(words => words.toUpperCase());
console.log(palabrasUpper);

//FOREACH: Recorre cada elemento del array y ejecuta la función dada para cada elemento

for (let i = 0; i < palabras.length; i++) {
  console.log(`Index ${i}: ${palabras[i]}`);
}

palabras.forEach((element, index) => {
   console.log(`Index ${index}: ${element}`);
})


// ========= DESTRUCTURING OBJECT Y ARRAYS=========
