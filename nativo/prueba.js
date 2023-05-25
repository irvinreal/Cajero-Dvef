// let c1 = "Hola"
// let c2 = "¿Cómo estás?"

// const n001 = " Irvin Real. "
// const n002 = " Pablo López. "

// let resultado = c1.padStart(3,"t")

// console.log(resultado);

// const inputSaldo = document.getElementById('saldo-nuevo')

// inputSaldo.addEventListener('keyup', (e) => {
//     var entrada = e.target.value.split(',').join('');
//     entrada = entrada.split('').reverse()


//     var salida = [];
//     var aux = "";

//     var paginador = Math.ceil(entrada.length / 3);

//     for (let i = 0; i < paginador; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (entrada[j + (i*3)] != undefined) {
//                 aux += entrada[j + (i*3)];
//             }
//         }
//         salida.push(aux);
//         aux = '';

//         e.target.value = salida.join(',').split("").reverse().join('')

//     }

// }, false);




// ---------------------------------------

// let numeros = "1234,567"
// document.write(numeros + "</br>");


// resultado = numeros.split("").reverse()
// document.write(resultado + "<br>");



let numeros = ["1","2",",","3","4","5"]
document.write(numeros + "</br>");


numeros.reverse().splice(3,1)
document.write(numeros + "<br>");