'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onIndexDogs = event => {
  event.preventDefault()

  api.indexDogs()
    .then(ui.indexDogsSuccess)
    .catch(ui.indexDogsFailure)
}

const onShowDog = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.showDog(data)
    .then(ui.showDogSuccess)
    .catch(ui.showDogFailure)
}

module.exports = {
  onIndexDogs,
  onShowDog
}
