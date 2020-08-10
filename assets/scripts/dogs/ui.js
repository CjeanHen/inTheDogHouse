'use strict'

const showDogsTemplate = require('../templates/dog-listing.handlebars')
const showDogTemplate = require('../templates/show-dog.handlebars')

const indexDogsSuccess = response => {
  const dogListHtml = showDogsTemplate({ dogs: response.dogs })
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append(dogListHtml)
}

const indexDogsFailure = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>No dogs in the house!</p>')
}

const showDogSuccess = response => {
  $('form').trigger('reset')
  const dogHtml = showDogTemplate({ dog: response.dog })
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append(dogHtml)
}

const showDogFailure = response => {
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>No dogs in the house!</p>')
}

const createDogSuccess = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>Added to the list!</p>')
}

const createDogFailure = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>There has been a mistake...please try again!</p>')
}

const updateDogSuccess = response => {
  $('form').trigger('reset')
  $('.content').empty()
  $('.content').append('<p> Updated!</p>')
}

const updateDogFailure = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>There has been a mistake...please try again!</p>')
}

const deleteDogSuccess = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>Congratulations on your new best friend!</p>')
}

const deleteDogFailure = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>There has been a mistake...please try again!</p>')
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
