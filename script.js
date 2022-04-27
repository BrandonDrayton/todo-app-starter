// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

const completedList = document.querySelector("#complete-items")
const uncompletedList = document.querySelector("#incomplete-items")
// const checkMark = document.getElementById("#flexCheckChecked")

for (let item of todoItems) {
    const currentItem = document.createElement("li")
    currentItem.innerText = item.title
    currentItem.classList.add("form-check")
    currentItem.classList.add("list-group-item")
    if (item.completed === true) {
        completedList.appendChild(currentItem)
        currentItem.ID = "#flexCheckChecked"

    }
    else {
        uncompletedList.appendChild(currentItem)
    }
}



// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.
