let foundation = document.getElementById('foundation')
let bootcamp = document.getElementById('bootcamp')
let foundationButton = document.getElementById('foundationButton')
let bootcampButton = document.getElementById('bootcampButton')

function alternateLearningPlan(e) {
  if (e.target === foundationButton) {
    foundation.classList.remove('hide')
    bootcamp.classList.add('hide')
  } else {
    foundation.classList.add('hide')
    bootcamp.classList.remove('hide')
  }
}

foundationButton.addEventListener('click', alternateLearningPlan)
bootcampButton.addEventListener('click', alternateLearningPlan)
