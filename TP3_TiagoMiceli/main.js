// Cambiar color de los párrafos a verde
function cambiarColor() {
  const parrafos = document.querySelectorAll("p");
  parrafos.forEach(p => p.style.color = "green");
}

// Mostrar alerta con el valor del campo de texto
function mostrarAlerta(event) {
  event.preventDefault();
  const texto = document.getElementById("inputText").value;
  alert(`Ingresaste: ${texto}`);
}

// Añadir evento a los ítems de la lista
document.querySelectorAll("#elementList li").forEach(item => {
  item.addEventListener("click", function () {
    console.log(this.textContent);
  });
});

// Desactivar y activar campo de texto
function desactivarCampo() {
  document.getElementById("textInput").disabled = true;
}

function activarCampo() {
  document.getElementById("textInput").disabled = false;
}

// Almacenamiento de correo en localStorage
function guardarEmail(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  localStorage.setItem("emailGuardado", email);
  mostrarEmailGuardado();
}

function mostrarEmailGuardado() {
  const email = localStorage.getItem("emailGuardado");
  const mostrarDiv = document.getElementById("mostrarEmail");
  const borrarBtn = document.getElementById("borrarEmail");
  if (email) {
    mostrarDiv.textContent = `Correo: ${email}`;
    borrarBtn.style.display = "block";
  } else {
    mostrarDiv.textContent = "";
    borrarBtn.style.display = "none";
  }
}

function borrarEmail() {
  localStorage.removeItem("emailGuardado");
  mostrarEmailGuardado();
}

mostrarEmailGuardado();
