// class   Usuario {
//     constructor(numUsuario, contraseña, nomUsuario, saldo){
//         this.numUsuario = numUsuario;
//         this.contraseña = contraseña;
//         this.nomUsuario = nomUsuario;
//         this.saldo = saldo;
//     }


// }

// cuentaJuan = new Usuario("001","5690","Juan","850")



// Variables --------------------------------------------
let saldo5690 = [850];
let saldo3921 = [290];
let saldo1082 = [29];

let cuenta5690 = { nombre: "Juan", saldo5690, contraseña: "5690" }
let cuenta3921 = { nombre: "Laura", saldo3921, contraseña: "3921" }
let cuenta1082 = { nombre: "Martha", saldo1082, contraseña: "1082" }

const cuentaMartha = document.querySelector('#cuenta-martha')
const cuentaLaura = document.querySelector('#cuenta-laura')
const cuentaJuan = document.querySelector('#cuenta-juan')

const btnSaldo = document.getElementById('btnsaldo')
const btnIngresar = document.getElementById('btningresar')
const btnRetirar = document.getElementById('btnretirar')
const btnInRe = document.querySelector('#btnIngresarRetirar')
const salirBtn = document.getElementById("salir");

const seccionBienvenida = document.querySelector('.main-box__right')
const seccionSaldo = document.querySelector('#seccion-saldo')
const opciones = document.querySelector('.opciones')
const opcion = document.querySelector('#opcion')
let pantallaSaldo = document.getElementById('saldo-span')
// let inputSaldoNuevo = document.getElementById('saldo-nuevo').value

let saldoNuevo
let saldoActual

// inputSaldo -----------------------------------
const inputSaldo = document.getElementById('saldo-nuevo')
inputSaldo.addEventListener('keyup', (e) => {
    var entrada = e.target.value.split(',').join('');
    entrada = entrada.split('').reverse()

    var salida = [];
    var aux = "";

    var paginador = Math.ceil(entrada.length / 3);

    for (let i = 0; i < paginador; i++) {
        for (let j = 0; j < 3; j++) {
            if (entrada[j + (i*3)] != undefined) {
                aux += entrada[j + (i*3)];
            }
        }
        salida.push(aux);
        aux = '';

    }
    e.target.value = salida.join(',').split("").reverse().join('')
    console.log(salida);


}, false);



// ---------------------------------------------------------
// ------------- Formulario de Entada ----------------------

    function login(form){
        if ( form.u.value == `${cuenta5690.nombre}`) {
            if ( form.c.value == "5690" ) {
                location = "principal5690.html"
            } else {
                alert( "Contraseña Incorrecta" );
            }
        }

        else if ( form.u.value == `${cuenta3921.nombre}` ) {
                if ( form.c.value == "3921" ) {
                    location = "principal3921.html"
                } else {
                    alert( "Contraseña Incorrecta" );
                }
        }

        else if ( form.u.value == `${cuenta1082.nombre}` ) {
            if ( form.c.value == "1082" ) {
                location = "principal1082.html"
            } else {
                alert( "Contraseña Incorrecta" );
            }
    }
        else {
            alert( "Usuario Incorrecto" );
        }
    }

// ------------- Formulario de Entada ----------------------
// ---------------------------------------------------------



// Eventos -------------------------------------------------

