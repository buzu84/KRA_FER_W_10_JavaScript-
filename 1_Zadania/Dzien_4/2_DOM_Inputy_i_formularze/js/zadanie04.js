// document.addEventListener("DOMContentLoaded", function (){
//   const cardNumber = document.getElementById('name');
//   const cardName = document.getElementById('type');
//   // console.log(cardNumber);
//   // console.log(cardName);
//
//   cardNumber.addEventListener("keyup", function(){
//     // console.log('checking ' + cardNumber.value);
//
//     const VisaReg = /^4[0-9]{12,15}$/;
//     // starting with 4, then 12-15 other digits
//
//     const MasterReg = /^5[0-9]{15}$/;
//     // starting with 5, then 15 digits
//
//     const AmericanReg = /^3[4|7][0-9]{13}$/;
//     // starting with 3, then 4 or 7, then 13 other digits
//
//     if (cardNumber.value.match(VisaReg)){
//       cardName.innerText = "Visa";
//       cardNumber.style.border = "2px solid green";
//     } else if (cardNumber.value.match(MasterReg)){
//       cardName.innerText = "MasterCard";
//       cardNumber.style.border = "2px solid green";
//     } else if (cardNumber.value.match(AmericanReg)){
//       cardName.innerText = "American Express";
//       cardNumber.style.border = "2px solid green";
//     } else {
//       cardName.innerText = "";
//       cardNumber.style.border = "none";
//     }
//   })
// })

document.addEventListener("DOMContentLoaded", function(){
  const cardNumber = document.querySelector('#name');
  const cardName = document.querySelector('#type');

  cardNumber.addEventListener("keyup", function(){
    const VisaReg = /^4[0-9]{12,15}$/;
    const MasterReg = /^5[0-9]{15}$/;
    const AmericanReg = /^3[4|7][0-9]{13}$/;

    if (cardNumber.value.match(VisaReg)){
      cardName.innerText = "Visa";
      cardNumber.style.border = "2px solid green";
    } else if (cardNumber.value.match(MasterReg)){
      cardName.innerText = "MasterCard";
      cardNumber.style.border = "2px solid green";
    } else if (cardNumber.value.match(AmericanReg)){
      cardName.innerText = "American Express";
      cardNumber.style.border = "2px solid green";
    } else {
      cardName.innerText = "";
      cardNumber.style.border = "none";
    }


  })
})
