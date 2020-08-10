'use strict'

const showDogsTemplate = require('../templates/dog-listing.handlebars')
const showDogTemplate = require('../templates/show-dog.handlebars')

const indexDogsSuccess = response => {
  const dogListHtml = showDogsTemplate({ dogs: response.dogs })
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append(dogListHtml)
}

const indexDogsFailure = error => {
  console.log(error)
  $('form').trigger('reset')
  $('.content').empty()
}

const showDogSuccess = response => {
  $('form').trigger('reset')
  const dogHtml = showDogTemplate({ dog: response.dog })
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append(dogHtml)
}

const showDogFailure = error => {
  console.log(error)
}

const createDogSuccess = response => {
  console.log(response)
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>Added to the list!</p>')
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
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>Congratulations on your new best friend!</p>')
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
