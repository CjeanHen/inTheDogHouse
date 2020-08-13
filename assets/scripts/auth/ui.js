'use strict'

const store = require('../store')

const signUpSuccess = response => {
  $('form').trigger('reset')
  $('#signUpHeader').text('Success!')
}

const signUpFailure = response => {
  $('form').trigger('reset')
  $('#signUpHeader').text('Try again')
}

const signInSuccess = response => {
  store.user = response.user
  $('form').trigger('reset')
  $('#unauthorized').hide()
  $('#authorized').show()
  $('.navbar').toggleClass('d-none')
  $('#signInFail').hide()
}

const signInFailure = response => {
  $('form').trigger('reset')
  $('#signInFail').show()
}

const signOutSuccess = response => {
  $('#authorized').hide()
  $('#unauthorized').show()
  $('.navbar').toggleClass('d-none')
  $('.content').empty()
}

const signOutFailure = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>There has been a mistake...please try again!</p>')
}

const changePwSuccess = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>Password changed!</p>')
}

const changePwFailure = response => {
  $('form').trigger('reset')
  $('#dogs').empty()
  $('#results').modal('show')
  $('#dogs').append('<p>Your password was not changed</p>')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePwSuccess,
  changePwFailure
}
