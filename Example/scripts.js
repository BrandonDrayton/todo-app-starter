/** @type {HTMLButtonElement} */
const clickMeButton = document.querySelector('.click-me-button')

// clickMeButton.onclick = function() {
//   console.log('Lachlan\'s code: clicked!')
// }

// clickMeButton.onclick = function() {
//   console.log('Mayra\'s code: clicked!')
// }

clickMeButton.addEventListener('click', function (event) {
    console.log('Lachlan\'s code')
    console.log('x', event.clientX)
    console.log('y', event.clientY)
})

clickMeButton.addEventListener('click', function () {
    console.log('Mayra\'s code')
})

/** @type {HTMLHeadingElement} */
const pageSize = document.querySelector('.page-size')
window.addEventListener('resize', function (e) {
    pageSize.innerText = `Width: ${e.target.innerWidth}, Height: ${e.target.innerHeight}`
})

/** @type {HTMLImageElement} */
const followImg = document.querySelector('.follow')
window.addEventListener('mousemove', function (e) {
    followImg.style.left = e.clientX + 10 + 'px'
    followImg.style.top = e.clientY + 'px'
})


// select form to attach listener
const nameForm = document.querySelector('#name-form')
const heading = document.querySelector('#heading')
const nameField = document.querySelector('#name')
// handle the 'submit' event for forms
nameForm.addEventListener('submit', (event) => {
    // stop the default behaviour of the form
    // which is to submit and refresh
    event.preventDefault()
    // input.value is where the field data lives
    heading.innerText = `${nameField.value}'s Great Page!`
})



