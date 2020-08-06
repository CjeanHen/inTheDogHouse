'use strict'

const showDogsTemplate = require('../templates/dog-listing.handlebars')
const showDogTemplate = require('../templates/show-dog.handlebars')

const indexDogsSuccess = response => {
  $('.content').empty()
  const dogListHtml = showDogsTemplate({ dogs: response.dogs })
  $('.content').append(dogListHtml)
}

const indexDogsFailure = error => {
  console.log(error)
  $('form').trigger('reset')
  $('.content').empty()
}

const showDogSuccess = response => {
  $('form').trigger('reset')
  $('.content').empty()
  const dogHtml = showDogTemplate({ dog: response.dog })
  $('.content').append(dogHtml)
}

const showDogFailure = error => {
  console.log(error)
}

const createDogSuccess = response => {
  console.log(response)
  $('form').trigger('reset')
  $('.content').empty()
  $('.content').append('<p>Added to the list!</p>')
}

const createDogFailure = error => {
  console.log(error)
}

const updateDogSuccess = response => {
  $('form').trigger('reset')
  $('.content').empty()
  $('.content').append('<p> Updated!</p>')
}

const updateDogFailure = error => {
  console.log(error)
}

const deleteDogSuccess = response => {
  $('form').trigger('reset')
  $('.content').empty()
  $('.content').append('<p>Congratulations on your new home!</p>')
}

const deleteDogFailure = error => {
  console.log(error)
}

module.exports = {
  indexDogsSuccess,
  indexDogsFailure,
  showDogSuccess,
  showDogFailure,
  createDogSuccess,
  createDogFailure,
  updateDogSuccess,
  updateDogFailure,
  deleteDogSuccess,
  deleteDogFailure
}
