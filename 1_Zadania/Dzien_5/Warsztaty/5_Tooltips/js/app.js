/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function (){
  const toolTips = [...document.querySelectorAll('.tooltip')];
  const toolTipParent = document.querySelector('body > p');
  console.log(toolTipParent);
  for(let i = 0; i < toolTips.length; i++){
    toolTips[i].addEventListener("mouseover", function(){
      // console.log(this.dataset.text);
      const tipWindow = document.createElement('span');
      tipWindow.classList.add("tooltipText");
      // tipWindow.innerText = "Text tooltipa";
      tipWindow.innerText = this.dataset.text;
      this.appendChild(tipWindow);


    })
    toolTips[i].addEventListener("mouseout", function(){
      // console.log(this.dataset.text);
      // console.log(this);

      const toDelete = this.firstElementChild;
      toDelete.parentElement.removeChild(toDelete);
    })
  }
})
