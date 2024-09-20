export const handleGetProduct = () => {
  const product = JSON.parse(localStorage.getItem("products"));
  if (product) {
    return product;
  } else {
    return [];
  }
};

export const setLocalS = (productIn) => {
  if (productIn) {
    let productLS = handleGetProduct();

    const existingIndex = productLS.findIndex((localProduct) => localProduct.id === productIn.id);
    if (existingIndex !== -1) {
      productLS[existingIndex] = productIn;
    } else {
      productLS.push(productIn);
    }
    localStorage.setItem("products", JSON.stringify(productLS));
  }
};
