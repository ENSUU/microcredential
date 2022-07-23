// Example 2
  // Selecting the button.
const btn2 = document.querySelector('#btn2')
  // Anonymous function - does not have a name.
    // Good for only one time.
  // When the button is clicked, an alert will pop up.
btn2.onclick = function() {
  alert('Hi there!')
}

  // Another way:
  /*
  function clickedBtn() {
    alert('Hi there!')
  }

  btn2.onclick = clickedBtn
  */

// Example 3 - onmouseover: hovering over an element with mouse.
const qccLink = document.querySelector('#qccLink')
qccLink.onclick = function() {
  console.log('QCC link was clicked!')
}

// No need to put parentheses after function name to call it.
qccLink.onmouseover = testing
function testing() {
  console.log('QCC Link was hovered or mouseover!')
}

// Example 4 - onmouseout
const title = document.querySelector('.title')
title.onmouseout = function() {
  console.log('The title was hovered on mouseout event.')
}

// Example 5 - click Event using addEventListener()
const btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', function() {
  alert('Button 5 was clicked!')
})

// Example 6
const btn6 = document.querySelector('#btn6')
btn6.addEventListener('mouseout', click1)
btn6.addEventListener('dblclick', click2)

function click1() {
  console.log('Button 6 = mouseout')
}

function click2() {
  alert('Button 6 was double clicked')
}

// Example 7
const colorContainer = document.querySelector('.colorContainer')
const btnColor = document.querySelector('#btnColor')

btnColor.addEventListener('click', function() {
  // Change background color of the div.
  colorContainer.style.backgroundColor = changeColor()
})

function changeColor() {
  // RGB color values ranges from 0 to 255
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})`
}

// Example 9
const divColor = document.querySelectorAll('.divColor')

for (let eachDiv of divColor) {
  eachDiv.addEventListener('mouseout', function() {
    eachDiv.style.backgroundColor = changeColor()
  })
}

// Example 10
  // .key of an event object returns the character.
  // .which of an event object return the ASCII value of the key pressed.
const inputTxt = document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown', function(e) {
  alert(`Keydown! Key "${e.key}" was pressed \nThe ASCII code for key "${e.key}" is ${e.which}`)
})

// Example 11
const display9 = document.querySelector('.display9')
window.addEventListener('scroll', function() {
  let pxTop = window.pageYOffset
  display9.innerHTML = `Window is ${pxTop}px away from the top.`
})

// Example 12
const toTop = document.querySelector('.toTop')
window.addEventListener('scroll', function() {
  let pxTop = window.pageYOffset
  if (pxTop > 80) {
    toTop.style.display = 'block'
  }
  else {
    toTop.style.display = 'none'
  }
})

// Example 13
const qccURL = document.querySelector('#qccURL')
qccURL.addEventListener('click', function(e) {
  e.preventDefault()
  alert('QCC website is OFF.')
})

// Example 14
const sBubble = document.querySelector('.sBubble')
const pBubble = document.querySelector('.pBubble')
const aBubble = document.querySelector('.aBubble')

sBubble.addEventListener('click', function() {
  alert('Section was clicked!')
})

pBubble.addEventListener('click', function(e) {
  e.stopPropagation()
  alert('Paragraph was clicked!')
})

aBubble.addEventListener('click', function(e) {
  e.stopPropagation()
  alert('Anchor was clicked!')
})
