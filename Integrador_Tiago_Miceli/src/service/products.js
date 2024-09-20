//------------- Product ---------------

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProduct, setLocalS } from "../persistence/localStorage";
import { closeModal } from "../view/modal";
import { handleGetProductToStore, handleRenderList } from "../view/store";

const buttonAccept = document.getElementById("acceptPopUp");
buttonAccept.addEventListener("click", () => {
  handleSaveModify();
});

const handleSaveModify = () => {
  const nameElement = document.getElementById("namePopUp").value;
  const precioElement = document.getElementById("precioPopUp").value;
  const ImagenElement = document.getElementById("imgPopUp").value;
  const categoriaElement = document.getElementById("categoriaPopUp").value;
  let objectElement = null;
  if (productoActivo) {
    objectElement = {
      ...productoActivo,
      nameElement,
      precioElement,
      ImagenElement,
      categoriaElement,
    };
  } else {
    objectElement = {
      id: new Date().toISOString(),
      nameElement,
      precioElement,
      ImagenElement,
      categoriaElement,
    };
  }

  setLocalS(objectElement);

  //Una vez guardado, hacemos que se renderize el elemento
  handleGetProductToStore();
  //Cerrar popup una vez terminado la modificacion de elementos
  closeModal();
  Swal.fire({
    title: "Producto agregado o modificado Correctamente",
    width: 600,
    padding: "3em",
    color: "rgba(50, 50, 50, 0.4)",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(30, 30, 30, 0.7)
      url("../../public/nyan-cat-nyan.gif")
      left top
      no-repeat
    `,
    icon: "success",
  });
};

export const handleDeleteProduct = () => {
  Swal.fire({
    title: "¿Estas seguro de eliminarlo?",
    text: "No podras revertir este cambio",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#a0a0a0",
    cancelButtonColor: "rgba(50, 50, 50, 0.4)",
    confirmButtonText: "ELIMINAR",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado!",
        text: "La comida a sido eliminada",
        icon: "success",
      });
      const product = handleGetProduct();
      const result = product.filter((el) => el.id !== productoActivo.id);
      localStorage.setItem("products", JSON.stringify(result));
      const actualProducts = handleGetProduct();
      handleRenderList(actualProducts);
      closeModal();
    } else {
      closeModal();
    }
  });
};
