document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById('remove');
  button.addEventListener("click", function(){
    this.parentElement.removeChild(this);
  })

})
