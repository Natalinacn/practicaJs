//Una funcion flecha que recibe una lista de enteros y devuelve una lista de enteros multiplicados x2


const enteros = [1, 2, 3, 4];
let multiplicados = [];
multiplicados.length

// const multiplicador = array => { 
    
//     array.forEach(element => {
    
//         element * 2;
//     });
    
    
// }  

const multiplicador2 = listax =>{ 
    for (let i = 0; i < listax.length; i++) {;
        multiplicados.push(listax[i]*2);

    }
}

multiplicador2(enteros)

console.log(multiplicados);

//Se puede hacer con map(). Map convierte un array en otro array

const mapped = enteros.map(n => n * 2);

console.log(mapped);


const listaLetras = ["a", "j", "z"];

const mapped2 = listaLetras.map(letra => letra.toUpperCase());

console.log(listaLetras);
console.log(mapped2);