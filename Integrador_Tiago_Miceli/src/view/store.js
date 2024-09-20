import { setProductoActivo } from "../../main";
import { handleGetProduct } from "../persistence/localStorage";
import { openModal } from "./modal";

//Obtiene los productos
export const handleGetProductToStore = () => {
  const products = handleGetProduct();
  handleRenderList(products);
};

//Renderiza los productos por categorias
export const handleRenderList = (products) => {
  //Elements cada cateogira
  const burgers = products.filter((el) => el.categoriaElement == "Hamburgesas");
  const gaseosas = products.filter((el) => el.categoriaElement == "Gaseosa");
  const papas = products.filter((el) => el.categoriaElement == "Papas");
  //Funcion render cada product
  const renderProductGroup = (productos, titulo) => {
    if (productos.length > 0) {
      const productosHTML = productos.map((product, index) => {
        return `<div class="containerTarget__itemStore" id="product-${product.categoriaElement}-${index}">
        <div>
        <img src='${product.ImagenElement}' />
        <div>
        <h2>${product.nameElement}</h2>
        </div>
        <div class="containerTarget__itemStore__pitems">
        <p><b>Precio: </b> $${product.precioElement}</p>
        </div>
        </div>
        </div>`;
      });
      return `
      <section class="section__store">
      <div class="containerTittleCategorias__store">
      <h3>${titulo}</h3>
      </div>
      <div class="containerProduct__store">
      ${productosHTML.join(" ")}
      </div>
      </section>
      `;
    } else {
      return " ";
    }
  };
  //Render por categoria
  const appContainer = document.getElementById("storeContainer");
  appContainer.innerHTML = `
  ${renderProductGroup(burgers, "Hamburgesas")}
  ${renderProductGroup(papas, "Papas")}
  ${renderProductGroup(gaseosas, "Gaseosas")}
  `;

  //Añade evento a los productos
  const addEvents = (productos) => {
    productos.forEach((element, index) => {
      const productContainer = document.getElementById(`product-${element.categoriaElement}-${index}`);
      productContainer.addEventListener("click", () => {
        setProductoActivo(element);
        openModal();
      });
    });
  };
  addEvents(burgers);
  addEvents(papas);
  addEvents(gaseosas);
};
