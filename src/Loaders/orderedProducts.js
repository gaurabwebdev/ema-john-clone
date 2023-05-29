import { getShoppingCart } from "../utilities/fakedb";

const allProducts = async () => {
  const loadedProducts = await fetch("http://localhost:5000/products");
  const finalProducts = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = finalProducts.find((pd) => pd._id === id);
    if (addedProduct) {
      addedProduct.quantity = storedCart[id];
    }
    savedCart.push(addedProduct);
  }

  return savedCart;
};

export default allProducts;
