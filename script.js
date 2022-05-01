// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)
//  All variables outside of loops go here // 
const completedList = document.querySelector("#complete-items")
const incompleteList = document.querySelector("#incomplete-items")
const formControl = document.querySelector(".form-control")
const todoForm = document.querySelector("#todoForm")
const addButton = document.querySelector("#button-addon2")
addButton.style.backgroundColor = "rgb(53, 165, 218)"
addButton.style.color = "white"


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
    todoItems.push(newTask)
    i++

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
    // window.location.reload();


    checkbox.addEventListener("click", (e) => {
        if (checkbox.checked) {
            completedList.appendChild(currentItem)
        } else incompleteList.appendChild(currentItem)

    })

    const removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.classList.add("btn-outline-primary")
    removeButton.type = "button"
    removeButton.style.float = "right"
    currentItem.appendChild(removeButton)
    removeButton.addEventListener("click", (e) => {
        currentItem.remove(e)
        i--
    })

})
//  Tried to use this outside of loop to see if would use a click event...not exactly sure why it doesn't work
// const checkbox = document.createElement("input")
// checkbox.addEventListener("click", (e) => {
//     if (checkbox.checked) {
//         completedList.appendChild(e)
//     } else incompleteList.appendChild(e)

// })





// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.


for (let item of todoItems) {
    const currentItem = document.createElement("li")
    currentItem.classList.add("list-group-item")
    currentItem.style.color = "white"
    currentItem.style.backgroundColor = "rgb(53, 165, 218)"
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
    // Moved same event listener into this for loop -- Current Item could not be defined outside the loop
    // I THINK that is why it didn't work before...remember to ask about that.
    checkbox.addEventListener("click", (e) => {
        if (checkbox.checked) {
            completedList.appendChild(currentItem)
        } else incompleteList.appendChild(currentItem)

    })

    const removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.classList.add("btn-outline-primary")
    removeButton.type = "button"
    removeButton.style.float = "right"
    currentItem.appendChild(removeButton)
    removeButton.addEventListener("click", (e) => {
        currentItem.remove(e)
        i--
    })


}




