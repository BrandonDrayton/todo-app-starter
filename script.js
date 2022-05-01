// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)
//  All variables outside of loops go here // 
const completedList = document.querySelector("#complete-items")
const incompleteList = document.querySelector("#incomplete-items")
const formControl = document.querySelector(".form-control")
const todoForm = document.querySelector("#todoForm")
i = 7
// const checkMark = document.getElementById("#flexCheckChecked")

// Form submission currently having title undefined error message
// Fixed error message by changing todoForm.value to formControl.value(it is looking for user input not the form itself)
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = {
        id: [i],
        title: formControl.value,
        complete: false,
    };
    todoItems.push(newTask);
    i++;

    const currentItem = document.createElement("li")
    currentItem.classList.add("list-group-item")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("form-check-input")
    currentItem.appendChild(checkbox)
    const label = document.createElement("label")
    // currentItem.innerHTML += " " + item.title
    label.innerText = newTask.title
    label.classList.add("form-check-label", "ps-3")
    currentItem.appendChild(label)
    incompleteList.appendChild(currentItem)
    console.log(newTask)
})





// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.


for (let item of todoItems) {
    const currentItem = document.createElement("li")
    currentItem.classList.add("list-group-item")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("form-check-input")
    currentItem.appendChild(checkbox)
    const label = document.createElement("label")
    // currentItem.innerHTML += " " + item.title
    label.innerText = item.title
    label.classList.add("form-check-label", "ps-3")
    currentItem.appendChild(label)


    if (item.completed) {
        completedList.appendChild(currentItem)
        checkbox.checked = true
    }
    else {
        incompleteList.appendChild(currentItem)
    }
}




