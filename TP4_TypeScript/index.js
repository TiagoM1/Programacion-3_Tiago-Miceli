//Ejercicio 2
console.log("Ejercicio 2: corriendo desde typescript");
//Ejercicio 3
var cadena = "¡Hola desde Typescript!";
var numero = 123;
var booleano = true;
var fecha = new Date("9/9/2024");
var postTexto = document.getElementById("postTexto");
var postNumero = document.getElementById("postNumero");
var postBooleano = document.getElementById("postBooleano");
var postFecha = document.getElementById("postFecha");
if (postTexto && postNumero && postBooleano && postFecha) {
    postTexto.textContent = "Texto: " + cadena;
    postNumero.textContent = "Número: " + numero;
    postBooleano.textContent = "Booleano: " + booleano;
    postFecha.textContent = "Fecha: " + fecha.toLocaleDateString("es-ES");
}
//Ejercicio 4
var numero2 = 456;
function numberToString(numero) {
    return numero.toString();
}
var texto2 = numberToString(numero2);
var postNumCad = document.getElementById("postNumCad");
if (postNumCad) {
    postNumCad.textContent = "Número convertido a cadena: " + texto2;
}
//Ejercicio 5
var numeros = [1, 2, 3, 4, 5];
function sumaNumeros(numeros) {
    var total = 0;
    for (var i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    return total;
}
var suma = sumaNumeros(numeros);
var postSuma = document.getElementById("postSuma");
if (postSuma) {
    postSuma.textContent = "La suma del Array da: " + suma;
}
//Ejercicio 6
var estudiante1 = {
    nombre: "Roberto",
    edad: 24,
    curso: "Inglés",
};
var postEstudiante = document.getElementById("postEstudiante");
var postEdad = document.getElementById("postEdad");
var postCurso = document.getElementById("postCurso");
if (postEstudiante && postEdad && postCurso) {
    postEstudiante.textContent = "Estudiante: " + estudiante1.nombre;
    postEdad.textContent = "Edad: " + estudiante1.edad;
    postCurso.textContent = "Curso: " + estudiante1.curso;
}
var direccion = { calle: "San Martín", ciudad: "Ciudad de Mendoza", cp: "5500" };
var postDireccion = document.getElementById("postDireccion");
if (postDireccion) {
    postDireccion.textContent = "- Dirección - Calle: " + direccion.calle + ". Ciudad: " + direccion.ciudad + ". Código Postal: " + direccion.cp + ".";
}
var usuario1 = {
    nombre: "Roberta",
    edad: 21,
    correo: "robertita@gmail.com",
    saludar: function () {
        return "¡Hola, mi nombre es " + usuario1.nombre + "!";
    }
};
var postSaludo = document.getElementById("postSaludo");
if (postSaludo) {
    postSaludo.textContent = usuario1.saludar();
}
//Ejercicio 9
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    };
    return Persona;
}());
var persona1 = new Persona("José", 39);
var postPresentarse = document.getElementById("postPresentarse");
if (postPresentarse) {
    postPresentarse.textContent = persona1.presentarse();
}
//Ejercicio 10
var Caja = /** @class */ (function () {
    function Caja(value) {
        this.value = value;
    }
    Caja.prototype.obtenerValor = function () {
        return this.value;
    };
    return Caja;
}());
var caja1 = new Caja("Soy una caja");
var caja2 = new Caja(74);
var postCajaTexto = document.getElementById("postCajaTexto");
var postCajaNumero = document.getElementById("postCajaNumero");
if (postCajaTexto && postCajaNumero) {
    postCajaTexto.textContent = "Contenido de la caja de texto: " + caja1.obtenerValor();
    postCajaNumero.textContent = "Contenido de la caja de número: " + caja2.obtenerValor();
}
//Ejercicio 11
function identidad(valor) {
    return valor;
}
var postIdentidad1 = document.getElementById("postIdentidad1");
var postIdentidad2 = document.getElementById("postIdentidad2");
var postIdentidad3 = document.getElementById("postIdentidad3");
if (postIdentidad1 && postIdentidad2 && postIdentidad3) {
    postIdentidad1.textContent = "Identidad del texto: " + identidad("¡Identidad secreta!");
    postIdentidad2.textContent = "Identidad del número: " + identidad(789);
    postIdentidad3.textContent = "Identidad del booleano: " + identidad(true);
}
//Ejercicio 12
var colores;
(function (colores) {
    colores[colores["Rojo"] = 0] = "Rojo";
    colores[colores["Verde"] = 1] = "Verde";
    colores[colores["Azul"] = 2] = "Azul";
    colores[colores["Rosa"] = 3] = "Rosa";
    colores[colores["Amarillo"] = 4] = "Amarillo";
})(colores || (colores = {}));
var favorito = colores.Azul;
var postFavorito = document.getElementById("postFavorito");
if (postFavorito) {
    postFavorito.textContent = "Color Favorito: " + favorito;
}
