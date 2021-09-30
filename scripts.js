/*Taller Json

Este archivo JavaScript esta diseñado para trabajar con un arreglo de objetos JSON con los miembros de la familia de los Simpsons y:

1. Listar todos los datos de los personajes en pantalla.DONE
2. Mostrar los nombres de los personajes y el número de parientes que tienen.DONE
3. Mostrar los datos de un personaje consultando su nombre por el usuario.DONE
4. Mostrar los datos de los personajes que tengan un color de cabello dado por el usuario.DONE

*/

let simpsons = 
[
	{ "name":"Root", "parent":[] },

	{ "name":"Lisa", "age":10, "parent":["Homer","Marge"], "hair":"blond", "checked":true, "icon":"simpsonsIcons lisa" },
	{ "name":"Bart", "age":9, "parent":["Homer","Marge"], "hair":"blond", "checked":false, "icon":"simpsonsIcons bart" },
	{ "name":"Maggie", "age":2, "parent":["Homer","Marge"], "hair":"black", "checked":true },

	{ "name":"Patty", "age":37, "parent":["Jacqueline"], "hair":"blond", "checked":true },
	{ "name":"Selma", "age":38, "parent":["Jacqueline"], "hair":"blond", "checked":false },

	{ "name":"Rod", "age":9, "parent":["Ned"], "hair":"blond", "checked":true },
	{ "name":"Todd", "age":8, "parent":["Ned"], "hair":"blond", "checked":true },

	{ "name":"Abe", "age":65, "parent":["Root"], "hair":"none", "checked":true },
	{ "name":"Mona", "age":65, "parent":["Root"], "hair":"none", "checked":false },
	{ "name":"Jacqueline", "age":63, "parent":["Root"], "hair":"none", "checked":true },
	{ "name":"Homer", "age":42, "parent":["Abe","Mona"], "hair":"none", "checked":false, "icon":"simpsonsIcons homer", "enabled": false },
	{ "name":"Marge", "age":35, "parent":["Jacqueline"], "hair":"blond", "checked":true, "icon":"simpsonsIcons marge" },
	{ "name":"Ned", "age":40, "parent":["Root"], "hair":"none", "checked":true },

	{ "name":"Apu", "age":40, "parent":["Root"], "hair":"black", "checked":true },
	{ "name":"Manjula", "age":40, "parent":["Apu"], "hair":"brown", "checked":false}
]

let simpsonsString = JSON.stringify(simpsons);



for(var i = 0; i < simpsons.length; i++){

	const archivoJSON = document.getElementById('archivoJSON');
	archivoJSON.innerHTML += "<b>Nombre: </b>"+simpsons[i].name+" |  "+"<b>Edad: </b>"+simpsons[i].age+" | "+"<b>Parientes: </b>"+simpsons[i].parent+" | "+"<b>Cabello: </b>"+simpsons[i].hair+" | "+"<b>Estado: </b>"+simpsons[i].checked+" | "+"<b>Icono: </b>"+simpsons[i].icon+" | "+"<b>Disponible: </b>"+simpsons[i].enabled+'<br><br>';	

}



function cargarDatos(){

    let tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
    for(var i = 0; i < simpsons.length; i++){

        var row = tabla.insertRow(i);
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        cell.innerHTML = simpsons[i].name;
        cell1.innerHTML = Object.keys(simpsons[i].parent).length;

    }

    let boton = document.getElementById('botonCargar');
    boton.disabled = true;

}

function cargarPersonaje(){

	let input = document.getElementById('nombrePersonaje').value;
	

	for(var i = 0; i < simpsons.length; i++){

		if (simpsons[i].name==input) {

			const output = document.getElementById('informacionPersonaje');
			
			output.innerHTML = "<b>Nombre: </b>"+simpsons[i].name+" |  "+"<b>Edad: </b>"+simpsons[i].age+" | "+"<b>Parientes: </b>"+simpsons[i].parent+" | "+"<b>Cabello: </b>"+simpsons[i].hair+" | "+"<b>Estado: </b>"+simpsons[i].checked+" | "+"<b>Icono: </b>"+simpsons[i].icon+" | "+"<b>Disponible: </b>"+simpsons[i].enabled+'<br><br>';

		}

	}

}

function cargarCabello(){

	let input = document.getElementById('colorCabello').value;
	

	for(var i = 0; i < simpsons.length; i++){

		if (simpsons[i].hair==input) {

			const output = document.getElementById('informacionCabello');
			
			output.innerHTML += "<b>Nombre: </b>"+simpsons[i].name+" |  "+"<b>Edad: </b>"+simpsons[i].age+" | "+"<b>Parientes: </b>"+simpsons[i].parent+" | "+"<b>Cabello: </b>"+simpsons[i].hair+" | "+"<b>Estado: </b>"+simpsons[i].checked+" | "+"<b>Icono: </b>"+simpsons[i].icon+" | "+"<b>Disponible: </b>"+simpsons[i].enabled+'<br><br>';

		}

	}

}


