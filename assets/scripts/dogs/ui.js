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

module.exports = {
  indexDogsSuccess,
  indexDogsFailure,
  showDogSuccess,
  showDogFailure
}
