import { handleGetProduct } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = () => {
  const inputHeaderSearch = document.getElementById("inputHeaderSearch");
  const produtcs = handleGetProduct();
  const result = produtcs.filter((el) =>
    el.nameElement.toLowerCase().includes(inputHeaderSearch.value)
  );
  console.log(result);
  handleRenderList(result);
};
