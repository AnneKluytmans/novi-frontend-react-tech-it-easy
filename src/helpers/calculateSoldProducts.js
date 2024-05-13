
function calculateSoldProducts(productArray) {
    let soldProducts = 0;

    for (let i = 0; i < productArray.length; i++) {
        soldProducts += productArray[i].sold;
    }

    return soldProducts;
}

export default calculateSoldProducts;