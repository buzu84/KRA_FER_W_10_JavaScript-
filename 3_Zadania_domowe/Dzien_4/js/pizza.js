document.addEventListener("DOMContentLoaded", function (){
  const elementsPrice = document.querySelectorAll('[data-price]');
  console.log(elementsPrice);
  const price = document.getElementById('price');
  const form = document.querySelector('form');

  const elementsCheck = document.querySelectorAll('[type="checkbox"]');
  // console.log(elementsCheck);


  elementsCheck[0].addEventListener("click", function(){
  if (elementsCheck[0].checked === true){
    for(let i = 0; i < elementsPrice.length; i++){
      elementsPrice[i].checked = true;
      }
    }
    let result = 0;
    for (let i = 0; i < elementsPrice.length; i++){
      result += parseFloat(elementsPrice[i].dataset.price);
      price.innerText = result.toFixed(2) + " zl";
    }
  })

  elementsCheck[6].addEventListener("click",function(){
    if (elementsCheck[6].checked === true){
      for(let i = 0; i < elementsCheck.length; i++){
        elementsCheck[i].checked = false;
    }
  }

    price.innerText ="0 zl";

})


  let result = 0;
  for (let i = 0; i < elementsPrice.length; i++){
    elementsPrice[i].addEventListener("click",function(){
      if(this.checked === true){
        // console.log(elementsPrice[i].dataset.price);
        result += parseFloat(this.dataset.price);
        price.innerText = result.toFixed(2) + " zl";
      }

    })
  }

  form.addEventListener("submit", function(event){
    const pageInfo = document.createElement("div");
    form.appendChild(pageInfo);
    pageInfo.innerText = "Do zapłaty: "+price.innerText;
    event.preventDefault();
  },
  {once:true}
)

// lepeiej price przechowywac jako liczba a nie string

})
