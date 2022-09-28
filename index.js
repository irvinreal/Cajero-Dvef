let cuentas = [
    {nombre: "Juan", saldo: 850, contraseña: "5690" },
    { nombre: "Laura", saldo: 390, contraseña: "3921" },
    { nombre: "Rocío", saldo: 29, contraseña: "1082" },
    ];


    function login(form){
        if ( form.u.value == "Juan" ) {
            if ( form.c.value == "5690" ) {
                location = "principal5690.html"
            } else {
                alert( "Contraseña Incorrecta" );
            } 
        }

         else if ( form.u.value == "Laura" ) {
                if ( form.c.value == "3921" ) {
                    location = "principal3921.html"
                } else {
                    alert( "Contraseña Incorrecta" );
                }
        }

        else if ( form.u.value == "Martha" ) {
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

    function clickSalir() {
        console.log("El usario hizo click");
    }

    const salirBtn = document.getElementById("salir");
    salirBtn.addEventListener(click,clickSalir);  


// -----------------------------------------------
// var factura = {
//     numero: 201,
//     cliente: 'Transportes Chemita',
//     divisa: 'eur',
//     subtotal: 350.25,
//     IVA: 75.55,
//     total: function(){
//     return this.subtotal + this.IVA;
//     }
// }

// var numeroFactura = factura.numero;
// var totalFactura = factura.total();

// console.log('La factura ' + numeroFactura + ' tiene un importe de ' + totalFactura);

// La factura 201 tiene un importe de 425.8