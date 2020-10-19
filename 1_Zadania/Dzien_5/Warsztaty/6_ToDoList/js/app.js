document.addEventListener("DOMContentLoaded", function (){
  const addTask = document.querySelector('#addTaskButton');
  const taskList = document.querySelector('#taskList');
  const enterTask = document.querySelector('#taskInput');
  const removeFinished = document.querySelector('#removeFinishedTasksButton');
  let clickCount = 0;

  addTask.addEventListener("click", function(){
    if (enterTask.value.length > 5 && enterTask.value.length < 100){
      let tasksToDo = document.querySelector('#counter');
      tasksToDo.innerText = parseInt(tasksToDo.innerText) + 1;

      const li = document.createElement('li');
      const taskNo = document.createElement('h1');
      taskNo.innerText = enterTask.value;
      enterTask.value = "";
      const btnDelete = document.createElement('button');
      btnDelete.innerText = "Delete";
      const btnComplete = document.createElement('button');
      btnComplete.innerText = "Complete";
      taskList.appendChild(li);
      li.appendChild(taskNo);
      li.appendChild(btnDelete);
      li.appendChild(btnComplete);


      btnComplete.addEventListener("click", function(){
        if (this.parentElement.classList.contains("done")){
          this.parentElement.classList.remove("done");
          tasksToDo.innerText = parseInt(tasksToDo.innerText) + 1;
        } else {
          this.parentElement.classList.add("done");
          tasksToDo.innerText = parseInt(tasksToDo.innerText) - 1;
        }
      })

      btnDelete.addEventListener("click", function(){
        if (!this.parentElement.classList.contains("done")){
          tasksToDo.innerText = parseInt(tasksToDo.innerText) - 1;
        }
        const toDelete = this.parentElement;
        toDelete.parentElement.removeChild(toDelete);
      })
    } else {
      alert("More than 5, less than 100");
    }
  })


  removeFinished.addEventListener("click", function(){
    const listElements = [...document.querySelectorAll('li')];
    for (let i = 0; i < listElements.length; i++){
      if (listElements[i].className === "done"){
        listElements[i].parentElement.removeChild(listElements[i]);
        // listElements[i].previousElementSibling.parentElement.removeChild(listElements[i]);
      }
    }
  })
})
// const foo = [1, 2, 3, 4];
// const bar = foo.filter(function(element, index, array) {
//   return element % 2 === 0;
// });
// console.log(bar);
