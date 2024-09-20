//Ejercicio 2
console.log("Ejercicio 2: corriendo desde typescript");

//Ejercicio 3
let cadena: string = "¡Hola desde Typescript!";
let numero: number = 123;
let booleano: boolean = true;
let fecha: Date = new Date("8/9/2024");

let postTexto: HTMLElement | null = document.getElementById("postTexto");
let postNumero: HTMLElement | null = document.getElementById("postNumero");
let postBooleano: HTMLElement | null = document.getElementById("postBooleano");
let postFecha: HTMLElement | null = document.getElementById("postFecha");
if (postTexto && postNumero && postBooleano && postFecha){
    postTexto.textContent = "Texto: " + cadena;
    postNumero.textContent = "Número: " + numero;
    postBooleano.textContent = "Booleano: " + booleano;
    postFecha.textContent = "Fecha: " + fecha.toLocaleDateString("es-ES");
}

//Ejercicio 4
let numero2: number = 456;

function numberToString(numero: number): string {
    return numero.toString();
}

let texto2: string = numberToString(numero2);

let postNumCad: HTMLElement | null = document.getElementById("postNumCad");
if (postNumCad){
    postNumCad.textContent = "Número convertido a cadena: " + texto2;
}

//Ejercicio 5
let numeros: number[] = [1, 2, 3, 4, 5];

function sumaNumeros(numeros: number[]): number {
    let total = 0;
    for(let i = 0; i < numeros.length; i++){
        total = total + numeros[i];
    }
    return total;
}

let suma = sumaNumeros(numeros);

let postSuma: HTMLElement | null = document.getElementById("postSuma");
if (postSuma){
    postSuma.textContent = "La suma del Array da: " + suma;
}

//Ejercicio 6
let estudiante1 = {
    nombre: "Roberto",
    edad: 24,
    curso: "Inglés",
}

let postEstudiante: HTMLElement | null = document.getElementById("postEstudiante");
let postEdad: HTMLElement | null = document.getElementById("postEdad");
let postCurso: HTMLElement | null = document.getElementById("postCurso");
if (postEstudiante && postEdad && postCurso){
    postEstudiante.textContent = "Estudiante: " + estudiante1.nombre;
    postEdad.textContent = "Edad: " + estudiante1.edad;
    postCurso.textContent = "Curso: " + estudiante1.curso;
}

//Ejercicio 7
type Direccion = {
    calle: string;
    ciudad: string;
    cp: string;
};
  
let direccion: Direccion = { calle: "San Martín", ciudad: "Ciudad de Mendoza", cp: "5500" };
let postDireccion: HTMLElement | null = document.getElementById("postDireccion");
if (postDireccion){
    postDireccion.textContent = "- Dirección - Calle: " + direccion.calle + ". Ciudad: " + direccion.ciudad + ". Código Postal: " + direccion.cp + ".";
}

//Ejercicio 8
interface Usuario {
    nombre: string;
    edad: number;
    correo: string;
    saludar: () => string;
}

let usuario1: Usuario = {
    nombre: "Roberta",
    edad: 21,
    correo: "robertita@gmail.com",
    saludar: function(): string {
        return "¡Hola, mi nombre es " + usuario1.nombre + "!";
    }
}

let postSaludo: HTMLElement | null = document.getElementById("postSaludo");
if (postSaludo){
    postSaludo.textContent = usuario1.saludar();
}

//Ejercicio 9
class Persona {
    nombre: string;
    edad: number;
  
    constructor(nombre: string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    presentarse(): string {
      return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

let persona1 = new Persona("José", 39);
let postPresentarse: HTMLElement | null = document.getElementById("postPresentarse");
if (postPresentarse){
    postPresentarse.textContent = persona1.presentarse();
}

//Ejercicio 10
class Caja<T> {
    private value: T;
  
    constructor(value: T) {
      this.value = value;
    }
  
    obtenerValor(): T {
      return this.value;
    }
}

let caja1 = new Caja<string>("Soy una caja");
let caja2 = new Caja<number>(74);

let postCajaTexto: HTMLElement | null = document.getElementById("postCajaTexto");
let postCajaNumero: HTMLElement | null = document.getElementById("postCajaNumero");
if (postCajaTexto && postCajaNumero){
    postCajaTexto.textContent = "Contenido de la caja de texto: " + caja1.obtenerValor();
    postCajaNumero.textContent = "Contenido de la caja de número: " + caja2.obtenerValor();
}

//Ejercicio 11
function identidad<T>(valor: T): T {
    return valor;
}

let postIdentidad1: HTMLElement | null = document.getElementById("postIdentidad1");
let postIdentidad2: HTMLElement | null = document.getElementById("postIdentidad2");
let postIdentidad3: HTMLElement | null = document.getElementById("postIdentidad3");
if (postIdentidad1 && postIdentidad2 && postIdentidad3){
    postIdentidad1.textContent = "Identidad del texto: " + identidad<string>("¡Identidad secreta!");
    postIdentidad2.textContent = "Identidad del número: " + identidad<number>(789);
    postIdentidad3.textContent = "Identidad del booleano: " + identidad<boolean>(true);
}


//Ejercicio 12
enum colores {
    Rojo,
    Verde,
    Azul,
    Rosa,
    Amarillo
}

let favorito = colores.Azul;

let postFavorito: HTMLElement | null = document.getElementById("postFavorito");
if (postFavorito){
    postFavorito.textContent = "Color Favorito: " + favorito;
}
