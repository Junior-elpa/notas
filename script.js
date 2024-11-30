let array1 = [12, 6, 6, 7];
function mostrar_notas(){
    let lista =  document.getElementById("respuesta_mostrar");
    lista.textContent = ""
    for(let numero of array1){
        let item = document.createElement("li")
        item.innerText = numero;
        lista.appendChild(item);
    }
}
function promedio() {
    let suma = 0;
    let cont = 0;
    for (let numero of array1) {
        suma += numero;
        cont += 1;
    }
    let prome = suma / cont;
    let lista = document.getElementById("respuesta_promedio");
    lista.textContent = "";  
    let item = document.createElement("li");
    item.innerText = "el promedio de las calificaciones es : " + prome;
    lista.appendChild(item);
}

function mayor() {
    let mayor = 0;
    let i = 0;
    while (i < array1.length) {
        let calificacionActual = array1[i];
        if (calificacionActual > mayor) {
            mayor = calificacionActual; 
        }
        i++; 
    }
    let lista = document.getElementById("respuesta_mayor");
    lista.textContent = ""; 
    let item = document.createElement("li");
    item.innerText = "la nota mas alta es: " + mayor;
    lista.appendChild(item);  
}


function aplaza() {
    let i = 0;
    let aplazo = false; 
    do {
        if (array1[i] < 4) { 
            aplazo = true;
            break;
        }
        i++; 
    } while (i < array1.length);
    let lista = document.getElementById("respuesta_aplaza");
    lista.textContent = ""; 
    let item = document.createElement("li");

    if (aplazo) {
        item.innerText = "señores, hay aplazo"; 
    } else {
        item.innerText = "señores, no hay aplazo"; 
    }

    lista.appendChild(item);
}