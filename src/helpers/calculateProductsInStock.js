import calculateSoldProducts from "./calculateSoldProducts.js";
import calculateOriginalStock from "./calculateOriginalStock.js";

function calculateProductsInStock(productArray) {
    const originalStock = calculateOriginalStock (productArray);
    const soldProducts = calculateSoldProducts(productArray);

    return originalStock - soldProducts;
}

export default calculateProductsInStock;