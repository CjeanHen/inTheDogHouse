'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePw = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.changePw(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePw
}
