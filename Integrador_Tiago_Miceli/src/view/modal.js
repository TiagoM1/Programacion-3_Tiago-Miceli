//------------- PopUp ---------------

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../service/products";

//Abrimos el agregador de elemento
//Dejamos de mostrarlo con cancel
const buttonCancel = document.getElementById("cancelPopUp");
buttonCancel.addEventListener("click", () => {
  handleCancelButton();
});
const handleCancelButton = () => {
  closeModal();
};
export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
  if (productoActivo) {
    buttonDelete.style.display = "block";
  } else {
    buttonDelete.style.display = "none";
  }
  if (productoActivo) {
    const nameElement = document.getElementById("namePopUp");
    const precioElement = document.getElementById("precioPopUp");
    const ImagenElement = document.getElementById("imgPopUp");
    const categoriaElement = document.getElementById("categoriaPopUp");
    nameElement.value = productoActivo.nameElement;
    precioElement.value = productoActivo.precioElement;
    ImagenElement.value = productoActivo.ImagenElement;
    categoriaElement.value = productoActivo.categoriaElement;
  }
};
//Deja de mostrar el agregador de elemento
export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  setProductoActivo(null);
  resetModal();
};
//Reseteamos
export const resetModal = () => {
  const nameElement = document.getElementById("namePopUp");
  const precioElement = document.getElementById("precioPopUp");
  const ImagenElement = document.getElementById("imgPopUp");
  const categoriaElement = document.getElementById("categoriaPopUp");
  nameElement.value = "";
  precioElement.value = 0;
  ImagenElement.value = "";
  categoriaElement.value = "Selecione una categoria";
};

const buttonDelete = document.getElementById("deletePopUp");
buttonDelete.addEventListener("click", () => {
  handleButtonDelete();
});

const handleButtonDelete = () => {
  handleDeleteProduct();
};
