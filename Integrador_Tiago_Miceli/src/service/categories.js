import { categoriaActiva } from "../../main";
import { handleGetProduct } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

const handleFilterByCategorie = (categoria) => {
  const products = handleGetProduct();
  switch (categoria) {
    case categoriaActiva:
      handleRenderList(products);
      break;
    case "todo":
      handleRenderList(products);
      break;
    case "Hamburgesas":
    case "Papas":
    case "Gaseosa":
      let result = products.filter((el) => el.categoriaElement === categoria);
      handleRenderList(result);
    default:
      break;
    case "mayorPrecio":
      const resultPrecioMayor = products.sort((a, b) => b.precioElement - a.precioElement);
      handleRenderList(resultPrecioMayor);
      break;
    case "menorPrecio":
      const resultMenorPrecio = products.sort((a, b) => a.precioElement - b.precioElement);
      handleRenderList(resultMenorPrecio);
      break;
  }
};

export const renderCategories = () => {
  const ulList = document.getElementById("listFilter");
  ulList.innerHTML = `
  <li id="todo">Todos los productos</li>
  <li id="Hamburgesas">Hamburgesas</li>   
  <li id="Papas">Papas</li>   
  <li id="Gaseosa">Gaseosas</li>   
  <li id="mayorPrecio">Mayor Precio</li>  
  <li id="menorPrecio">Menor Precio</li>   
  `;
  const listElement = ulList.querySelectorAll("li");

  listElement.forEach((li) => {
    li.addEventListener("click", (e) => {
      handleClickLi(li);
    });
  });
  const handleClickLi = (elemento) => {
    handleFilterByCategorie(elemento.id);
    listElement.forEach((el) => {
      if (el.classList.contains("liactive")) {
        el.classList.remove("liactive");
      } else {
        if (elemento === el) {
          el.classList.add("liactive");
        }
      }
    });
  };
};
