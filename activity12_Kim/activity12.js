// Manual Slideshow
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1
let numberSlides = slides.length;
slideshow(currentSlide)

prev.addEventListener('click', function() {
  slideshow(currentSlide--)
})

next.addEventListener('click', function() {
  slideshow(currentSlide++)
})

function slideshow(n) {
  if (currentSlide > numberSlides) {
    currentSlide = 1
  }
  if (currentSlide < 1) {
    currentSlide = numberSlides
  }
  for (let eachSlide = 0; eachSlide < numberSlides; eachSlide++) {
    slides[eachSlide].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'block'
}

// Automatic Slideshow
const slideAuto = document.querySelectorAll('.slideAuto')
let indexSlide = 0
slideshowAuto()

function slideshowAuto() {
  let numSlides = slideAuto.length

  if (indexSlide >= numSlides) {
    indexSlide = 0
  }
  if (indexSlide < 0) {
    indexSlide = numSlides - 1
  }
  for (let eachIndex = 0; eachIndex < numSlides; eachIndex++) {
    slideAuto[eachIndex].style.display = 'none'
  }
  slideAuto[indexSlide].style.display = 'block'
  setTimeout(slideshowAuto, 3000)
  // Second argument is time in milliseconds.
  indexSlide++
}

// Forms
// View Password Functionality
const myPassword = document.querySelector('#myPassword')
const viewPassword = document.querySelector('#viewPassword')

viewPassword.addEventListener('click', function() {
  const secret = myPassword.getAttribute('type') === 'password' ? 'text' : 'password'
  myPassword.setAttribute('type', secret)
})

// Storage - Local and Session
const firstName = document.querySelector('#firstN')
const lastName = document.querySelector('#lastN')
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click', function() {
  localStorage.setItem('FN', firstName.value)
  sessionStorage.setItem('LN', lastName.value)
  firstName.value = ""
  lastName.value = ""
})

// Modal Window - Opening and Closing functionality
const openItem1 = document.querySelector('#openItem1')
const closeModal = document.querySelector('#closeModal')
const modalWindow = document.querySelector('.modalWindow')

openItem1.addEventListener('click', function() {
  modalWindow.style.display = 'block'
})

closeModal.addEventListener('click', function() {
  modalWindow.style.display = 'none'
})
