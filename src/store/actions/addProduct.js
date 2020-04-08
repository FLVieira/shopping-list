export function addProduct(product, list) {
  return {
    type: 'ADD_PRODUCT',
    product,
    list,
  };
}
