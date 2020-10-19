// Napisz event, który pobierze informacje z inputów (el.value) i wprowadzi nowy wpis do tablicy.
document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('add');
  const table = document.getElementById('orders');

  button.addEventListener("click", function(){
    const order = document.getElementById('orderId');
    const itemType = document.getElementById('item');
    const noItems = document.getElementById('quantity');
    const newTr = document.createElement("tr");

    const firstTd = document.createElement("td");
    firstTd.innerText = order.value;
    newTr.appendChild(firstTd);

    const secondTd = document.createElement("td");
    secondTd.innerText = itemType.value;
    newTr.appendChild(secondTd);

    const thirdTd = document.createElement("td");
    thirdTd.innerText = noItems.value;
    newTr.appendChild(thirdTd);

    table.appendChild(newTr);


    order.value = "";
    itemType.value = "";
    noItems.value = "";


  })
})
