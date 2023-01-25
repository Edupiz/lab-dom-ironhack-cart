// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
 
  let valor = price * quantity;

  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = valor;

  return valor;


  //... your code goes here
}

function calculateAll() {
  let variosProduct = document.getElementsByClassName('product');
  let totalProduct = 0;
  for (let i = 0; i < variosProduct.length; i++ ){
    totalProduct += updateSubtotal(variosProduct[i]);
    // console.log(totalProduct);
    // console.log(variosProduct);
  }
  let total = document.querySelector('#total-value span');

  total.innerHTML = totalProduct;

 
  // let total = variosProduct.querySelector('#total-value span');

  // total.innerHTML = updateSubtotal();

  // let variosPrecio = product.querySelectorAll('.product').innerHTML;
  // let variosQuantity = product.querySelectorAll('.quantity input').value;
  // let variosSubtotal = product.querySelectorAll('.subtotal span');
  // let variosValor = variosPrecio * variosQuantity;

  // variosSubtotal.innerHTML = variosValor;

  // return variosValor;
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
