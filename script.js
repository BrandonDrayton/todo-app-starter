// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

const completedList = document.querySelector("#complete-items")
const uncompletedList = document.querySelector("#incomplete-items")
// const checkMark = document.getElementById("#flexCheckChecked")

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
    label.classList.add("form-check-label", "ps=3")
    currentItem.appendChild(label)


    if (item.completed) {
        completedList.appendChild(currentItem)
        checkbox.checked = true
    }
    else {
        uncompletedList.appendChild(currentItem)
    }
}



// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.
