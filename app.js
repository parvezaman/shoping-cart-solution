/* 
// increase quantity in the cart
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('l');
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    // console.log(caseNumber);
    caseInput.value = parseInt(caseNumber) + 1;
})

// decrease quantity in the cart
document.getElementById('case-minus').addEventListener('click', function(){
    // console.log('l');
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    // console.log(caseNumber);
    caseInput.value = parseInt(caseNumber) - 1;
}) */

// 2 ta code same sorta tai amra 1ta alada function declare krbo amader code k DRY korar jnne
// function updateproductNumber(product, price, isIncreasing){
//     const productInput = document.getElementById(product + '-number');
//     let productNumber = productInput.value;
//     if(isIncreasing == true){
//         productNumber = parseInt(productNumber) + 1;
//     }
//     /* else if(isIncreasing == false){
//         if(caseNumber < 1){
//             return alert('you must be positive');
//         }
//         else{
//             caseInput.value = parseInt(caseNumber) - 1;
//         }
//     } */
//     // abar same jinista evabe o kra jeto
//     else if(productNumber > 0){
//         productNumber = parseInt(productNumber) - 1;
//     }

//     productInput.value = productNumber;

//     //update case-total
//     const productTotal = document.getElementById(product + '-total');
//     productTotal.innerText = productNumber * price;

//     //ekhn problem hocche last a ese amra caseNumber er sathe gun korci kintu caseNumber kintu age update hoini. a jnne product 2 tar jnne 1 taar price dkhacche.so to fix this.... following was the previous condition;
//     /* if(isIncreasing == true){
//         caseInput.value = parseInt(caseNumber) + 1;
//     }
//     else if(caseNumber > 0){
//         caseInput.value = parseInt(caseNumber) - 1;
//     } */
// }




// neat n clear version of the precious function

function updateproductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // subTotal
    calculateTotal();
}


function getInputValue(product){
    const phoneNumber = parseInt(document.getElementById(product + '-number').value);
    return phoneNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10; //10% tax
    const grandTotal = subTotal + tax;
    // return subTotal;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grand-total').innerText = grandTotal;
}


// increase PHONE quantity in the cart
document.getElementById('phone-plus').addEventListener('click', function(){
    updateproductNumber('phone', 1219, true);
})

// decrease PHONE quantity in the cart
document.getElementById('phone-minus').addEventListener('click', function(){
    updateproductNumber('phone', 1219, false);
})



// increase PHONE-CASE quantity in the cart
document.getElementById('case-plus').addEventListener('click', function(){
    updateproductNumber('case', 59, true);
})

// decrease PHONE-CASE quantity in the cart
document.getElementById('case-minus').addEventListener('click', function(){
    updateproductNumber('case', 59, false);
})

