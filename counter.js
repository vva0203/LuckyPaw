function Sum(count) {
    let minus = count.querySelector('.catalog__product-minus');
    let plus = count.querySelector('.catalog__product-plus');
    let input = count.querySelector('.catalog__product-input');
    let price = 1050;
    let sum = count.querySelector('.catalog__product-price');
    plus.addEventListener('click', function() {
        input.value++;
        sum.innerText = price * input.value + ' ₽';
        
    });
    minus.addEventListener('click', function() {
        if (input.value <= 1) {
            input.value = 1;
            sum.innerText = price * input.value + ' ₽';
        } else {
            input.value--;
            sum.innerText = price * input.value + ' ₽';
        }
    });
}
let product = document.querySelectorAll('.catalog__product');
product.forEach(Sum);
