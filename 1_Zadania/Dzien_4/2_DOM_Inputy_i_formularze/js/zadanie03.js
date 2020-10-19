// Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich
document.addEventListener("DOMContentLoaded", function (){
  const table = document.querySelector('.table tbody');
  // const table = document.querySelector('.table');

  const form = document.querySelector('form');
  // console.log(table);
  // console.log(form);
  form.addEventListener("submit", function(event){
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const points1 = document.getElementById('points1');
    const points2 = document.getElementById('points2');

    if ((team1.value !== team2.value) && (points1.value > 0 && points2.value > 0)){
      const newTr = document.createElement('tr');
      table.appendChild(newTr);
      const newTeam1 = document.createElement('td');
      const newTeam2 = document.createElement('td');
      const result = document.createElement('td');
      newTeam1.innerText = team1.value;
      newTeam2.innerText = team2.value;
      result.innerText = points1.value+" - "+points2.value;
      newTr.appendChild(newTeam1);
      newTr.appendChild(newTeam2);
      newTr.appendChild(result);
    }
    event.preventDefault();

  })
})
