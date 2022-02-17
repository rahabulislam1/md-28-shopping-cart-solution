function updateProductNumber(id, price, product, isCreasing) {
    document.getElementById(id).addEventListener('click', function () {
        const productInput = document.getElementById(product + '-number');
        let productNumber = parseInt(productInput.value);
        if (isCreasing == true) {
            productNumber = productNumber + 1;
        }
        else if (productNumber > 0) {
            productNumber = productNumber - 1;
        }
        productInput.value = productNumber;

        const productTotal = document.getElementById(product + '-total');

        productTotal.innerText = productNumber * price;

    })
}

// case increase decrease event
updateProductNumber('case-plus', 59, 'case', true);
updateProductNumber('case-minus', 59, 'case', false)

// phone increase decrease event
updateProductNumber('phone-plus', 1219, 'phone', true);
updateProductNumber('phone-minus', 1219, 'phone', false)
