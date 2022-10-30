// *********************** VAR

// current slide
let slideIndex = 1
const slides = document.querySelectorAll('.slide')
const slidesTotal = slides.length

// button control
const paginArrowL = document.querySelector('#paginArrowL')
const paginArrowR = document.querySelector('#paginArrowR')

// title slider
const paginNum    = document.querySelector('#paginNum')
const paginTotal  = document.querySelector('#paginTotal')


// *********************** EVENT

paginArrowL.addEventListener('click', (e) => {
  e.preventDefault()
  ShowSlide(slideIndex -= 1)
})

paginArrowR.addEventListener('click', (e) => {
  e.preventDefault()
  ShowSlide(slideIndex += 1)
})


// *********************** FUNC

function CheckIndex() {
  if (slideIndex < 1) slideIndex = slidesTotal
  if (slideIndex > slidesTotal) slideIndex = 1
}

function ShowSlidesNum() {
  CheckIndex()

  let result = slideIndex
  
  if (result < 10) result = '0' + result

  paginNum.innerHTML = result
}

function ShowSlidesTotal() {
  let result = slidesTotal

  if (result < 10) result = '0' + result

  paginTotal.innerHTML = result
}

function ShowSlide() {
  ShowSlidesNum()

  for (let i = 0; i < slidesTotal; i++) {
    if (slides[i].classList.contains('_flex') && i != slideIndex-1) {
      slides[i].classList.remove('_flex')
    }
  }

  slides[slideIndex-1].classList.add('_flex')
}

ShowSlidesTotal()
ShowSlide()