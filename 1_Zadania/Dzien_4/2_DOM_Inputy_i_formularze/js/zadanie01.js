document.addEventListener("DOMContentLoaded", function (){
  const check = document.getElementById('invoice');
  const data = document.getElementById('invoiceData');
  if (check.checked === false) {
    data.style.display = "none";
  }

  check.addEventListener("click", function(){
    if(this.checked === false) {
      data.style.display = "none";
    } else {
      data.style.display = "block";
    }
  })

})
