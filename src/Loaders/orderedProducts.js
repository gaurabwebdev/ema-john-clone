import { getShoppingCart } from "../utilities/fakedb";

const allProducts = async () => {
  const loadedProducts = await fetch("products.json");
  const finalProducts = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = finalProducts.find((pd) => pd.id === id);
    if (addedProduct) {
      addedProduct.quantity = storedCart[id];
    }
    savedCart.push(addedProduct);
  }

  return savedCart;
};

export default allProducts;
