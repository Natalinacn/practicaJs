console.log("Hola tarola");
console.log(typeof "hola");

function saludar(nombre) {
  console.log("Hola de nuevo " + nombre);
}

saludar("Natalin");
saludar("Ariel");

function suma(num1, num2) {
  return num1 + num2;
}

let resultado = suma(4, 7);
console.log(resultado);

//FUNCTION EXPRESSION: Definis el nombre como una variable.
//La contante se llama suma y adentro iene una función. La funcion no tiene nombre, es anónima
const suma2 = function (num1, num2) {
  return num1 + num2;
};

console.log(suma2); //Se llama sin los paŕentesis porque llamo a la variable

//ERROR HANDLING

function resta(num1, num2) {
  return num1 - num3; //Acá hay un error porque llama a num3 que no existe
}

console.log("Inicio del programa");

try {
  resta(4, 7);
} catch (error) {
  console.error("Ocurrió un error, intente más tarde");
}

console.log("Fin del programa");

//Otro ejemplo de error handling

function dividir(a, b) {
  if (b === 0) {
    throw "No se puede dividir por 0"; //Si ocurre el error este mensaje pasa a la variable error del try-catch se se imprime
  }
  return a / b;
}

console.log("Inicio del programa");

try {
  const result = dividir(4, 0);
  console.log(result);
} catch (error) {
  console.log("Agarramos un error");
  console.error(error);
} finally {
  //Este bloque se ejecuta siempre
}

console.log("Fin del programa");

//OBJETOS

const lapicera = {
  marca: "Faber Castell",
  color: "Negro",
  precio: 100,
  tieneTapa: true,
  escribir: function () {
    console.log("Estoy escribiendo");
  },
};

console.log(lapicera);

//Para acceder a los atributos o propiedades del objeto

console.log(lapicera["color"]);

const precio = lapicera.precio;
console.log(precio);

//Agregar propiedades
lapicera.origen = "China";
//Modificar un atributo
lapicera.precio = 500;
//Borrar una propiedad
delete lapicera.tieneTapa;
//Para saber si hay una propiedad dentro del objeto
console.log("precio" in lapicera); //Retorna true o false
if ("precio" in lapicera) {
  console.log("El precio está en lapicera");
}
console.log(lapicera);

//OBJETO DENTRO DE OTRO

//Primer forma: Objetos separados
const direccionPersona = {
  calle: "Calle falsa",
  ciudad: "Cordoba Capital",
};

const persona = {
  nombre: "Natalin",
  edad: 37,
  direccion: direccionPersona,
};

//Segunda forma: Un objeto dentro de otro

const persona2 = {
  nombre: "Ariel",
  edad: 40,
  direccion: {
    calle: "Calle falsa",
    ciudad: "Cordoba Capital",
  },
};

//Si quiero acceder a las propiedades de dirección

console.log(persona2.direccion.calle);

