// Write your code here! 
const elementToRemove = document.getElementById('main')
const parentElement = elementToRemove.parentNode
parentElement.removeChild(elementToRemove)

var newHeader = document.createElement("h1")
newHeader.textContent = 'this is a new header'
newHeader.id = 'victory'
document.body.appendChild(newHeader)

var newHeader = document.createElement("h1")
newHeader.textContent = `${'Dennis'}is the champion`
newHeader.id = 'victory'
document.body.appendChild(newHeader)

