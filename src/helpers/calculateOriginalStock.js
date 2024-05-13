
function calculateOriginalStock(productArray) {
    let originalStock = 0;

    for (let i = 0; i < productArray.length; i++) {
        originalStock += productArray[i].originalStock;
    }

    return originalStock;
}

export default calculateOriginalStock;
