document.addEventListener("DOMContentLoaded", () => {
  const createTask  = document.querySelector("[value='Create New Task']")
  console.log(createTask)

  createTask.addEventListener('click', function(e) {
    e.preventDefault()
    console.dir(e.target)

    const liContent = document.getElementById("new-task-description").value 
    // console.log(liContent)

    const liElement = document.createElement("li")
    const ulElement = document.getElementById("tasks")
    liElement.innerText = liContent

    let buttonTag = document.createElement("button")
    // console.log(buttonTag)
    // console.log(liElement)

    buttonTag.innerText = "X"
    liElement.appendChild(buttonTag)
    ulElement.appendChild(liElement)

    e.target.parentElement.reset()
    
    buttonTag.addEventListener('click', function(e){
        e.target.parentElement.remove()
    })

  })

});