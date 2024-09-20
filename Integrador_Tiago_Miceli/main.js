import { renderCategories } from "./service/categories";
import { handleSearchProductByName } from "./service/search";
import { openModal } from "./view/modal";
import { handleGetProductToStore } from "./view/store";
import "./style.css";


export let categoriaActiva = null;
export const setCategoriaActiva = (categoria) => {
  categoriaActiva = categoria;
};
export let productoActivo = null;
export const setProductoActivo = (producto) => {
  productoActivo = producto;
};

renderCategories();
handleGetProductToStore();

//------------- Header ---------------
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
});

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
});
