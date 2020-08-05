'use strict'

const showDogsTemplate = require('../templates/dog-listing.handlebars')

const indexDogsSuccess = response => {
  console.log('SUCCESS!', response)
  const dogListHtml = showDogsTemplate({ dogs: response.dogs })
  $('.content').append(dogListHtml)
}

const indexDogsFailure = error => {
  console.log(error)
  $('.content').append('<h3>No dogs found :(</h3>')
}

module.exports = {
  indexDogsSuccess,
  indexDogsFailure
}