btnSaldo.addEventListener('click', function() {

    if (cuentaJuan){
        let saldoNuevo = saldo5690[saldo5690.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    } else if (cuentaLaura){
        let saldoNuevo = saldo3921[saldo3921.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    } else if (cuentaMartha){
        let saldoNuevo = saldo1082[saldo1082.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    }

    seccionBienvenida.style.display = 'none'
    seccionSaldo.style.display = 'block'
    opciones.style.display = 'none'
})

btnIngresar.addEventListener('click', function(){

    if (cuentaJuan){
        let saldoNuevo = saldo5690[saldo5690.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    } else if (cuentaLaura){
        let saldoNuevo = saldo3921[saldo3921.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    } else if (cuentaMartha){
        let saldoNuevo = saldo1082[saldo1082.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    }

    seccionBienvenida.style.display = 'none'
    seccionSaldo.style.display = 'block'
    opciones.style.display = 'block'
    opcion.innerHTML = "Ingresar Cantidad:"
    btnInRe.value = "Ingresar"
})

btnRetirar.addEventListener('click', function(){
    if (cuentaJuan){
        let saldoNuevo = saldo5690[saldo5690.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    } else if (cuentaLaura){
        let saldoNuevo = saldo3921[saldo3921.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    } else if (cuentaMartha){
        let saldoNuevo = saldo1082[saldo1082.length-1];
        saldoActual = saldoNuevo
        pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
    }

    opcion.innerHTML = "Retitar Cantidad:"
    btnInRe.value = "Retirar"
    seccionBienvenida.style.display = 'none'
    seccionSaldo.style.display = 'block'
    opciones.style.display = 'block'

})

btnInRe.addEventListener('click', function(){   // ----------------------------------- btnInRe
    let inputSaldoNuevo = document.getElementById('saldo-nuevo').value

    if (btnInRe.value == "Ingresar"){   // ------------------------------------------- btnIngresar
        if (cuentaJuan){
            // ------------------------------------------
            console.log(salida);
            console.log(inputSaldoNuevo.split("").reverse().splice(3,1));
            console.log(inputSaldoNuevo);
            // inputSaldoNuevo.reverse().splice(3,1)
            // console.log(parseInt(saldoInput));
            // ------------------------------------------
            let saldoNuevo = saldo5690[saldo5690.length-1];
            saldoActual = saldoNuevo + parseInt(inputSaldoNuevo)
            pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
            saldo5690.push(saldoActual)
            limpiar()
        } else if (cuentaLaura){
            let saldoNuevo = saldo3921[saldo3921.length-1];
            saldoActual = saldoNuevo + parseInt(inputSaldoNuevo)
            pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
            saldo3921.push(saldoActual)
            limpiar()
        } else if (cuentaMartha){
            let saldoNuevo = saldo1082[saldo1082.length-1];
            saldoActual = saldoNuevo + parseInt(inputSaldoNuevo)
            pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
            saldo1082.push(saldoActual)
            limpiar()
        }


    } else if (btnInRe.value == "Retirar"){ // ---------------------------------------- btnRetirar
        if (cuentaJuan){
            if ( inputSaldoNuevo > saldo5690[saldo5690.length-1] ) {
                alert('No cuentas con saldo suficiente')
                limpiar()
            } else {
            let saldoNuevo = saldo5690[saldo5690.length-1];
            saldoActual = saldoNuevo - parseInt(inputSaldoNuevo)
            pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
            saldo5690.push(saldoActual)
            limpiar()
            }
        } else if (cuentaLaura){
            if ( inputSaldoNuevo > saldo3921[saldo3921.length-1] ) {
                alert('No cuentas con saldo suficiente')
                limpiar()
            } else {
            saldoNuevo = saldo3921[saldo3921.length-1];
            saldoActual = saldoNuevo - parseInt(inputSaldoNuevo)
            pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
            saldo3921.push(saldoActual)
            limpiar()
            }
        } else if (cuentaMartha){
            if ( inputSaldoNuevo > saldo1082[saldo1082.length-1] ) {
                alert('No cuentas con saldo suficiente')
                limpiar()
            } else {
            saldoNuevo = saldo1082[saldo1082.length-1];
            saldoActual = saldoNuevo - parseInt(inputSaldoNuevo)
            pantallaSaldo.innerHTML = `${"$ " + saldoActual + ".00"} `
            saldo1082.push(saldoActual)
            limpiar()
            }
        }
    }

})


salirBtn.addEventListener('click', function(){  // --------------------------------------  Botón Salir
    location = 'index.html'
});


function limpiar(){
    let inputSaldoNuevo = document.getElementById('saldo-nuevo')
    inputSaldoNuevo.value = ''
}


